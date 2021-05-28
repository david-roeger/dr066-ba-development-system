import React from 'react';
import { IconStateHumidity } from '../../../index';

import { colorClasses } from './IconStateHumidity.config'


export default {
    component: IconStateHumidity,
    title: 'Icon/State/Humidity',
    argTypes: {
        state: {
            description: 'Icon state (0 - 100)', 
            table: {
                type: { summary: 'number' },
            },
            control: { 
                type: 'range', 
                min: 0, 
                max: 100, 
                step: 1 
            },
        },
        colorClass: {
            description: 'Color Class (from config)',
            table: {
                type: { summary: 'string' },
            },
            options: Object.keys(colorClasses),
            control: { type: 'select' },
        }
    },
};

const Template = args => <IconStateHumidity {...args} />;

export const Default = Template.bind({});

export const Low = Template.bind({});
Low.args = {
  state: 0
};

export const High = Template.bind({});
High.args = {
  state: 100
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