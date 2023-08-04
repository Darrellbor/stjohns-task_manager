package middleware

import (
	"net/http"
	"strings"

	"github.com/Darrellbor/stjohns-task_manager/backend/cert"
	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"github.com/gin-gonic/gin"
)

func AuthGuard(ctx *gin.Context) {
	authorization := ctx.Request.Header.Get("Authorization")

	if authorization == "" {
		err := errorhub.New(http.StatusUnauthorized, "No Token Provided")
		err.Execute(ctx)
		return
	}

	token := strings.Split(authorization, " ")[1]

	adminUser, err := cert.ValidateToken(token)

	if err != nil {
		err.Execute(ctx)
		return
	}

	ctx.Set("user", adminUser)

	ctx.Next()
}
