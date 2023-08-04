package admin

import (
	"net/http"

	"github.com/Darrellbor/stjohns-task_manager/backend/database"
	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
	"github.com/Darrellbor/stjohns-task_manager/backend/error"
	"golang.org/x/crypto/bcrypt"
)

func RegisterService(newAdmin RegisterDTO) (RegisterRO, *error.ErrorResponse) {
	passwordHash, err := bcrypt.GenerateFromPassword([]byte(newAdmin.Password), 10)

	if err != nil {
		return RegisterRO{}, error.New(http.StatusBadRequest, "Error occured while hashing password")
	}

	adminUser := models.Admin{Email: newAdmin.Email, FullName: newAdmin.FullName, Password: string(passwordHash)}
	result := database.Conn.Create(&adminUser)

	if result.Error != nil {
		return RegisterRO{}, error.New(http.StatusBadRequest, "Error occured while creating the new admin user")
	}

	return RegisterRO{
		Message: "Admin user has been successully created",
		User: RegisterUserRO{
			FullName: adminUser.FullName,
			Email:    adminUser.Email,
		},
	}, nil
}
