import React from 'react';
import * as stories from '../DayCalendar.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import mock from '../mock';

const { CurrentDay } = composeStories(stories);
const DayCalendarTestId = 'test-DayCalendar';

describe('DayCalendar atom', () => {
  test('it renders', () => {
    render(<CurrentDay {...mock.CurrentDay} />);
    const element = screen.getByTestId(DayCalendarTestId)
    expect(element).not.toBeNull();
  });
});
