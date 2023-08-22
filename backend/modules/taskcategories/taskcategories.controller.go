package taskcategories

import (
	"net/http"
	"strconv"

	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"github.com/gin-gonic/gin"
	"github.com/golodash/galidator"
)

var g = galidator.New()

/*
# CreateTaskCategoriesController

This function takes in the gin context, validates the request body using
the galidator package and also checks that the task setting ID is present.
If there is an error returns it in the errors object and if there is no error,
call the create task categories service and check if there is a returned
error. If there is execute it else return a json
*/
func CreateTaskCategoriesController(ctx *gin.Context) {
	taskSettingId := ctx.Param("taskSettingId")

	var validator = g.Validator(CreateTaskCategoriesDTO{}, galidator.Messages{
		"required": "$field is required",
		"gt":       "$field cannot be 0",
	})

	var taskcategories []CreateTaskCategoriesDTO
	if taskSettingId == "" {
		err := errorhub.New(http.StatusBadRequest, "This id of the task setting is required")
		err.Execute(ctx)
	} else if err := ctx.ShouldBind(&taskcategories); len(taskcategories) <= 0 || err != nil {
		validationErr := errorhub.New(http.StatusBadRequest, "Validation Failed", validator.DecryptErrors(err))
		validationErr.Execute(ctx)
	} else {
		typedTaskSettingId, _ := strconv.Atoi(taskSettingId)
		err := CreateTaskCategoriesService(taskcategories, uint(typedTaskSettingId))

		if err != nil {
			err.Execute(ctx)
			return
		}

		ctx.JSON(http.StatusCreated, gin.H{"message": "Task Categories successfully created", "taskCategories": taskcategories})
	}
}
