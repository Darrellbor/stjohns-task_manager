import React from 'react';
import * as stories from '../MonthCalendar.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import mock from '../mock';

const { EmptyMonthCalendar } = composeStories(stories);
const MonthCalendarTestId = 'test-MonthCalendar';

describe('MonthCalendar atom', () => {
  describe('Empty Month', () => {
    beforeEach(() => {
      render(<EmptyMonthCalendar />);
    });

    test('it renders', () => {
      const element = screen.getByTestId(MonthCalendarTestId);
      expect(element).not.toBeNull();
    });

    test('month title exists', () => {
      const element = screen.getByTestId(MonthCalendarTestId);
      expect(element).toHaveTextContent(mock.EmptyMonthCalendar.currentMonth.month);
    });

    test('1st of the month exists', () => {
      const element = screen.getByTestId(MonthCalendarTestId);

      const weeks = mock.EmptyMonthCalendar.currentMonth.weeks;
      let week1Date: string;
      for (let i = 0; i < weeks.length; i++) {
        if (weeks[i]) {
          if (weeks[i]) week1Date = weeks[i]![0].date.toString();
          break;
        }
      }
      expect(element).toHaveTextContent(week1Date!);
    });

    test('last day of the month exists', () => {
      const element = screen.getByTestId(MonthCalendarTestId);

      const weeks = mock.EmptyMonthCalendar.currentMonth.weeks;
      const week1Date =
        weeks[weeks.length - 1]![weeks[weeks.length - 1]!.length - 1].date.toString();
      expect(element).toHaveTextContent(week1Date);
    });
  });
});
