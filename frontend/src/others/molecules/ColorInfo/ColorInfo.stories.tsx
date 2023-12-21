import { Meta, StoryObj } from '@storybook/react';
import { ColorInfo } from '.';
import colors from 'styles/colors';

const meta = {
  title: 'others/molecules/ColorInfo',
  component: ColorInfo,
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
  },
} satisfies Meta<typeof ColorInfo>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Success: TStory = {
};
