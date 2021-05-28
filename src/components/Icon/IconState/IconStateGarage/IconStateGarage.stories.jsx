import React from 'react';
import { IconStateGarage } from '../../../index';

import { colorClasses } from './IconStateGarage.config'


export default {
    component: IconStateGarage,
    title: 'Icon/State/Garage',
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

const Template = args => <IconStateGarage {...args} />;

export const Default = Template.bind({});

export const Down = Template.bind({});
Down.args = {
  state: 0
};

export const Up = Template.bind({});
Up.args = {
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