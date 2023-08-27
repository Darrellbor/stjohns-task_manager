package tasks

import (
	"github.com/gin-gonic/gin"
)

/*
# TasksRoutes

This function groups all routes relating to the taskd
*/
func TasksRoutes(server *gin.Engine) {
	v1 := server.Group("/v1/tasks")
	{
		v1.POST("/", CreateTaskController)
		v1.POST("/verify", VerifyTaskController)
	}
}
