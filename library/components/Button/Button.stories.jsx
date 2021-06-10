import React from 'react';
import { Button } from '../index';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Component.',
      },
    },
  },
  argTypes: {
        children: {
            description: 'Text',
            type: {
                required: true 
            },
            table: {
                type: { summary: 'string' },
            },
            control: {
                type: 'text'
            }
        },
        callback: {
            description: 'Callback function for onClick Event', 
            type: {
                required: true 
            },
            table: {
              type: { summary: 'function' },
            },
            control: false
        }
    }
};


const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  callback: () => alert('click')
};