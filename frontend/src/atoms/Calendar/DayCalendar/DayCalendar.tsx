import React from 'react';
import { IDayCalendarProps } from './types';
import styles from './DayCalendar.styles';

const { DivStyled, ZeroStyled } = styles;

const DayCalendar: React.FC<IDayCalendarProps> = ({
  date,
  isActive,
  isToday,
  tasksFilled,
  notInMonth,
  onClick,
}) => {
  return (
    <DivStyled
      className="DayCalendar"
      $date={date}
      $isActive={isActive}
      $isToday={isToday}
      $tasksFilled={tasksFilled}
      $isSmallNumber={date < 10 ? true : false}
      $notInMonth={notInMonth}
      onClick={isActive ? onClick : undefined}
      data-testid="test-DayCalendar">
      {date < 10 ? (
        <ZeroStyled $isActive={isActive} $isToday={isToday}>
          0
        </ZeroStyled>
      ) : (
        <div />
      )}
      {date}
    </DivStyled>
  );
};

export default DayCalendar;
