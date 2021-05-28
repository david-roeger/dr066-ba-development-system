import React from 'react';
import { IconStateCamera } from './IconStateCamera';
import { colorClasses } from './IconStateCamera.config'

export default {
    component: IconStateCamera,
    title: 'Icon/State/Camera',
    argTypes: {
        state: {
            description: 'Icon state (true / false)', 
            table: {
                type: { summary: 'boolean' },
            },
            control: { 
                type: 'boolean', 

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

const Template = args => <IconStateCamera {...args} />;

export const Default = Template.bind({});

export const On = Template.bind({});
On.args = {
  state: true
};

export const Zwave = Template.bind({});
Zwave.args = {
  colorClass: 'zwave',
  state: true
};

export const Enocean = Template.bind({});
Enocean.args = {
  colorClass: 'enocean',
  state: true
};

export const Zigbee = Template.bind({});
Zigbee.args = {
  colorClass: 'zigbee',
  state: true
};