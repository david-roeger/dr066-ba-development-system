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
  children: "Default",
  handleClick: () => alert('hallo')
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Primary"
};