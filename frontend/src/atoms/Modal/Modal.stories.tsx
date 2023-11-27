import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import mock from './mock';
import { Modal } from '.';

const meta = {
  title: 'atoms/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onClose: {
      action: 'onClick',
    },
    width: {
      control: 'select',
      options: ['Small', 'Medium', 'Large'],
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <>
        <div style={{ minHeight: 800 }}>
          <Story />
        </div>
      </>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const ModalComplete: TStory = {
  args: mock.ModalComplete,
};

export const OpenModal: TStory = {
  args: mock.OpenModal,
};

export const ModalWithTitle: TStory = {
  args: mock.ModalWithTitle,
};

export const ModalWithLargeWidth: TStory = {
  args: mock.ModalWithLargeWidth,
};

export const ModalWithCloseBtn: TStory = {
  args: mock.ModalWithCloseBtn,
};

export const ClosedModal: TStory = {
  args: mock.ClosedModal,
};
