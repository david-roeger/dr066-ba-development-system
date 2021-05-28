import React from 'react';
import { IconDevice } from '../../index';
import { colorNames } from '../../storybook-options';

export default {
    component: IconDevice,
    title: 'Icon/Device',
    /*argTypes: {
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
    },*/
};

const Template = args => <IconDevice {...args} />;

export const Default = Template.bind({});

export const Heating = Template.bind({});
Heating.args = {
    type: "heating",
    color: "zigbee"
}