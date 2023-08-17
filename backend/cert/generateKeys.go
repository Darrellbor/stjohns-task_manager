package cert

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"fmt"
	"os"
)

/*
# GenerateKeys

This method is responsible for generating RSA public and private keys, encoding them
and saving them to this folder/module cert
*/
func GenerateKeys() {
	// Generate a new RSA private key with 2048 bits
	privateKey, err := rsa.GenerateKey(rand.Reader, 2048)
	if err != nil {
		fmt.Println("Error generating RSA private key:", err)
		os.Exit(1)
	}

	// Encode the private key to the PEM format
	privateKeyPEM := &pem.Block{
		Type:  "RSA PRIVATE KEY",
		Bytes: x509.MarshalPKCS1PrivateKey(privateKey),
	}
	privateKeyFile, err := os.Create("./cert/id_rsa")
	if err != nil {
		fmt.Println("Error creating private key file:", err)
		os.Exit(1)
	}
	err = pem.Encode(privateKeyFile, privateKeyPEM)
	if err != nil {
		fmt.Println("Error encoding private key PEM and File")
		os.Exit(1)
	}
	privateKeyFile.Close()

	// Extract the public key from the private key
	publicKey := &privateKey.PublicKey

	// Encode the public key to the PEM format
	publicKeyPEM := &pem.Block{
		Type:  "RSA PUBLIC KEY",
		Bytes: x509.MarshalPKCS1PublicKey(publicKey),
	}
	publicKeyFile, err := os.Create("./cert/id_rsa.pem")
	if err != nil {
		fmt.Println("Error creating public key file:", err)
		os.Exit(1)
	}
	err = pem.Encode(publicKeyFile, publicKeyPEM)
	if err != nil {
		fmt.Println("Error encoding public key PEM and File")
		os.Exit(1)
	}
	publicKeyFile.Close()

	fmt.Println("RSA key pair generated successfully!")
}
