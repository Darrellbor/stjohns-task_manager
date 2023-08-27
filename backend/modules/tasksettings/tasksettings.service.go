package tasksettings

import (
	"fmt"
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

/*
# FetchTaskSettingsService

This function takes in a particular year,
finds all the taskSettings for that year and
returns them. If an error occurs it returns that too
*/
func FetchTaskSettingsService(year int) ([]FetchTaskSettingsRO, *errorhub.ErrorResponse) {
	var taskSettings []models.TaskSettings
	var taskSettingsList []FetchTaskSettingsRO
	result := database.Conn.Where("year = ?", year).Find(&taskSettings)

	if result.RowsAffected == 0 {
		return []FetchTaskSettingsRO{}, errorhub.New(http.StatusNotFound, fmt.Sprintf("There are no task settings to return in %d", year))
	} else if result.Error != nil {
		return []FetchTaskSettingsRO{}, errorhub.New(http.StatusBadRequest, "An error occured trying to retrieve task settings")
	}

	for _, taskSetting := range taskSettings {
		taskSettingsList = append(
			taskSettingsList,
			FetchTaskSettingsRO{
				ID: taskSetting.ID,
				TaskSettingRO: TaskSettingRO{
					Day:       taskSetting.Day,
					Month:     taskSetting.Month,
					Year:      taskSetting.Year,
					Time:      taskSetting.Time,
					IsActive:  taskSetting.IsActive,
					CreatedAt: taskSetting.CreatedAt,
					UpdatedAt: taskSetting.UpdatedAt,
				},
			},
		)
	}

	return taskSettingsList, nil
}

/*
# DeleteTaskSettingsByIdService

takes the Id of a task, checks if it exists
and if it does delete the task else return an error
*/
func DeleteTaskSettingsByIdService(id uint) (*errorhub.ErrorResponse) {
	var taskSettingToDelete models.TaskSettings
	result := database.Conn.First(&taskSettingToDelete, id)


	if result.RowsAffected == 0 {
		return errorhub.New(http.StatusNotFound, "Task Setting could not be found")
	} else if result.Error != nil {
		return errorhub.New(http.StatusBadRequest, "An error occured while trying to delete task setting")
	}

	result = database.Conn.Delete(&taskSettingToDelete, id)
	if result.Error != nil {
		return errorhub.New(http.StatusBadRequest, "An error occured while trying to delete task setting")
	}

	return nil
}
