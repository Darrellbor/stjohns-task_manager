package middleware

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
)

/*
# Logger

This middleware handles formatting logs on a global scales
it basically logs to the console in a format that inclues 
- ClientIP
- Timestamp
- The requested method
- The requested path
- The returned status code and
- The latency
*/
func Logger() gin.HandlerFunc {
	return gin.LoggerWithFormatter(func(params gin.LogFormatterParams) string {
		return fmt.Sprintf("%s - [%s] %s %s %d %s \n",
			params.ClientIP,
			params.TimeStamp.Format(time.RFC822),
			params.Method,
			params.Path,
			params.StatusCode,
			params.Latency,
		)
	})
}
