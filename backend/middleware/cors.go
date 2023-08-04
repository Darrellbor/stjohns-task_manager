package middleware

import (
	"os"
	"time"

	"github.com/gin-gonic/gin"
	cors "github.com/itsjamie/gin-cors"
)

func CorsMiddleware() gin.HandlerFunc {
	frontendUri := os.Getenv("FRONTEND_URI")

	return cors.Middleware(cors.Config{
		Origins:         frontendUri,
		Methods:         "GET, PUT, POST, DELETE",
		RequestHeaders:  "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With",
		ExposedHeaders:  "",
		MaxAge:          50 * time.Second,
		Credentials:     false,
		ValidateHeaders: false,
	})
}
