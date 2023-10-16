package tasksettings

import "time"

/*
# CreateTaskSettingsDTO

This is the data transfer object for CreateTaskSettings
that is simply fields that are expected to handle task setting creation
*/
type CreateTaskSettingsDTO struct {
	Day int `json:"day" binding:"required"`
	Month int `json:"month" binding:"required"`
	Year int `json:"year" binding:"required"`
	Time int `json:"time" binding:"required" time_format:"2023-08-23" time_utc:"1"`
	IsActive bool `json:"isActive"`
}

/*
# TaskSettingRO

This is a struct that is part of the createTaskSettingsRO
It contains the details that would be part of it.
*/
type TaskSettingRO struct {
	Day int `json:"day"`
	Month int `json:"month"`
	Year int `json:"year"`
	Time time.Time `json:"time" time_format:"13:58"`
	IsActive bool `json:"isActive"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

/*
# CreateTaskSettingsRO

This is the response object for create task settings
that is simply the fields that are expected from create task settings or
simply the data that is returned to the user after create task settings
*/
type CreateTaskSettingsRO struct {
	Message string `json:"message"`
	TaskSetting TaskSettingRO `json:"taskSetting"`
}

/*
# FetchTaskSettingsRO

This is the response object for fetch task settings
*/
type FetchTaskSettingsRO struct {
	ID uint `json:"id"`
	TasksFilled bool
	TaskSettingRO
}