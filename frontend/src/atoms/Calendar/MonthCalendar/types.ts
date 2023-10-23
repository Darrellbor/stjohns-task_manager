export interface IMonthCalendarProps {
  /**
   * The current month to display
   */
  currentMonth: IMonthProps;

  /**
   * The previous month to display
   */
  previousMonth: IMonthProps;

  /**
   * The next month to display
   */
  nextMonth: IMonthProps;
}

export interface IMonthProps {
  /**
   * The year that this month is in
   */
  year: number;

  /**
   * The month to display
   */
  month: TMonth;

  /**
   * The month's week structure
   */
  weeks: (IWeekProps[] | null)[];
}

export interface IWeekProps {
  id: number;
  date: number;
  dayOfWeek: string;
  tasksFilled: boolean;
  day: number;
  month: number;
  year: number;
  time: string;
  isActive: boolean;
  notInMonth?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IMonthCalendarStyleProps {
  /**
   * Put description for prop here
   */
  $value: string;
}

export interface IMonthCalendarValuesProps {
  en: {
    monthsOfTheYear: Record<TMonth, number>,
    daysOfTheWeekShort: Record<TDaysOfTheWeek, string>;
  }
}

type TMonth = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";
type TDaysOfTheWeek = "sunday" | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';