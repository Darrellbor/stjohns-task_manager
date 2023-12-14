import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import mock from './mock';
import { Checkbox } from '.';

const meta = {
  title: 'atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick'
    }
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Unchecked: TStory = {
  args: mock.Unchecked,
  render: function Render(args) {
    const [isChecked, setChecked] = useState<boolean>(mock.Unchecked.checked)

    return (
      <Checkbox {...args} checked={isChecked} onClick={() => setChecked(!isChecked)} />
    )
  }
};

export const Checked: TStory = {
  args: mock.Checked,
  render: function Render(args) {
    const [isChecked, setChecked] = useState<boolean>(mock.Checked.checked)

    return (
      <Checkbox {...args} checked={isChecked} onClick={() => setChecked(!isChecked)} />
    )
  }
};