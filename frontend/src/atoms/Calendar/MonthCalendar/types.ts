import { IMonthProps, TDaysOfTheWeek, TMonth } from '../types';

export interface IMonthCalendarProps {
  /**
   * The current month to display
   */
  currentMonth: IMonthWithYearProps;

  /**
   * The previous month to display
   */
  previousMonth: IMonthWithYearProps;

  /**
   * The next month to display
   */
  nextMonth: IMonthWithYearProps;
}

export interface IMonthWithYearProps extends IMonthProps {
  /**
   * The year that this month is in
   */
  year: number;
}

export interface IMonthCalendarValuesProps {
  en: {
    monthsOfTheYear: Record<TMonth, number>;
    daysOfTheWeekShort: Record<TDaysOfTheWeek, string>;
  };
}
