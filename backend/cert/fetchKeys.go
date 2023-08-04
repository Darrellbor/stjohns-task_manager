package cert

import (
	"crypto/rsa"
	"io/ioutil"
	"net/http"

	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"github.com/golang-jwt/jwt/v5"
)

func parseRsaFromPemPrv() (*rsa.PrivateKey, *errorhub.ErrorResponse) {
	prvKey, err := ioutil.ReadFile("./cert/id_rsa")
	if err != nil {
		return nil, errorhub.New(http.StatusBadRequest, "Error occured parsing keys from PEM")
	}

	key, err := jwt.ParseRSAPrivateKeyFromPEM(prvKey)
	if err != nil {
		return nil, errorhub.New(http.StatusBadRequest, "Error occured parsing keys from PEM")
	}

	return key, nil
}

func parseRsaFromPemPub() (*rsa.PublicKey, *errorhub.ErrorResponse) {
	pubKey, err := ioutil.ReadFile("./cert/id_rsa.pem")
	if err != nil {
		return nil, errorhub.New(http.StatusBadRequest, err.Error())
	}

	key, err := jwt.ParseRSAPublicKeyFromPEM(pubKey)
	if err != nil {
		return nil, errorhub.New(http.StatusBadRequest, err.Error())
	}

	return key, nil
}
