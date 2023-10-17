import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: React.ComponentType): JSX.Element => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
