import { Meta, StoryObj } from '@storybook/react';
import { AppLayout } from '.';

const meta = {
  title: 'others/layouts/AppLayout',
  component: AppLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof AppLayout>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Success: TStory = {
};