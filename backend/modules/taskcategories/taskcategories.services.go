package taskcategories

import (
	"net/http"

	"github.com/Darrellbor/stjohns-task_manager/backend/database"
	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
)

/*
# CreateTaskCategoriesService


*/
func CreateTaskCategoriesService(newTaskCategories []CreateTaskCategoriesDTO, taskSettingId uint) (*errorhub.ErrorResponse) {
	var checkTaskSetting models.TaskSettings
	var taskCategoriesToSave []models.TaskCategories
	result := database.Conn.First(&checkTaskSetting, taskSettingId)
	
	if result.RowsAffected == 0 {
		return errorhub.New(http.StatusBadRequest, "Task Setting could not be found")
	} else if result.Error != nil {
		return errorhub.New(http.StatusBadRequest, "An error occured while trying to fetch task setting")
	}

	for _, newTaskCategory := range newTaskCategories {
		taskCategoriesToSave = append(taskCategoriesToSave, models.TaskCategories{
			TaskSettingsId: taskSettingId,
			Name: newTaskCategory.Name,
			PeopleNeeded: newTaskCategory.PeopleNeeded,
		})
	}

	result = database.Conn.Create(&taskCategoriesToSave)

	if result.Error != nil {
		return errorhub.New(http.StatusBadRequest, "An error occured while trying to save task category")
	}

	return nil
}