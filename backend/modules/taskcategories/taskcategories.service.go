package taskcategories

import (
	"net/http"

	"github.com/Darrellbor/stjohns-task_manager/backend/database"
	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"github.com/Darrellbor/stjohns-task_manager/backend/modules/tasks"
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
		return errorhub.New(http.StatusNotFound, "Task Setting could not be found")
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

/*
# FetchTaskCategoriesWithTasksService

- receive the taskSettingId
- call the FetchTaskCategoriesService with the taskSettingId and
- if there are no errors, call the fetch tasks service and pass the category ID for each
- return the category list with tasks
*/
func FetchTaskCategoriesWithTasksService(taskSettingId uint) ([]FetchTaskCategoriesWithTasksRO, *errorhub.ErrorResponse) {
	var taskCategoriesWithTasks []FetchTaskCategoriesWithTasksRO
	taskCategories, err := FetchTaskCategoriesService(taskSettingId)

	if err != nil {
		return []FetchTaskCategoriesWithTasksRO{}, err
	}

	for _, taskCategory := range taskCategories {
		tasks, err := tasks.FetchTasksByCategory(taskCategory.ID)

		if err != nil && err.Code != http.StatusNotFound {
			return []FetchTaskCategoriesWithTasksRO{}, err
		}

		taskCategoriesWithTasks = append(taskCategoriesWithTasks, FetchTaskCategoriesWithTasksRO{
			ID:           taskCategory.ID,
			Name:         taskCategory.Name,
			PeopleNeeded: taskCategory.PeopleNeeded,
			Tasks:        tasks,
		})
	}

	return taskCategoriesWithTasks, nil
}

/*
# DeleteTaskCategoryService

- check that the task category exists
- if it exists delete it and if it doesn't send back an error
*/
func DeleteTaskCategoryService(id uint) *errorhub.ErrorResponse {
	var taskCategoryToDelete models.TaskCategories
	var tasksForCategoryExists models.Tasks
	result := database.Conn.First(&taskCategoryToDelete, id)

	if result.RowsAffected == 0 {
		return errorhub.New(http.StatusNotFound, "Task category ID could not be found")
	} else if result.Error != nil {
		return errorhub.New(http.StatusBadRequest, "An error occured while trying to delete task category")
	}

	result = database.Conn.Where("task_category_id = ?", taskCategoryToDelete.ID).Find(&tasksForCategoryExists)

	if result.RowsAffected > 0 {
		return errorhub.New(http.StatusBadRequest, "You cannot delete this category because volunteers have already shown interest")
	}

	result = database.Conn.Delete(&taskCategoryToDelete, id)
	if result.Error != nil {
		return errorhub.New(http.StatusBadRequest, "An error occured while trying to delete task category")
	}
	return nil
}
