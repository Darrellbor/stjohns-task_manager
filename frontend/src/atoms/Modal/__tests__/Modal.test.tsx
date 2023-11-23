import React from 'react';
import * as stories from '../Modal.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

const { Success } = composeStories(stories);
const ModalTestId = 'test-Modal';

describe('Modal atom', () => {
  test('it renders', () => {
    render(<Success />);
    const element = screen.getByTestId(ModalTestId)
    expect(element).not.toBeNull();
  });
});
