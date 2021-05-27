import React from 'react';
import { Button } from '../index';

export default {
  title: 'Button',
  component: Button
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  handleClick: () => console.log("hallo")
};
