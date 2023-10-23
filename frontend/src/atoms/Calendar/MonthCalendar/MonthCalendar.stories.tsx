import { Meta, StoryObj } from '@storybook/react';
import mock from './mock';
import { MonthCalendar } from '.';

const meta = {
  title: 'atoms/Calendar/MonthCalendar',
  component: MonthCalendar,
  tags: ['autodocs'],
} satisfies Meta<typeof MonthCalendar>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const EmptyMonthCalendar: TStory = {
  args: mock.EmptyMonthCalendar,
};

export const MonthCalendarWithToday: TStory = {
  args: mock.MonthCalendarWithToday,
};

export const MonthCalendarWithAvailable: TStory = {
  args: mock.MonthCalendarWithAvailable,
};

export const MonthCalendarWithFilled: TStory = {
  args: mock.MonthCalendarWithFilled,
};

export const MonthCalendarWithAll: TStory = {
  args: mock.MonthCalendarWithAll,
};