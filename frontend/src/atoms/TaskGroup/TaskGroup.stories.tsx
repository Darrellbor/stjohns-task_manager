import { Meta, StoryObj } from '@storybook/react';
import mock from './mock';
import { TaskGroup } from '.';

const meta = {
  title: 'atoms/TaskGroup',
  component: TaskGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof TaskGroup>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Success: TStory = {
  args: mock.Success,
};