package taskcategories

import (
	"net/http"

	"github.com/Darrellbor/stjohns-task_manager/backend/database"
	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
)

/*
# CreateTaskCategoriesService

- Check that the task setting exists
- append the task setting id to the new task categories
- bulk create all the categories
*/
func CreateTaskCategoriesService(newTaskCategories []CreateTaskCategoriesDTO, taskSettingId uint) *errorhub.ErrorResponse {
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
			Name:           newTaskCategory.Name,
			PeopleNeeded:   newTaskCategory.PeopleNeeded,
		})
	}

	result = database.Conn.Create(&taskCategoriesToSave)

	if result.Error != nil {
		return errorhub.New(http.StatusBadRequest, "An error occured while trying to save task category")
	}

	return nil
}

/*
# FetchTaskCategoriesService

- fetch categories where task setting id is equal to the supplied id
- return formated categories or error
*/
func FetchTaskCategoriesService(taskSettingId uint) ([]FetchTaskCategoriesRO, *errorhub.ErrorResponse) {
	var taskCategories []models.TaskCategories
	var taskCategoriesList []FetchTaskCategoriesRO
	result := database.Conn.Where("task_settings_id = ?", taskSettingId).Find(&taskCategories)

	if result.RowsAffected == 0 {
		return []FetchTaskCategoriesRO{}, errorhub.New(http.StatusNotFound, "No Task categories found")
	} else if result.Error != nil {
		return []FetchTaskCategoriesRO{}, errorhub.New(http.StatusBadRequest, "An error occured while trying to fetch task categories")
	}

	for _, taskCategory := range taskCategories {
		taskCategoriesList = append(taskCategoriesList, FetchTaskCategoriesRO{
			ID:           taskCategory.ID,
			Name:         taskCategory.Name,
			PeopleNeeded: taskCategory.PeopleNeeded,
		})
	}
	return taskCategoriesList, nil
}
