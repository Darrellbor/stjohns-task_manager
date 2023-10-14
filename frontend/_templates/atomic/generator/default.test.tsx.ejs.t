---
to: "<%= (!isTemplate) ? `${path}/__tests__/${compName}.test.tsx` : null %>"
---
import React from 'react';
import * as stories from '../<%= compName %>.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

const { Success } = composeStories(stories);
const <%= compName %>TestId = 'test-<%= compName %>';

describe('<%= compName %> <%= compType %>', () => {
  test('it renders', () => {
    render(<Success />);
    const element = screen.getByTestId(<%= compName %>TestId)
    expect(element).not.toBeNull();
  });
});
