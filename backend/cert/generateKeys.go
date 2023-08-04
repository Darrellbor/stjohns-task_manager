package cert

import (
    "crypto/rand"
    "crypto/rsa"
    "crypto/x509"
    "encoding/pem"
    "fmt"
    "os"
)

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
    pem.Encode(privateKeyFile, privateKeyPEM)
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
    pem.Encode(publicKeyFile, publicKeyPEM)
    publicKeyFile.Close()

    fmt.Println("RSA key pair generated successfully!")
}