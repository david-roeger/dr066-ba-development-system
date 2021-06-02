import React from 'react';
import { DeviceIcon, DeviceIconContainer } from '../../../../index';
import { types, colorClasses } from './DeviceIcon.config'

console.log(colorClasses)
export default {
    component: DeviceIcon,
    title: 'Icons/Device/Icons/DeviceIcon',
    decorators: [
        (Story) => (
            <DeviceIconContainer>
                {Story()}
            </DeviceIconContainer>
        ),
      ],
    parameters: {
        docs: {
            description: {
                component: 'Device Icon Component. <br> The icons are referenced from the <code>./public/deviceicons/*</code>. <br> Icon Values are defined in config file <br> Icon must be inside <code>&lt;DeviceIconContainer&gt;</code> Element.',
            },
        },
    },
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

const Template = args => <DeviceIcon {...args} />;

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