---
to: "<%= !isTemplate ? null : `${path}/${compName}.stories.tsx` %>"
---
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EMockType } from 'utils/mock.utils';
import {
  RouterDecorator,
} from 'utils/storybook.utils';
import { <%= compName %> } from '.';
import mock from './mock';

export default {
  title: '<%= storyPath %>',
  component: <%= compName %>,
  decorators: [RouterDecorator],
} as ComponentMeta<typeof <%= compName %>>;

const Success: ComponentStory<typeof <%= compName %>> = () => (
  <<%= compName %> mock={{ type: EMockType.Success, data: mock.success }} />
);

const Error: ComponentStory<typeof <%= compName %>> = () => (
  <<%= compName %> mock={{ type: EMockType.Error, error: mock.error }} />
);

const Loading: ComponentStory<typeof <%= compName %>> = () => (
  <<%= compName %> mock={{ type: EMockType.Loading }} />
);

export const success = Success.bind({});
export const error = Error.bind({});
export const loading = Loading.bind({});