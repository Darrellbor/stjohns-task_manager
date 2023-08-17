/*
Package cert encompassing all functions that deal with generating, parsing and using RSA keys
*/
package cert

import (
	"fmt"
	"net/http"
	"time"

	"github.com/Darrellbor/stjohns-task_manager/backend/database"
	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"github.com/golang-jwt/jwt/v5"
)

/*
# IssueToken

This method receives the user model and returns a jwt token string bound to that
supplied user and also an errorhub ErrorResponse
*/
func IssueToken(user models.Admin) (string, *errorhub.ErrorResponse) {
	key, parseErr := parseRsaFromPemPrv()

	if parseErr != nil {
		return "", parseErr
	}

	token, err := jwt.NewWithClaims(jwt.SigningMethodRS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 7).Unix(),
		"iat": time.Now().Unix(),
	}).SignedString(key)

	if err != nil {
		return "", errorhub.New(http.StatusBadRequest, "Failed to create token")
	}

	return token, nil
}

/*
# ValidateToken

This method receives the jwt authorization string and returns the admin user if everything checks out
or an errorhub ErrorResponse if something goes wrong
*/
func ValidateToken(authorization string) (models.Admin, *errorhub.ErrorResponse) {
	key, parseErr := parseRsaFromPemPub()

	if parseErr != nil {
		return models.Admin{}, parseErr
	}
	token, err := jwt.Parse(authorization, func(jwtToken *jwt.Token) (interface{}, error) {
		if _, ok := jwtToken.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, fmt.Errorf("unexpected method: %s", jwtToken.Header["alg"])
		}

		return key, nil
	})

	if err != nil {
		return models.Admin{}, errorhub.New(http.StatusUnauthorized, err.Error())
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok || !token.Valid {
		return models.Admin{}, errorhub.New(http.StatusUnauthorized, "Error occured validating identity")
	}

	if float64(time.Now().Unix()) > claims["exp"].(float64) {
		return models.Admin{}, errorhub.New(http.StatusUnauthorized, "Error occured validating identity")
	}

	var adminUser models.Admin
	database.Conn.First(&adminUser, claims["sub"])

	if adminUser.ID == 0 {
		return models.Admin{}, errorhub.New(http.StatusUnauthorized, "Error occured validating identity")
	}

	return adminUser, nil
}
