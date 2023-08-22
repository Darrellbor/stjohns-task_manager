package taskcategories

import (
	"github.com/Darrellbor/stjohns-task_manager/backend/middleware"
	"github.com/gin-gonic/gin"
)

/*
# TaskCategoriesRoutes

This function groups all routes relating to the task categories
*/

func TaskCategoriesRoutes(server *gin.Engine) {
	v1 := server.Group("/v1/taskcategories")
	{
		v1.POST("/:taskSettingId", middleware.AuthGuard, CreateTaskCategoriesController)
		v1.GET("/:taskSettingId", middleware.AuthGuard)
		v1.GET("/:taskSettingId/withTasks")
		v1.DELETE("/:id", middleware.AuthGuard)
	}
}
