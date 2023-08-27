package tasks

import (
	"net/http"

	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"github.com/gin-gonic/gin"
	"github.com/golodash/galidator"
)

var g = galidator.New()

/*
# CreateTaskController

	This function
	- accepts the gin context
	- validates the request body using the galidator package and
	- call the create task service and check if there is a returned
	error. If there is execute it else return a json
*/
func CreateTaskController(ctx *gin.Context) {
	var validator = g.Validator(CreateTaskDTO{}, galidator.Messages{
		"required": "$field is required",
		"contains": "$field should contain at least first name and last name",
	})

	var newTask CreateTaskDTO

	if err := ctx.ShouldBind(&newTask); err != nil {
		validationErr := errorhub.New(http.StatusBadRequest, "Validation Failed", validator.DecryptErrors(err))
		validationErr.Execute(ctx)
	} else {
		createdTask, err := CreateTaskService(newTask)

		if err != nil {
			err.Execute(ctx)
			return
		}

		ctx.JSON(http.StatusCreated, createdTask)
	}
}

/*
# VerifyTaskController

	This function
	- accepts the gin context
	- validates the request body using the galidator package and
	- cells the verify task service and check if there is a returned
	error. If there is execute it else return a json
*/
func VerifyTaskController(ctx *gin.Context) {
	var validator = g.Validator(VerifyTaskDTO{}, galidator.Messages{
		"required": "$field is required",
	})

	var taskToVerify VerifyTaskDTO

	if err := ctx.ShouldBind(&taskToVerify); err != nil {
		validationErr := errorhub.New(http.StatusBadRequest, "Validation Failed", validator.DecryptErrors(err))
		validationErr.Execute(ctx)
	} else {
		verifiedTask, err := VerifyTaskService(taskToVerify)

		if err != nil {
			err.Execute(ctx)
			return
		}

		ctx.JSON(http.StatusOK, verifiedTask)
	}
}
