import { Meta, StoryObj } from '@storybook/react';
import mock from './mock';
import { Calendar } from '.';
import colors from 'styles/colors';

const meta = {
  title: 'atoms/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'backdrop',
      values: [
        { name: 'backdrop', value: colors.backdrop },
        { name: 'dark', value: colors.dark },
        { name: 'light', value: colors.white },
      ],
    },
    layout: 'centered'
  },
  argTypes: {
    changeYear: {
      action: 'onClick',
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Success: TStory = {
  args: mock.Success,
};
