package tasks

import (
	"fmt"
	"net/http"

	"github.com/Darrellbor/stjohns-task_manager/backend/database"
	"github.com/Darrellbor/stjohns-task_manager/backend/database/models"
	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
)

/*
# CreateTaskService

- takes in the new task to add
- checks if the category exists
- check that this user isn't added twice into the same category
- create new task
*/
func CreateTaskService(newTask CreateTaskDTO) (CreateTaskRO, *errorhub.ErrorResponse) {
	var categoryExists models.TaskCategories
	var taskExists models.Tasks

	result := database.Conn.First(&categoryExists, newTask.TaskCategoryId)

	if result.RowsAffected == 0 {
		return CreateTaskRO{}, errorhub.New(http.StatusBadRequest, "Volunteer cannot be created for a non-existent category")
	} else if result.Error != nil {
		return CreateTaskRO{}, errorhub.New(http.StatusBadRequest, "An error occured while trying to check task category")
	}

	result = database.Conn.First(&taskExists, "email = ? AND task_category_id = ?", newTask.Email, newTask.TaskCategoryId)

	if result.RowsAffected > 0 {
		return CreateTaskRO{}, errorhub.New(http.StatusBadRequest, "Volunteer already exists on this task category")
	} else if result.Error != nil {
		return CreateTaskRO{}, errorhub.New(http.StatusBadRequest, "An error occured while trying to check task")
	}

	task := models.Tasks{FullName: newTask.FullName, Email: newTask.Email, EmailNotification: newTask.EmailNotification, TaskCategoryId: newTask.TaskCategoryId}
	result = database.Conn.Create(&task)

	if result.Error != nil {
		return CreateTaskRO{}, errorhub.New(http.StatusBadRequest, "An error occured while trying to register volunteer")
	}

	return CreateTaskRO{
		Message: "Volunteer Successfully Assigned Task",
		Task: TaskRO{
			ID:       task.ID,
			FullName: task.FullName,
			Email:    task.Email,
			Verified: task.Verified,
		},
	}, nil
}

/*
# VerifyTaskService

- takes in the task to verify
- checks that there is a task that matches the email & verification key
- check that it hasn't already been verified
- verify the task
*/
func VerifyTaskService(taskToVerify VerifyTaskDTO) (VerifyTaskRO, *errorhub.ErrorResponse) {
	var taskExists models.Tasks

	result := database.Conn.First(&taskExists, "email = ? AND verification_key = ?", taskToVerify.Email, taskToVerify.Key)

	if result.RowsAffected == 0 {
		return VerifyTaskRO{}, errorhub.New(http.StatusBadRequest, "Volunteer could not be found")
	} else if result.Error != nil {
		return VerifyTaskRO{}, errorhub.New(http.StatusBadRequest, "An error occured while trying to check task")
	}

	if taskExists.Verified {
		return VerifyTaskRO{}, errorhub.New(http.StatusBadRequest, "Volunteer has already been verified")
	}

	taskExists.Verified = true
	result = database.Conn.Save(&taskExists)

	if result.Error != nil {
		return VerifyTaskRO{}, errorhub.New(http.StatusBadRequest, "An error occured while trying to save task")
	}

	return VerifyTaskRO{
		Message:  fmt.Sprintf("%s has been verified", taskExists.FullName),
		Verified: taskExists.Verified,
	}, nil
}

/*
# FetchTasksByCategory

- takes in the task category id
- checks if the task category exists
- find all tasks that are tied to that task category
*/
func FetchTasksByCategory(taskCategoryId uint) ([]TaskRO, *errorhub.ErrorResponse) {
	var categoryExists models.TaskCategories
	var tasks []models.Tasks
	var tasksList []TaskRO

	result := database.Conn.First(&categoryExists, taskCategoryId)

	if result.RowsAffected == 0 {
		return []TaskRO{}, errorhub.New(http.StatusBadRequest, "Cannot retrieve volunteers for a non-existent category")
	} else if result.Error != nil {
		return []TaskRO{}, errorhub.New(http.StatusBadRequest, "An error occured while trying to check task category")
	}

	result = database.Conn.Where("task_category_id = ?", taskCategoryId).Find(&tasks)

	if result.RowsAffected == 0 {
		return []TaskRO{}, errorhub.New(http.StatusBadRequest, "There are no volunteers for this category")
	} else if result.Error != nil {
		return []TaskRO{}, errorhub.New(http.StatusBadRequest, "An error occured while trying to fetch volunteers")
	}

	for _, task := range tasks {
		tasksList = append(tasksList, TaskRO{
			ID:       task.ID,
			FullName: task.FullName,
			Email:    task.Email,
			Verified: task.Verified,
		})
	}

	return tasksList, nil
}
