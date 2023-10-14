import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'storybook-msw-addon';

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
};

export default preview;
