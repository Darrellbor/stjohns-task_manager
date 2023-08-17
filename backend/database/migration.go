package database

import (
	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
)

/*
# AutoMigrate

This function handles migrations of the models
and the table in the actual database
*/
func AutoMigrate() {
	err := Conn.Debug().AutoMigrate(
		&models.Admin{},
		&models.TaskSettings{},
	)

	if err != nil {
		panic("Tables failed to migrate!")
	}
}
