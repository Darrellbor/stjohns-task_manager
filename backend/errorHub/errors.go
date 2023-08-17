// Package errorhub handles everything relating to errors within the application
package errorhub

import (
	"time"

	"github.com/gin-gonic/gin"
)

/*
# New

This function takes the http response code e.g. 400, 200 etc
and the message you would like to send back to the user and
it returns a pointer to the ErrorResponse struct that holds the values
*/
func New(code int, message interface{}) *ErrorResponse {
	return &ErrorResponse{
		Code:    code,
		Message: message,
	}
}

/*
# ErrorResponse.Execute

This method exists as part of ErrorResponse and simply takes the gin context,
prepares the error object and aborts with the previously stored code and the
prepared object
*/
func (err *ErrorResponse) Execute(ctx *gin.Context) {
	errorObj := error{
		Method:    ctx.Request.Method,
		Path:      ctx.Request.URL.Path,
		Code:      err.Code,
		Timestamp: time.Now().Format(time.RFC1123),
		Message:   err.Message,
	}

	ctx.AbortWithStatusJSON(err.Code, errorObj)
}
