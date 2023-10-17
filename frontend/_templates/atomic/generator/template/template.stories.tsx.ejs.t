---
to: "<%= !isTemplate ? null : `${path}/${compName}.stories.tsx` %>"
---
import { Meta, StoryObj } from '@storybook/react';
import { EMockType } from 'utils/mock.utils';
import { <%= compName %> } from '.';
import mock from './mock';

const meta = {
  title: '<%= storyPath %>',
  component: <%= compName %>,
  tags: ['autodocs'],
} as Meta<typeof <%= compName %>>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Success: TStory = {
  args: {
     type: EMockType.Success, 
     data: mock.success
  },
};

export const Error: TStory = {
  args: {
     type: EMockType.Error, 
     data: mock.error
  },
};

export const Loading: TStory = {
  args: {
     type: EMockType.Loading,
  },
};