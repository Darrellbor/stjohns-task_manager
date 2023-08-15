package admin

import (
	"net/http"

	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
	"github.com/gin-gonic/gin"
	"github.com/golodash/galidator"
)

var g = galidator.New()

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
