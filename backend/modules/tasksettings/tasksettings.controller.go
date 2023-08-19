package tasksettings

import (
	"net/http"

	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"github.com/gin-gonic/gin"
	"github.com/golodash/galidator"
)

var g = galidator.New()

/*
# CreateTaskSettingsController

This function takes in the gin context, validates the request body using
the galidator package. If there is an error returns it in the errors object
and if there is no error, call the create tasksettings service and
check if there is a returned error. If there is execute it else return a json
*/
func CreateTaskSettingsController(ctx *gin.Context) {
	var validator = g.Validator(CreateTaskSettingsDTO{}, galidator.Messages{
		"required": "$field is required",
	})

	var taskSetting CreateTaskSettingsDTO
	if err := ctx.ShouldBind(&taskSetting); err != nil {
		validationErr := errorhub.New(http.StatusBadRequest, "Validation Failed", validator.DecryptErrors(err))
		validationErr.Execute(ctx)
	} else {
		loggedInUser, _ := ctx.Get("user")
		typedLoggedInUser, _ := loggedInUser.(models.Admin)
		newTaskSetting, err := CreateTaskSettingsService(taskSetting, typedLoggedInUser.ID)

		if err != nil {
			err.Execute(ctx)
			return
		}

		ctx.JSON(http.StatusCreated, newTaskSetting)
	}
}
