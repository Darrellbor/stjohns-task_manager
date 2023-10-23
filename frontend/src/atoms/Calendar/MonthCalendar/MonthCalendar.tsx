import React, { useEffect, useState } from 'react';
import values from './values';
import { IMonthCalendarProps, IWeekProps } from './types';
import styles from './MonthCalendar.styles';
import { DayCalendar } from '../DayCalendar';

const { MonthBlock, MonthTitle, MonthRow, MonthItem } = styles;
const { language } = values;

const MonthCalendar: React.FC<IMonthCalendarProps> = ({
  previousMonth,
  currentMonth,
  nextMonth,
}) => {
  const [firstRow, setFirstRow] = useState<IWeekProps[]>([]);
  const [centerRow, setCenterRow] = useState<IWeekProps[][]>([]);
  const [lastRow, setLastRow] = useState<IWeekProps[]>([]);

  useEffect(() => {
    //handle first row
    if (currentMonth.weeks[0] !== null) {
      setFirstRow(currentMonth.weeks[0]);
    } else {
      const lastMonthDate = previousMonth.weeks[previousMonth.weeks.length - 1];
      const updatedLastMonthDate = lastMonthDate?.map(eachDate => {
        return {
          ...eachDate,
          notInMonth: true,
        };
      });

      for (let i = 0; i < currentMonth.weeks.length; i++) {
        const eachWeek = currentMonth.weeks[i];

        if (eachWeek) {
          if (updatedLastMonthDate) setFirstRow([...updatedLastMonthDate, ...eachWeek]);
          break;
        }
      }
    }

    //handle center rows
    const centerRowList = [];
    for (let i = 0; i < currentMonth.weeks.length; i++) {
      const eachWeek = currentMonth.weeks[i];

      if (eachWeek && currentMonth.weeks.length - 1 !== i) {
        centerRowList.push(eachWeek);
      }
    }
    setCenterRow(centerRowList);

    //handle last row
    if (currentMonth.weeks[currentMonth.weeks.length - 1]?.length !== 7) {
      for (let i = 0; i < nextMonth.weeks.length; i++) {
        let eachWeek = nextMonth.weeks[i];

        if (eachWeek) {
          eachWeek = eachWeek.map(eachItem => {
            return {
              ...eachItem,
              notInMonth: true,
            };
          });
          setLastRow([...currentMonth.weeks[currentMonth.weeks.length - 1]!, ...eachWeek]);
          break;
        }
      }
    } else {
      setLastRow(currentMonth.weeks[currentMonth.weeks.length - 1]!);
    }
  }, [currentMonth, previousMonth, nextMonth]);
  
  return (
    <MonthBlock className="MonthCalendar" data-testid="test-MonthCalendar">
      <MonthTitle>{currentMonth.month}</MonthTitle>

      <MonthRow $first={true}>
        {Object.values(language.en.daysOfTheWeekShort).map(weekDay => (
          <MonthItem key={weekDay}>{weekDay}</MonthItem>
        ))}
      </MonthRow>

      <MonthRow>
        {firstRow.map(eachItem => (
          <DayCalendar
            key={eachItem.id + eachItem.date}
            isActive={eachItem.isActive}
            date={eachItem.date}
            tasksFilled={eachItem.tasksFilled}
            notInMonth={eachItem.notInMonth}
            isToday={
              currentMonth.year === new Date().getFullYear() &&
              language.en.monthsOfTheYear[currentMonth.month] === new Date().getMonth() &&
              eachItem.date === new Date().getDate()
                ? true
                : false
            }
          />
        ))}
      </MonthRow>

      {centerRow.map((eachRow, idx) => {
        if (idx !== 0) {
          return (
            <MonthRow key={idx}>
              {eachRow.map(eachItem => (
                <DayCalendar
                  key={eachItem.id + eachItem.date}
                  isActive={eachItem.isActive}
                  date={eachItem.date}
                  tasksFilled={eachItem.tasksFilled}
                  notInMonth={eachItem.notInMonth}
                  isToday={
                    currentMonth.year === new Date().getFullYear() &&
                    language.en.monthsOfTheYear[currentMonth.month] === new Date().getMonth() &&
                    eachItem.date === new Date().getDate()
                      ? true
                      : false
                  }
                />
              ))}
            </MonthRow>
          );
        }
      })}

      <MonthRow>
        {lastRow.map(eachItem => (
          <DayCalendar
            key={eachItem.id + eachItem.date}
            isActive={eachItem.isActive}
            date={eachItem.date}
            tasksFilled={eachItem.tasksFilled}
            notInMonth={eachItem.notInMonth}
            isToday={
              currentMonth.year === new Date().getFullYear() &&
              language.en.monthsOfTheYear[currentMonth.month] === new Date().getMonth() &&
              eachItem.date === new Date().getDate()
                ? true
                : false
            }
          />
        ))}
      </MonthRow>
    </MonthBlock>
  );
};

export default MonthCalendar;
