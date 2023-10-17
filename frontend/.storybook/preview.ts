import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'storybook-msw-addon';
import { RouterDecorator } from '../src/utils/storybook.utils';

// Initialize MSW
initialize();
export const loaders = [mswLoader];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [RouterDecorator],
};

export default preview;
