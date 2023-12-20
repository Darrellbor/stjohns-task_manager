import React from 'react';
import * as stories from '../AppLayout.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

const { Success } = composeStories(stories);
const AppLayoutTestId = 'test-AppLayout';

describe('AppLayout other', () => {
  test('it renders', () => {
    render(<Success />);
    const element = screen.getByTestId(AppLayoutTestId)
    expect(element).not.toBeNull();
  });
});
