import React from 'react';
import * as stories from '../Calendar.stories';
import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen } from '@testing-library/react';

const { Success } = composeStories(stories);
const CalendarTestId = 'test-Calendar';

const monthsOfTheYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

describe('Calendar atom', () => {
  beforeEach(() => {
    render(<Success />);
  });

  test('it renders', () => {
    const element = screen.getByTestId(CalendarTestId);
    expect(element).not.toBeNull();
  });

  test('goes to previous months when arrow is clicked', () => {
    let currentMonth = new Date().getMonth();
    let currentMonthInWords = monthsOfTheYear[currentMonth];
    const monthTitleElement = screen.getByText(currentMonthInWords);

    expect(monthTitleElement).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('left-arrow'));

    if (currentMonth - 2 < 0) {
      currentMonth = 12;
    } else {
      currentMonth = currentMonth - 2;
    }
    currentMonthInWords = monthsOfTheYear[currentMonth];

    const newMonthTitleElement = screen.getByText(currentMonthInWords);

    expect(newMonthTitleElement).toBeInTheDocument();
  });

  test('goes to the next months when arrow is clicked', () => {
    let currentMonth = new Date().getMonth();
    let currentMonthInWords = monthsOfTheYear[currentMonth];
    const monthTitleElement = screen.getByText(currentMonthInWords);

    expect(monthTitleElement).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('right-arrow'));

    if (currentMonth + 2 > 11) {
      currentMonth = 0;
    } else {
      currentMonth = currentMonth + 2;
    }
    currentMonthInWords = monthsOfTheYear[currentMonth];

    const newMonthTitleElement = screen.getByText(currentMonthInWords);

    expect(newMonthTitleElement).toBeInTheDocument();
  });
});
