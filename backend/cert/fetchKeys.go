package cert

import (
	"crypto/rsa"
	"net/http"
	"os"

	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"github.com/golang-jwt/jwt/v5"
)

/*
# parseRsaFromPemPrv

This method is responsible for fetching the private key from this folder and parsing it
into a format that is usable via code
*/
func parseRsaFromPemPrv() (*rsa.PrivateKey, *errorhub.ErrorResponse) {
	prvKey, err := os.ReadFile("./cert/id_rsa")
	if err != nil {
		return nil, errorhub.New(http.StatusBadRequest, "Error occured parsing keys from PEM")
	}

	key, err := jwt.ParseRSAPrivateKeyFromPEM(prvKey)
	if err != nil {
		return nil, errorhub.New(http.StatusBadRequest, "Error occured parsing keys from PEM")
	}

	return key, nil
}

/*
# parseRsaFromPemPub

This method is responsible for fetching the public key from this folder and parsing it
into a format that is usable via code
*/
func parseRsaFromPemPub() (*rsa.PublicKey, *errorhub.ErrorResponse) {
	pubKey, err := os.ReadFile("./cert/id_rsa.pem")
	if err != nil {
		return nil, errorhub.New(http.StatusBadRequest, err.Error())
	}

	key, err := jwt.ParseRSAPublicKeyFromPEM(pubKey)
	if err != nil {
		return nil, errorhub.New(http.StatusBadRequest, err.Error())
	}

	return key, nil
}
