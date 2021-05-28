import React from 'react';
import { IconDevice } from '../../index';
import { icons } from './IconDevice.config'

let types = Object.keys(icons);
let colorClasses = Object.keys(icons[types[0]]);

console.log(types, colorClasses);
export default {
    component: IconDevice,
    title: 'Icon/Device',
    argTypes: {
        type: {
            description: 'Icon type', 
            table: {
                type: { summary: 'string' },
            },
            options: types,
            control: { type: 'select' },
        },
        colorClass: {
            description: 'Color Class (from config)', 
            table: {
                type: { summary: 'string' },
            },
            options: colorClasses,
            control: { type: 'select' },
        },
    },
};

const Template = args => <IconDevice {...args} />;

export const Default = Template.bind({});

export const Camera = Template.bind({});
Camera.args = {
    type: "camera",
}

export const Electricity = Template.bind({});
Electricity.args = {
    type: "heating",
}

export const Garage = Template.bind({});
Garage.args = {
    type: "garage",
}

export const Heating = Template.bind({});
Heating.args = {
    type: "heating",
}

export const Light = Template.bind({});
Light.args = {
    type: "light",
}