// Package models holds the structure of database table fields and their types as well as 
// additional/special options for table
package models

import "gorm.io/gorm"

/*
# Admin

This is the model for the admin table; it's types and options 
*/
type Admin struct {
	gorm.Model
	FullName    string
	Email       string `gorm:"unique"`
	Password    string
	CreatedById uint
	CreatedBy   *Admin `gorm:"foreignkey:CreatedById;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
