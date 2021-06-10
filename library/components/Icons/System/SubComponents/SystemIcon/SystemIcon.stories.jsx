import React from 'react';
import { SystemIcon, SystemIconContainer } from '../../../../index'
import { types } from './SystemIcon.config'

export default {
    component: SystemIcon,
    title: 'Icons/System/SubComponents/SystemIcon',
    decorators: [
        (Story) => (
            <SystemIconContainer>
                {Story()}
            </SystemIconContainer>
        ),
      ],
    parameters: {
        docs: {
            description: {
                component: 'System Icon Component. <br> The icons are referenced from the <code>./public/systemIcons/*</code>. <br> Icon Values are defined in config file. <br> Must be wrapped in <code>&lt;SystemIconContainer&gt;</code> Element.',
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
    },
};

const Template = args => <SystemIcon {...args} />;

export const Default = Template.bind({});

export const Back = Template.bind({});
Back.args = {
    type: "back",
}

export const Next = Template.bind({});
Next.args = {
    type: "next",
}

export const Close = Template.bind({});
Close.args = {
    type: "close",
}

export const Up = Template.bind({});
Up.args = {
    type: "up",
}

export const Down = Template.bind({});
Down.args = {
    type: "down",
}