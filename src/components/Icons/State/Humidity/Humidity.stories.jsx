import React from 'react';
import { Humidity } from '../../../index';
import options from '../../../storybook-options';

export default {
    component: Humidity,
    title: 'Icons/State/Humidity',
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
        outline: {
            description: 'Outline color (text-color-*)', 
            table: {
                type: { summary: 'string' },
            },
            options: options.colors[700],
            control: { type: 'select' },
        },
        base: {
            description: 'Base color (text-color-*)', 
            table: {
                type: { summary: 'string' },
            },
            options: options.colors.primary,
            control: { type: 'select' }
        },
        fill: {
            description: 'Fill color (text-color-*)', 
            table: {
                type: { summary: 'string' },
            },
            options: [
                ...options.colors.secondary,
                ...options.colors[300]
            ],
            control: { type: 'select' }
        }
    },
};

const Template = args => <Humidity {...args} />;

export const Default = Template.bind({});

export const Low = Template.bind({});
Low.args = {
  state: 0
};

export const High = Template.bind({});
High.args = {
  state: 100
};