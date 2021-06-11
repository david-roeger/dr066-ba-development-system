import React from 'react';
import { Slider } from '../../../../index';
import { colorClasses } from './Slider.config'

export default {
  title: 'ControlElements/Slider/SubComponents/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'Slider Component <br/> Must be wrapped in <code>&lt;SliderScala&gt;</code> Component.',
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

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const Zwave = Template.bind({});
Zwave.args = {
  colorClass: "zwave"
};

export const Enocean = Template.bind({});
Enocean.args = {
  colorClass: "enocean"
};

export const Zigbee = Template.bind({});
Zigbee.args = {
  colorClass: "zigbee"
};