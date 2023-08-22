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