package taskcategories

/*
# CreateTaskCategoriesDTO

This is the data transfer object for CreateTaskCategories
that is simply fields that are expected to handle task categories creation
*/
type CreateTaskCategoriesDTO struct {
	Name string `json:"name" binding:"required,gt=0"`
	PeopleNeeded int `json:"peopleNeeded" binding:"required"`
}

/*
# FetchTaskCategoriesRO

This is the response object for create task categories
that is simply the fields that are expected from create task categories or
simply the data that is returned to the user after create task categories
*/
type FetchTaskCategoriesRO struct {
	ID uint `json:"id"`
	Name string `json:"name"`
	PeopleNeeded int `json:"peopleNeeded"`
}