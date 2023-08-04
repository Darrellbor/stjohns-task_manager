package models

import "gorm.io/gorm"

type Admin struct {
	gorm.Model
	FullName    string
	Email       string `gorm:"unique"`
	Password    string
	CreatedById uint
	CreatedBy   *Admin `gorm:"foreignkey:CreatedById;constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
