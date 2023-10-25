export interface ICalendarProps {
  /**
   * The year that is currently being displayed
   */
  year: number;

  /**
   * The current year calendar
   */
  currentYearCalendar: IMonthProps[];

  /**
   * The last year calendar
   */
  previousYearCalendar: IMonthProps[];

  /**
   * The next year calendar
   */
  nextYearCalendar: IMonthProps[];

  /**
   * The function to change the year structure
   */
  changeYear: (year: number) => void;
}

export interface ICalendarStyleProps {
  /**
   * Change month out is used to control the animation of the months 
   * leaving and re-entering the page
   */
  $changeMonth: TChangeMonth;
}

export type TChangeMonth = 'left' | 'right' | 'in-view'

export interface IMonthProps {
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

export type TMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
export type TDaysOfTheWeek =
  | 'sunday'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday';
