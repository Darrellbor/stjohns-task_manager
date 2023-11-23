import { Meta, StoryObj } from '@storybook/react';
import mock from './mock';
import { Modal } from '.';

const meta = {
  title: 'atoms/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Success: TStory = {
  args: mock.Success,
};