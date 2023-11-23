import React, { useEffect, useState } from 'react';
import { ICalendarProps, TChangeMonth } from './types';
import styles from './Calendar.styles';
import LeftArrow from 'atoms/Icons/LeftArrow';
import RightArrow from 'atoms/Icons/RightArrow';
import { IMonthCalendarProps } from './MonthCalendar/types';
import { MonthCalendar } from './MonthCalendar';

const { CalendarStyled, CalendarInner, MidPoint } = styles;

const Calendar: React.FC<ICalendarProps> = ({
  year,
  previousYearCalendar,
  currentYearCalendar,
  nextYearCalendar,
  changeYear,
}) => {
  //prepare the design
  //put the year into the calendar for months
  //get the month and arrange it in the month calendar
  //implement the logic to change year in december and january

  let timer: NodeJS.Timeout;
  const [changeMonth, setChangeMonth] = useState<TChangeMonth>('in-view');
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [leftMonth, setLeftMonth] = useState<IMonthCalendarProps>();
  const [rightMonth, setRightMonth] = useState<IMonthCalendarProps>();

  useEffect(() => {
    setLeftAndRightMonths(currentMonth);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const leftBtnClick = () => {
    setChangeMonth('left');
    let newCurrentMonth = currentMonth - 1;

    if (currentMonth % 2 !== 0) {
      newCurrentMonth--;
    }

    if (newCurrentMonth === -1) {
      setCurrentMonth(11);
      changeYear(year - 1);
      setLeftAndRightMonths(11);
    } else {
      setCurrentMonth(newCurrentMonth);
      setLeftAndRightMonths(newCurrentMonth);
    }

    timer = setTimeout(() => {
      setChangeMonth('in-view');
    }, 500);
  };

  const rightBtnClick = () => {
    setChangeMonth('right');
    let newCurrentMonth = currentMonth + 1;

    if (currentMonth % 2 === 0) {
      newCurrentMonth++;
    }

    if (newCurrentMonth === 12) {
      setCurrentMonth(0);
      changeYear(year + 1);
      setLeftAndRightMonths(0);
    } else {
      setCurrentMonth(newCurrentMonth);
      setLeftAndRightMonths(newCurrentMonth);
    }

    timer = setTimeout(() => {
      setChangeMonth('in-view');
    }, 500);
  };

  const setLeftAndRightMonths = (currentMonth: number) => {
    if (currentMonth % 2 === 0) {
      //handle left months
      if (currentMonth === 0) {
        setLeftMonth({
          previousMonth: { ...previousYearCalendar[11], year: year-- },
          currentMonth: { ...currentYearCalendar[0], year },
          nextMonth: { ...currentYearCalendar[1], year },
        });

        setRightMonth({
          previousMonth: { ...currentYearCalendar[0], year },
          currentMonth: { ...currentYearCalendar[1], year },
          nextMonth: { ...currentYearCalendar[2], year },
        });
      } else {
        setLeftMonth({
          previousMonth: { ...currentYearCalendar[currentMonth - 1], year },
          currentMonth: { ...currentYearCalendar[currentMonth], year },
          nextMonth: { ...currentYearCalendar[currentMonth + 1], year },
        });

        if (currentMonth === 10) {
          setRightMonth({
            previousMonth: { ...currentYearCalendar[currentMonth], year },
            currentMonth: { ...currentYearCalendar[currentMonth + 1], year },
            nextMonth: { ...nextYearCalendar[0], year: year++ },
          });
        } else {
          setRightMonth({
            previousMonth: { ...currentYearCalendar[currentMonth], year },
            currentMonth: { ...currentYearCalendar[currentMonth + 1], year },
            nextMonth: { ...currentYearCalendar[currentMonth + 2], year },
          });
        }
      }
    } else {
      //handle right months
      if (currentMonth === 11) {
        setLeftMonth({
          previousMonth: { ...currentYearCalendar[9], year },
          currentMonth: { ...currentYearCalendar[10], year },
          nextMonth: { ...currentYearCalendar[11], year },
        });

        setRightMonth({
          previousMonth: { ...currentYearCalendar[10], year },
          currentMonth: { ...currentYearCalendar[11], year },
          nextMonth: { ...nextYearCalendar[0], year: year++ },
        });
      } else {
        if (currentMonth === 1) {
          setLeftMonth({
            previousMonth: { ...previousYearCalendar[11], year: year-- },
            currentMonth: { ...currentYearCalendar[currentMonth - 1], year },
            nextMonth: { ...currentYearCalendar[currentMonth], year },
          });
        } else {
          setLeftMonth({
            previousMonth: { ...currentYearCalendar[currentMonth - 2], year },
            currentMonth: { ...currentYearCalendar[currentMonth - 1], year },
            nextMonth: { ...currentYearCalendar[currentMonth], year },
          });
        }

        setRightMonth({
          previousMonth: { ...currentYearCalendar[currentMonth - 1], year },
          currentMonth: { ...currentYearCalendar[currentMonth], year },
          nextMonth: { ...currentYearCalendar[currentMonth + 1], year },
        });
      }
    }
  };

  return (
    <CalendarStyled className="Calendar" data-testid="test-Calendar">
      <LeftArrow id='left-arrow' onClick={leftBtnClick} />
      <CalendarInner $changeMonth={changeMonth}>
        {leftMonth && <MonthCalendar {...leftMonth} />}
        <MidPoint>
          <h2>{year}</h2>
          <hr />
        </MidPoint>
        {rightMonth && <MonthCalendar {...rightMonth} />}
      </CalendarInner>
      <RightArrow id='right-arrow' onClick={rightBtnClick} />
    </CalendarStyled>
  );
};

export default Calendar;
