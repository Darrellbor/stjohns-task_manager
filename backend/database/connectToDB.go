// package database is the package that holds everything relating to 
// the database and it's interaction
package database

import (
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

/*
# Conn

This is a global variable that holds the open connection to the database
*/
var Conn *gorm.DB

/*
# ConnectToDB

This function handles retrieving the DB_URI from the environment variable
and handles connecting to the database and storing it to the global Conn variable
*/
func ConnectToDB() {
	var err error
	dsn := os.Getenv("DB_URI")
	Conn, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to DB")
	}
}
