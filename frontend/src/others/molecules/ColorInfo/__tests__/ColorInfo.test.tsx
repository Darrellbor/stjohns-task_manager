import React from 'react';
import * as stories from '../ColorInfo.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

const { Success } = composeStories(stories);
const ColorInfoTestId = 'test-ColorInfo';

describe('ColorInfo other', () => {
  test('it renders', () => {
    render(<Success />);
    const element = screen.getByTestId(ColorInfoTestId)
    expect(element).not.toBeNull();
  });
});
