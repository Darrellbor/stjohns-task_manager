import React from 'react';
import * as stories from '../DayCalendar.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import colors from 'styles/colors';
import convertHexToRGBA from 'utils/hexToRGB';

const { EmptyDay, CurrentDay, TasksFilled } = composeStories(stories);
const DayCalendarTestId = 'test-DayCalendar';

describe('DayCalendar atom', () => {
  describe('EmptyDay', () => {
    beforeEach(() => {
      render(<EmptyDay />);
    });

    test('it renders', () => {
      const element = screen.getByTestId(DayCalendarTestId);
      expect(element).not.toBeNull();
    });

    test('it has the appropriate background', () => {
      const element = screen.getByTestId(DayCalendarTestId);
      expect(element).toHaveStyle({ backgroundColor: convertHexToRGBA(colors.white) });
    });
  });

  describe('CurrentDay', () => {
    beforeEach(() => {
      render(<CurrentDay />);
    });

    test('it renders', () => {
      const element = screen.getByTestId(DayCalendarTestId);
      expect(element).not.toBeNull();
    });

    test('it has the appropriate background', () => {
      const element = screen.getByTestId(DayCalendarTestId);
      expect(element).toHaveStyle({ backgroundColor: convertHexToRGBA(colors.calendar.today) });
    });
  });

  describe('TasksFilled', () => {
    beforeEach(() => {
      render(<TasksFilled />);
    });

    test('it renders', () => {
      const element = screen.getByTestId(DayCalendarTestId);
      expect(element).not.toBeNull();
    });

    test('it has the appropriate background', () => {
      const element = screen.getByTestId(DayCalendarTestId);
      expect(element).toHaveStyle({ backgroundColor: convertHexToRGBA(colors.calendar.filled) });
    });
  });
});
