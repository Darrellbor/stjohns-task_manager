package main

import (
	"log"
	"net/http"
	"os"

	"github.com/Darrellbor/stjohns-task_manager/backend/database"
	"github.com/Darrellbor/stjohns-task_manager/backend/middleware"
	"github.com/Darrellbor/stjohns-task_manager/backend/modules/admin"
	"github.com/Darrellbor/stjohns-task_manager/backend/modules/taskcategories"
	"github.com/Darrellbor/stjohns-task_manager/backend/modules/tasksettings"
	"github.com/Darrellbor/stjohns-task_manager/backend/shared"
	"github.com/gin-gonic/gin"
)

func init() {
	shared.LoadEnv()
	database.ConnectToDB()
	database.AutoMigrate()
}

func main() {
	ginMode := os.Getenv("GIN_MODE")

	gin.SetMode(ginMode)

	server := gin.New()

	server.Use(middleware.CorsMiddleware())
	server.Use(gin.Recovery(), middleware.Logger())

	// Base Route
	server.GET("/v1", func(ctx *gin.Context) {
		ctx.String(http.StatusOK, "Welcome to St Johns Task Manager Backend V1")
	})

	// All Other Routes
	admin.AdminRoutes(server)
	tasksettings.TaskSettingsRoutes(server)
	taskcategories.TaskCategoriesRoutes(server)

	port := os.Getenv("PORT")

	if port == "" {
		log.Fatal("You must set the port on which the application will run on")
	}

	err := server.Run(port)

	if err != nil {
		log.Fatalf("Failed to run the server!")
	}
}
