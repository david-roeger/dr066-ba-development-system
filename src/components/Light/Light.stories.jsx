import React from 'react';
import { Light } from '../index';

export default {
  component: Light,
  title: 'Light',
  state: 0
};

const Template = args => <Light {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 0
};