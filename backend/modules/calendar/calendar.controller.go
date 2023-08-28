package calendar

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"github.com/gin-gonic/gin"
)

/*
# CalendarByYearController

This function takes in the gin context, validates the request for a year param
Calls the service and if there are errors execute them. If not return a Json of the response
*/
func CalendarByYearController(ctx *gin.Context) {
	year := ctx.Param("year")

	if year == "" {
		err := errorhub.New(http.StatusBadRequest, "The year to create calendar for is required")
		err.Execute(ctx)
	} else {
		typedYear, _ := strconv.Atoi(year)
		calendar, err := CalendarByYearService(typedYear)

		if err != nil {
			err.Execute(ctx)
			return
		}

		ctx.JSON(http.StatusOK, gin.H{
			"message":  fmt.Sprintf("Calendar Successfully Retrieved For %s", year),
			"calendar": calendar,
		})
	}
}
