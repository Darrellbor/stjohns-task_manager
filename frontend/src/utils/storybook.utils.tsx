import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Typography from 'styles/typography';

export const RouterDecorator = (Story: React.ComponentType): JSX.Element => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};

export const StorybookTypography = (Story: React.ComponentType): JSX.Element => {
  return (
    <>
      <Typography />
      <Story />
    </>
  );
};