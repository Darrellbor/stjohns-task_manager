// Package admin - this module houses all functionality that partains to an admin of the 
// application and what it can do and the data it holds
package admin

import (
	"github.com/Darrellbor/stjohns-task_manager/backend/middleware"
	"github.com/gin-gonic/gin"
)

/*
# AdminRoutes

This function groups all routes that relates to the admin user
*/
func AdminRoutes(server *gin.Engine) {
	v1 := server.Group("/v1/admin")
	{
		v1.POST("/register", middleware.AuthGuard, RegisterController)
		v1.POST("/login", LoginController)
		v1.GET("/users", middleware.AuthGuard, FetchAdminUsersController)
		v1.DELETE("/user/:email", middleware.AuthGuard, DeleteAdminUserController)
	}
}
