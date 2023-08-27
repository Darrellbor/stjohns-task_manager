package taskcategories

import "github.com/Darrellbor/stjohns-task_manager/backend/modules/tasks"

/*
# CreateTaskCategoriesDTO

This is the data transfer object for CreateTaskCategories
that is simply fields that are expected to handle task categories creation
*/
type CreateTaskCategoriesDTO struct {
	Name         string `json:"name" binding:"required,gt=0"`
	PeopleNeeded int    `json:"peopleNeeded" binding:"required"`
}

/*
# FetchTaskCategoriesRO

This is the response object for create task categories
that is simply the fields that are expected from create task categories or
simply the data that is returned to the user after create task categories
*/
type FetchTaskCategoriesRO struct {
	ID           uint   `json:"id"`
	Name         string `json:"name"`
	PeopleNeeded int    `json:"peopleNeeded"`
}

/*
# FetchTaskCategoriesWithTasksRO

This is the response object for fetch task categories with tasks
that is simply the fields that are expected from etch task categories with tasks or
simply the data that is returned to the user after etch task categories with tasks
*/
type FetchTaskCategoriesWithTasksRO struct {
	ID           uint           `json:"id"`
	Name         string         `json:"name"`
	PeopleNeeded int            `json:"peopleNeeded"`
	Tasks        []tasks.TaskRO `json:"tasks"`
}
