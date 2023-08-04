package admin

import "github.com/gin-gonic/gin"

func AdminRoutes(server *gin.Engine) {
	v1 := server.Group("/v1/admin")
	{
		v1.POST("/register", RegisterController)
	}
}
