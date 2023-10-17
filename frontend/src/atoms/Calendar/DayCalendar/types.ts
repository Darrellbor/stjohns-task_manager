export interface IDayCalendarProps {
  /**
   * Boolean to set this day instance as the current calendar date
   */
  isToday: boolean;

  /**
   * Number indicating the day date to display
   */
  date: number;

  /**
   * Boolean indicating if all available tasks categories has been filled
   */
  tasksFilled: boolean;

  /**
   * Boolean indicating if this day has been activated for tasks
   */
  isActive: boolean;

  /**
   * Boolean indicating if this day has been activated for tasks
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface IDayCalendarStyleProps {
  /**
   * Boolean to set this day instance as the current calendar date
   */
  $isToday: boolean;

  /**
   * Number indicating the day date to display
   */
  $date: number;

  /**
   * Boolean indicating if all available tasks categories has been filled
   */
  $tasksFilled: boolean;

  /**
   * Boolean indicating if this day has been activated for tasks
   */
  $isActive: boolean;
}