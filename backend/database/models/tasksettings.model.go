package models

import (
	"time"

	"gorm.io/gorm"
)

/*
# TaskSettings

This is the model for the tasksettings table; it's types and options
*/
type TaskSettings struct {
	gorm.Model
	Day      int
	Month    int
	Year     int
	Time     time.Time
	IsActive bool
	SetById  uint
	SetBy    Admin `gorm:"foreignkey:SetById;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
