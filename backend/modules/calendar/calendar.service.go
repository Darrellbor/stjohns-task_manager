package calendar

import (
	"time"

	"github.com/Darrellbor/stjohns-task_manager/backend/errorhub"
	"github.com/Darrellbor/stjohns-task_manager/backend/modules/tasksettings"
)

var monthMap = map[string]int{
	"January":   1,
	"February":  2,
	"March":     3,
	"April":     4,
	"May":       5,
	"June":      6,
	"July":      7,
	"August":    8,
	"September": 9,
	"October":   10,
	"November":  11,
	"December":  12,
}

/*
# buildCalendar

- takes in the year
- makes it into months
- weeks are broken down into loops of weeks
*/
func buildCalendar(year int) []YearCalendar {
	result := []YearCalendar{}

	for month := time.January; month <= time.December; month++ {
		monthName := month.String()
		weeks := [][]WeekCalendar{}

		currentDate := time.Date(year, month, 1, 0, 0, 0, 0, time.UTC)
		startDayOfWeek := int(currentDate.Weekday())

		// Push empty days for the days before the 1st of the month
		for i := 0; i < startDayOfWeek; i++ {
			weeks = append(weeks, nil)
		}

		for currentDate.Month() == month {
			if len(weeks) == 0 || currentDate.Weekday() == time.Sunday {
				weeks = append(weeks, []WeekCalendar{})
			}

			dayInfo := WeekCalendar{
				Date:      currentDate.Day(),
				DayOfWeek: currentDate.Weekday().String(),
			}

			weeks[len(weeks)-1] = append(weeks[len(weeks)-1], dayInfo)
			currentDate = currentDate.AddDate(0, 0, 1)
		}

		monthInfo := YearCalendar{
			Month: monthName,
			Weeks: weeks,
		}

		result = append(result, monthInfo)
	}

	return result
}

/*
# CalendarByYearService

- accepts the year
- calls the build calendar service
- calls the fetch task settings service
- loop through to fill the built calendar with task settings
- return error or calendar
*/
func CalendarByYearService(year int) ([]YearCalendar, *errorhub.ErrorResponse) {
	frameCalendar := buildCalendar(year)
	frameTaskSettings, err := tasksettings.FetchTaskSettingsService(year)

	if err != nil && err.Code != 404 {
		return []YearCalendar{}, err
	}

	for i := 0; i < len(frameCalendar); i++ {
		eachMonth := frameCalendar[i]
		for _, eachTaskSetting := range frameTaskSettings {
			if int(monthMap[eachMonth.Month]) == eachTaskSetting.Month {
				for j := 0; j < len(eachMonth.Weeks); j++ {
					eachWeek := eachMonth.Weeks[j]
					for k := 0; k < len(eachWeek); k++ {
						eachDay := &eachWeek[k]
						if eachDay.Date == eachTaskSetting.Day {
							eachDay.FetchTaskSettingsRO = eachTaskSetting
						}
					}
				}
			} else {
				continue
			}
		}
	}
	return frameCalendar, nil
}
