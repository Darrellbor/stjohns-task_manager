package models

import "gorm.io/gorm"

/*
# Tasks

This is the model for the tasks table; it's types and options
*/
type Tasks struct {
	gorm.Model
	FullName          string
	Email             string
	EmailNotification bool
	VerificationKey   string
	Verified          bool
	TaskCategoryId    uint
	TaskCategory      TaskCategories `gorm:"foreignkey:TaskCategoryId;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
