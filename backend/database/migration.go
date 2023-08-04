package database

import (
	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
)

func AutoMigrate() {
	err := Conn.Debug().AutoMigrate(
		&models.Admin{},
	)

	if err != nil {
		panic("Tables failed to migrate!")
	}
}
