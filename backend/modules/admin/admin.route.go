package admin

import (
	"github.com/Darrellbor/stjohns-task_manager/backend/middleware"
	"github.com/gin-gonic/gin"
)

func AdminRoutes(server *gin.Engine) {
	v1 := server.Group("/v1/admin")
	{
		v1.POST("/register", middleware.AuthGuard, RegisterController)
		v1.POST("/login", LoginController)
	}
}
