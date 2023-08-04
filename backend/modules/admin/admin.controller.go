package admin

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/golodash/galidator"
)

var g = galidator.New()

func RegisterController(ctx *gin.Context) {
	var validator = g.Validator(RegisterDTO{}, galidator.Messages{
		"required": "$field is required",
		"min":      "$field requires a length greater than or equal to 8",
		"max":      "$field should be less than 32 characters",
		"contains": "$field should contain at least first name and last name",
	})

	var adminUser RegisterDTO
	err := ctx.ShouldBindJSON(&adminUser)
	if err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"errors": validator.DecryptErrors(err),
		})
	} else {
		savedAdminUser, err := RegisterService(adminUser)

		if err != nil {
			err.Execute(ctx)
			return
		}

		ctx.JSON(http.StatusCreated, savedAdminUser)
	}
}
