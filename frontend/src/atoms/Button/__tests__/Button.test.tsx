import React from 'react';
import * as stories from '../Button.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

const { Success } = composeStories(stories);
const ButtonTestId = 'test-Button';

describe('Button atom', () => {
  test('it renders', () => {
    render(<Success />);
    const element = screen.getByTestId(ButtonTestId)
    expect(element).not.toBeNull();
  });
});
