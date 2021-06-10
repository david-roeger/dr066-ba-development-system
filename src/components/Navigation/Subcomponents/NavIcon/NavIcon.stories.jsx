import React from 'react';
import { NavIcon, NavIconButton } from '../../../index';
import { types } from './NavIcon.config'

export default {
    component: NavIcon,
    title: 'Navigation/Subcomponents/NavIcon',
    parameters: {
        docs: {
            description: {
                component: 'Nav Icon SVG. <br> The icons are referenced from <code>./public/NavIcons/*</code>. <br> Icon Values are defined in config file <br> Icon must be inside <code>&lt;NavIconButton&gt;</code> Element.',
            },
        },
    },
    decorators: [
        (Story) => (
            <div className="p-md bg-black">
                {Story()}
            </div>
        ),
      ],
    argTypes: {
        type: {
            description: 'Icon type', 
            table: {
                type: { summary: 'string' },
            },
            options: types,
            control: { type: 'select' },
        }
    },
};

const Template = args => <NavIcon {...args} />;

export const Default = Template.bind({});

export const Devices = Template.bind({});
Devices.args = {
    type: "devices",
}

export const Rooms = Template.bind({});
Rooms.args = {
    type: "rooms",
}

export const Automations = Template.bind({});
Automations.args = {
    type: "automations",
}

export const Homee = Template.bind({});
Homee.args = {
    type: "homee",
}