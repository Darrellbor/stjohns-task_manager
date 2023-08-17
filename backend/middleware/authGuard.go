// Package middleware - this is the package that handles functions that work as middlewares
// be it a global middleware or a local middleware i.e. specific to a particular route or route group
package middleware

import (
	"net/http"
	"strings"

	"github.com/Darrellbor/stjohns-task_manager/backend/cert"
	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"github.com/gin-gonic/gin"
)

/*
# AuthGuard

This function takes in the gin context and checks the request header for the
existence of Authorization header and if it exists proceeds to validate the
provided token; if it fails to validate or is not provided, the function returns
an error to the user and if everything works it moves to the next function in the route
*/
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
