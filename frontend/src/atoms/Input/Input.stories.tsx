import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import mock from './mock';
import { Input } from '.';

const meta = {
  title: 'atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: "onChange"
    },
    onBlur: {
      action: "onBlur"
    }
  }
} satisfies Meta<typeof Input>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Success: TStory = {
  args: mock.Success,
  render: function Render(args) {
    const [data, setData] = useState<string>('')

    return (
      <Input {...args} value={data} onChange={(e) => setData(e.target.value)} />
    )
  }
};