import React from 'react';
import * as stories from '../Calendar.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

const { Success } = composeStories(stories);
const CalendarTestId = 'test-Calendar';

describe('Calendar atom', () => {
  test('it renders', () => {
    render(<Success />);
    const element = screen.getByTestId(CalendarTestId)
    expect(element).not.toBeNull();
  });
});
