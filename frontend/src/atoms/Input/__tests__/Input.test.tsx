import React from 'react';
import * as stories from '../Input.stories';
import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen } from '@testing-library/react';

const { Success } = composeStories(stories);
const InputTestGroup = 'test-InputGroup';
const InputTestId = 'testInputId';

describe('Input atom', () => {
  beforeEach(() => {
    render(<Success />);
  });

  test('it renders', () => {
    const element = screen.getByTestId(InputTestGroup);
    expect(element).not.toBeNull();
  });

  test('typing is recorded', () => {
    const element = screen.getByTestId(InputTestId);

    fireEvent.change(element, { target: { value: 'Success'}});

    expect(element).toHaveValue('Success')
  });
});
