// Package tasksettings - this module houses all functionality that partains to a tasksetting of the
// application and what it can do and the data it holds
package tasksettings

import (
	"github.com/Darrellbor/stjohns-task_manager/backend/middleware"
	"github.com/gin-gonic/gin"
)

/*
# TaskSettingsRoutes

This function groups all routes relating to the tasksettings
*/
func TaskSettingsRoutes(server *gin.Engine) {
	v1 := server.Group("/v1/tasksettings")
	{
		v1.POST("/", middleware.AuthGuard, CreateTaskSettingsController)
	}
}