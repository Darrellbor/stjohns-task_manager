import React from 'react';
import { IDayCalendarProps } from './types';
import styles from './DayCalendar.styles';

const { DivStyled } = styles;

const DayCalendar: React.FC<IDayCalendarProps> = ({
  date,
  isActive,
  isToday,
  tasksFilled,
  onClick,
}) => {
  return (
    <DivStyled
      className="DayCalendar"
      $date={date}
      $isActive={isActive}
      $isToday={isToday}
      $tasksFilled={tasksFilled}
      onClick={isActive ? onClick : undefined}
      data-testid="test-DayCalendar">
      {date}
    </DivStyled>
  );
};

export default DayCalendar;
