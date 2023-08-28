package calendar

import "github.com/Darrellbor/stjohns-task_manager/backend/modules/tasksettings"

type YearCalendar struct {
	Month string `json:"month"`
	Weeks [][]WeekCalendar `json:"weeks"`
}

type WeekCalendar struct {
	Date      int    `json:"date"`
	DayOfWeek string `json:"dayOfWeek"`
	tasksettings.FetchTaskSettingsRO
}
