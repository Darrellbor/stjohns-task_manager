package calendar

import "github.com/gin-gonic/gin"

/*
# CalendarRoutes

This function groups all routes relating to the calendar
*/
func CalendarRoutes(server *gin.Engine) {
	v1 := server.Group("/v1/calendar")
	{
		v1.GET("/:year", CalendarByYearController)
	}
}
