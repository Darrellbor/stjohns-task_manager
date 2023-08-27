package tasks

/*
# CreateTaskDTO

This is the data transfer object for CreateTask
that is simply fields that are expected to handle task creation
*/
type CreateTaskDTO struct {
	FullName          string `json:"fullName" binding:"required,contains= "`
	Email             string `json:"email" binding:"required,email"`
	EmailNotification bool   `json:"emailNotification" binding:"required"`
	TaskCategoryId    uint   `json:"taskCategoryId" binding:"required"`
}

/*
# TaskRO

This is the task object format to be returned across multiple
response objects.
*/
type TaskRO struct {
	ID       uint   `json:"id"`
	FullName string `json:"fullName" `
	Email    string `json:"email"`
	Verified bool   `json:"verified"`
}

/*
# CreateTaskRO

This is the response object to be returned when a task is created
*/
type CreateTaskRO struct {
	Message string `json:"message"`
	Task    TaskRO `json:"task"`
}

/*
# VerifyTaskDTO

This is the data transfer object for VerifyTask
that is simply fields that are expected to handle task verification
*/
type VerifyTaskDTO struct {
	Email string `json:"email" binding:"required,email"`
	Key   string `json:"key" binding:"required"`
}

/*
# VerifyTaskRO

This is the response object to be returned when a task is verified
*/
type VerifyTaskRO struct {
	Message  string `json:"message"`
	Verified bool   `json:"verified"`
}
