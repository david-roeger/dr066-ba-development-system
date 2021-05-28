import React from 'react';
import { IconStateHeating } from '../../../index';

import { colorClasses } from './IconStateHeating.config'


export default {
    component: IconStateHeating,
    title: 'Icon/State/Heating',
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

const Template = args => <IconStateHeating {...args} />;

export const Default = Template.bind({});

export const Low = Template.bind({});
Low.args = {
  state: 0
};

export const High = Template.bind({});
High.args = {
  state: 100
};