import React from 'react';
import * as stories from '../Checkbox.stories';
import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen } from '@testing-library/react';

const { Unchecked } = composeStories(stories);
const CheckboxTestGroup = 'test-Checkbox-Group';
const CheckboxTestId = 'test-CheckboxId';
const TickIcon = 'tick-icon';

describe('Checkbox atom', () => {
  beforeEach(() => {
    render(<Unchecked />);
  });

  test('it renders', () => {
    const element = screen.getByTestId(CheckboxTestGroup);
    expect(element).not.toBeNull();
  });

  test('it checks', () => {
    const element = screen.getByTestId(CheckboxTestId);
    fireEvent.click(element);

    const TickElement = screen.getByTestId(TickIcon);
    expect(TickElement).toBeInTheDocument();
  });
});
