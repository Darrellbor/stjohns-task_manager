---
to: "<%= (!isTemplate) ? `${path}/${compName}.stories.tsx` : null %>"
---
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from 'utils/storybook.utils';
import mock from './mock';
import { <%= compName %> } from '.';

export default {
  title: '<%= storyPath %>',
  component: <%= compName %>,
  decorators: [RouterDecorator],
} as ComponentMeta<typeof <%= compName %>>;

const Template: ComponentStory<typeof <%= compName %>> = (args) => (
    <<%= compName %> {...args} />
);

export const Success = Template.bind({});
Success.args = mock.Success;