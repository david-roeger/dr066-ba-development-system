import React from 'react';
import { Button } from '../index';

export default {
  component: Button,
  title: 'Button',
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: false,
  text: "Default"
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  text: "Primary"
};