import { Meta, StoryObj } from '@storybook/react';
import mock from './mock';
import { Button } from '.';

const meta = {
  title: 'atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Success: TStory = {
  args: mock.Success,
};
