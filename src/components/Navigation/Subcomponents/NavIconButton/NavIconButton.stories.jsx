import React from 'react';
import { NavIconButton, NavIconButtonWrapper } from '../../../index';

export default {
    component: NavIconButton,
    title: 'Navigation/Subcomponents/NavIconButton',
    parameters: {
        docs: {
            description: {
                component: 'Container Component for Nav Icons. <br> Expects one <code>&lt;NavIcon&gt;</code> and <code>&lt;Text&gt;</code> Element as Child.',
            },
        },
    },
    decorators: [
        (Story) => (
            <NavIconButtonWrapper>
                {Story()}
            </NavIconButtonWrapper>
        ),
      ],
    argTypes: {
        active: {
            description: 'Active State', 
            options: [true, false],
            table: {
                type: { summary: 'boolean' },
            },
        },
        children: {
            description: '&lt;NavIcon /&gt;,&lt;Text /&gt;',
            type: {
                required: true 
            },
            table: {
                type: { summary: 'Element Collection' },
            },
            control: false
        }
    },
};

const Template = args => <NavIconButton {...args} />;

export const Default = Template.bind({});

export const Active = Template.bind({});
Active.args = {
    active: true,
}