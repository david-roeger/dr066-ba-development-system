import React from 'react';
import { IconStateLight } from '../../../index';

import { colorClasses } from './IconStateLight.config'

console.log(colorClasses)

export default {
  component: IconStateLight,
  title: 'Icon/State/Light',
  argTypes: {
    state: {
      description: 'Icon state (0 - 100)', 
      table: {
        type: { summary: 'number' },
      },
      type: {
        required: false
      },
      control: { 
        type: 'range', 
        min: 0, 
        max: 100, 
        step: 1 },
    },
    colorClass: {
      description: 'Color Class (from IconState.config)',
      table: {
        type: { summary: 'string' },
      },
      options: Object.keys(colorClasses),
      control: { type: 'select' },
    }
  }
};

const Template = args => <IconStateLight {...args} />;

export const Default = Template.bind({});

export const Off = Template.bind({});
Off.args = {
  state: 0
};

export const On = Template.bind({});
On.args = {
  state: 100,
};

export const Zwave = Template.bind({});
Zwave.args = {
  colorClass: 'zwave',
};

export const Enocean = Template.bind({});
Enocean.args = {
  colorClass: 'enocean',
};

export const Zigbee = Template.bind({});
Zigbee.args = {
  colorClass: 'zigbee',
};