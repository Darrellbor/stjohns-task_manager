import React from 'react';
import * as stories from '../TaskGroup.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

const { Success } = composeStories(stories);
const TaskGroupTestId = 'test-TaskGroup';

describe('TaskGroup atom', () => {
  test('it renders', () => {
    render(<Success />);
    const element = screen.getByTestId(TaskGroupTestId)
    expect(element).not.toBeNull();
  });
});
