package admin

import (
	"fmt"
	"net/http"

	"github.com/Darrellbor/stjohns-task_manager/backend/cert"
	"github.com/Darrellbor/stjohns-task_manager/backend/database"
	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"golang.org/x/crypto/bcrypt"
)

/*
# RegisterService

This service takes in the new admin user data and the logged in user data and 
attempts to create a new user. 

To do this it 
- checks if the user previously exists,
- encrypt the supplied password
- formats the repsonse object

If an error occurs, it is encoded in the ErrorResponse and sent back to the controller
*/
func RegisterService(newAdmin RegisterDTO, loggedInUser models.Admin) (RegisterRO, *errorhub.ErrorResponse) {
	var checkUser models.Admin
	database.Conn.Unscoped().First(&checkUser, "email = ?", newAdmin.Email)

	if checkUser.ID != 0 {
		return RegisterRO{}, errorhub.New(http.StatusBadRequest, "Admin user with this email already exists")
	}

	passwordHash, err := bcrypt.GenerateFromPassword([]byte(newAdmin.Password), 10)

	if err != nil {
		return RegisterRO{}, errorhub.New(http.StatusBadRequest, "Error occured while hashing password")
	}

	adminUser := models.Admin{Email: newAdmin.Email, FullName: newAdmin.FullName, Password: string(passwordHash), CreatedById: loggedInUser.ID}
	result := database.Conn.Create(&adminUser)

	if result.Error != nil {
		return RegisterRO{}, errorhub.New(http.StatusBadRequest, "Error occured while creating the new admin user")
	}

	return RegisterRO{
		Message: "Admin user has been successully created",
		User: RegisterUserRO{
			FullName: adminUser.FullName,
			Email:    adminUser.Email,
		},
	}, nil
}

/*
# LoginService

This service takes in the admin user attempting to login and 
attempts to login that user 

To do this it 
- checks if the user exists,
- compare the supplied password with the hashed saved password
- issues a new jwt token
- formats the repsonse object

If an error occurs, it is encoded in the ErrorResponse and sent back to the controller
*/
func LoginService(checkUser LoginDTO) (LoginRO, *errorhub.ErrorResponse) {
	var adminUser models.Admin
	database.Conn.First(&adminUser, "email = ?", checkUser.Email)

	if adminUser.ID == 0 {
		return LoginRO{}, errorhub.New(http.StatusUnauthorized, "Invalid email/password combination")
	}

	err := bcrypt.CompareHashAndPassword([]byte(adminUser.Password), []byte(checkUser.Password))

	if err != nil {
		return LoginRO{}, errorhub.New(http.StatusUnauthorized, "Invalid email/password combination")
	}

	token, tokenErr := cert.IssueToken(adminUser)

	if tokenErr != nil {
		return LoginRO{}, tokenErr
	}

	return LoginRO{
		Message: "Admin user successfully logged in",
		Token:   token,
	}, nil
}

/*
# FetchAdminUsersService

This service takes in the logged in user data and 
returns all the users in the database

To do this it 
- finds all users
- checks if there are rows to return
- checks if an error occured and
- formats the repsonse object

If an error occurs, it is encoded in the ErrorResponse and sent back to the controller
*/
func FetchAdminUsersService(loggedInUserId uint) ([]AdminUsersRO, *errorhub.ErrorResponse) {
	var adminUsers []models.Admin
	var adminUsersList []AdminUsersRO
	result := database.Conn.Find(&adminUsers)

	if result.RowsAffected == 0 {
		return []AdminUsersRO{}, errorhub.New(http.StatusNotFound, "There are no admin users to return")
	} else if result.Error != nil {
		return []AdminUsersRO{}, errorhub.New(http.StatusBadRequest, "An error occured trying to retrieve admin users")
	}

	for _, adminUser := range adminUsers {
		adminUsersList = append(
			adminUsersList,
			AdminUsersRO{
				Email:          adminUser.Email,
				FullName:       adminUser.FullName,
				IsLoggedInUser: loggedInUserId == adminUser.ID,
			},
		)
	}

	return adminUsersList, nil
}

/*
# DeleteAdminUserService

This service takes in an email and attempts to delete that email

To do this it 
- find the user in the database
- checks if there are rows to return
- checks if an error occured
- delete the user
- return nil

If an error occurs, it is encoded in the ErrorResponse and sent back to the controller
*/
func DeleteAdminUserService(email string) *errorhub.ErrorResponse {
	var userToDelete models.Admin
	result := database.Conn.First(&userToDelete, "email = ?", email)

	if result.RowsAffected == 0 {
		return errorhub.New(http.StatusBadRequest, fmt.Sprintf("User with email %s could not be found", email))
	} else if result.Error != nil {
		return errorhub.New(http.StatusBadRequest, "An error occured while trying to delete admin user")
	}

	result = database.Conn.Where("email = ?", email).Delete(&userToDelete)
	if result.Error != nil {
		return errorhub.New(http.StatusBadRequest, "An error occured while trying to delete admin user")
	}

	return nil
}
