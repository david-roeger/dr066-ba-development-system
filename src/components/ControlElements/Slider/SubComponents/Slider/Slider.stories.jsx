import React from 'react';
import { Slider } from '../../../../index';
import { colorClasses } from './Slider.config'

export default {
  title: 'ControlElements/Slider/SubComponents/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'Slider Component',
      },
    },
  },
  argTypes: {
    state: {
      description: 'Slider state', 
      table: {
          type: { summary: 'number' },
      },
      control: false
    },
    colorClass: {
      description: 'Color Class (from config)', 
      table: {
          type: { summary: 'string' },
      },
      options: Object.keys(colorClasses),
      control: { 
        type: 'select' 
      },
    },
    disabled: {
        description: 'Disable Slider', 
        table: {
          type: { summary: 'boolean' },
        },
        control: { 
          type: 'boolean', 
      },
    },
    min: {
      description: 'Slider min (from scala)', 
      table: {
          type: { summary: 'number' },
      },
      control: false
    },
    max: {
      description: 'Slider Max (from scala)', 
      table: {
          type: { summary: 'number' },
      },
      control: false,
    },
    callback: {
        description: 'Callback function for onUpdate Event.', 
        type: {
            required: true 
        },
        table: {
            type: { summary: 'function(value) {}' },
        },
        control: false
    }
  }
};


const Template = args => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
};