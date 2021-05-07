import React from 'react';
import { Text } from '../index';

export default {
  component: Text,
  title: 'Text',
};

const Template = args => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Text"
};