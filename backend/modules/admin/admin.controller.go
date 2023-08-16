package admin

import (
	"net/http"

	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"github.com/gin-gonic/gin"
	"github.com/golodash/galidator"
)

var g = galidator.New()

/*
# RegisterController

This function takes in the gin context, validates the request body using
the galidator package. If there is an error returns it in the errors object
and if there is no error, call the register service and check if there is 
a returned error. If there is execute it else return a json
*/
func RegisterController(ctx *gin.Context) {
	var validator = g.Validator(RegisterDTO{}, galidator.Messages{
		"required": "$field is required",
		"min":      "$field requires a length greater than or equal to 8",
		"max":      "$field should be less than 32 characters",
		"contains": "$field should contain at least first name and last name",
	})

	var adminUser RegisterDTO
	err := ctx.ShouldBindJSON(&adminUser)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"errors": validator.DecryptErrors(err),
		})
	} else {
		loggedInUser, _ := ctx.Get("user")
		savedAdminUser, err := RegisterService(adminUser, loggedInUser.(models.Admin))

		if err != nil {
			err.Execute(ctx)
			return
		}

		ctx.JSON(http.StatusCreated, savedAdminUser)
	}
}

/*
# LoginController

This function takes in the gin context, validates the request body using
the galidator package. If there is an error returns it in the errors object
and if there is no error, call the login service and check if there is 
a returned error. If there is execute it else return a json
*/
func LoginController(ctx *gin.Context) {
	var validator = g.Validator(LoginDTO{}, galidator.Messages{
		"required": "$field is required",
		"min":      "$field requires a length greater than or equal to 8",
		"max":      "$field should be less than 32 characters",
	})

	var adminUser LoginDTO
	err := ctx.ShouldBindJSON(&adminUser)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"errors": validator.DecryptErrors(err),
		})
	} else {

		retrievedUser, err := LoginService(adminUser)

		if err != nil {
			err.Execute(ctx)
			return
		}

		ctx.JSON(http.StatusOK, retrievedUser)
	}
}

/*
# FetchAdminUsersController

This function takes in the gin context, retrieves the logged in user from the auth guard middleware, 
call the fetch admin user service and check if there is 
a returned error. If there is execute it else return a json
*/
func FetchAdminUsersController(ctx *gin.Context) {
	loggedInUser, _ := ctx.Get("user")
	typedLoggedInUser, _ := loggedInUser.(models.Admin)
	adminUsers, err := FetchAdminUsersService(typedLoggedInUser.ID)

	if err != nil {
		err.Execute(ctx)
		return
	}

	ctx.JSON(http.StatusOK, adminUsers)
}

/*
# DeleteAdminUserController

This function takes in the gin context, retrieves the email field from the URI param, 
and validates it. Call the delete admin user service and check if there is 
a returned error. If there is execute it else return a json
*/
func DeleteAdminUserController(ctx *gin.Context) {
	email := ctx.Param("email")

	if email == "" {
		err := errorhub.New(http.StatusBadRequest, "The email is required")
		err.Execute(ctx)
	} else {
		err := DeleteAdminUserService(email)
		if err != nil {
			err.Execute(ctx)
			return
		}

		ctx.JSON(http.StatusOK, gin.H{"message": "Admin User Successfully Deleted"})
	}
}
