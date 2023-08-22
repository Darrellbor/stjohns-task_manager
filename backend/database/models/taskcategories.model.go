package models

import "gorm.io/gorm"

/*
# TaskCategories

This is the model for the task categories table; it's types and options
*/
type TaskCategories struct {
	gorm.Model
	Name           string
	PeopleNeeded   int
	TaskSettingsId uint
	TaskSettings   TaskSettings `gorm:"foreignkey:TaskSettingsId;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
