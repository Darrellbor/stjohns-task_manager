package tasksettings

import (
	"net/http"
	"time"

	"github.com/Darrellbor/stjohns-task_manager/backend/database"
	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
)

/*
# CreateTaskSettingsService

This service takes in the newTaskSetting, adds it to the DB and returns
the response object or any encountered errors.
*/
func CreateTaskSettingsService(
	newTaskSetting CreateTaskSettingsDTO,
	loggedInUserId uint,
) (CreateTaskSettingsRO, *errorhub.ErrorResponse) {
	taskSetting := models.TaskSettings{
		Day:      newTaskSetting.Day,
		Month:    newTaskSetting.Month,
		Year:     newTaskSetting.Year,
		Time:     time.Unix(int64(newTaskSetting.Time), 0),
		IsActive: newTaskSetting.IsActive || false,
		SetById:  loggedInUserId,
	}
	result := database.Conn.Create(&taskSetting)

	if result.Error != nil {
		return CreateTaskSettingsRO{}, errorhub.New(http.StatusBadRequest, "Error occured creating new task setting")
	}
	return CreateTaskSettingsRO{
		Message: "Task setting successfully created",
		TaskSetting: TaskSettingRO{
			Day:       taskSetting.Day,
			Month:     taskSetting.Month,
			Year:      taskSetting.Year,
			Time:      taskSetting.Time,
			IsActive:  taskSetting.IsActive,
			CreatedAt: taskSetting.CreatedAt,
			UpdatedAt: taskSetting.UpdatedAt,
		},
	}, nil
}
