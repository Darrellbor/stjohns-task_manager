import { Meta, StoryObj } from '@storybook/react';
import mock from './mock';
import { DayCalendar } from '.';

const meta = {
  title: 'atoms/Calendar/DayCalendar',
  component: DayCalendar,
  tags: ['autodocs'],
} satisfies Meta<typeof DayCalendar>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const EmptyDay: TStory = {
  args: mock.EmptyDay,
};

export const CurrentDay: TStory = {
  args: mock.CurrentDay,
};

export const TasksFilled: TStory = {
  args: mock.TasksFilled,
};

export const TasksFilledAndCurrentDay: TStory = {
  args: mock.TasksFilledAndCurrentDay,
};