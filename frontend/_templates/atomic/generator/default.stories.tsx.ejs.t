---
to: "<%= (!isTemplate) ? `${path}/${compName}.stories.tsx` : null %>"
---
import { Meta, StoryObj } from '@storybook/react';
import mock from './mock';
import { <%= compName %> } from '.';

const meta = {
  title: '<%= storyPath %>',
  component: <%= compName %>,
  tags: ['autodocs'],
} satisfies Meta<typeof <%= compName %>>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Success: TStory = {
  args: mock.Success,
};