package errorhub

import (
	"time"

	"github.com/gin-gonic/gin"
)

func New(code int, message interface{}) *ErrorResponse {
	return &ErrorResponse{
		Code:    code,
		Message: message,
	}
}

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