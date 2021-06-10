import React from 'react';
import { NavIconButton } from '../../../index';
import { BrowserRouter } from 'react-router-dom'

export default {
    component: NavIconButton,
    title: 'Navigation/Subcomponents/NavIconButton',
    decorators: [
        (Story) => (
            <BrowserRouter>
                {Story()}
            </BrowserRouter>
        ),
      ],
    parameters: {
        docs: {
            description: {
                component: 'Container Component for Nav Icons. <br> Expects one <code>&lt;NavIcon&gt;</code> and <code>&lt;Text&gt;</code> Element as Child.',
            },
        },
    },
    argTypes: {
        active: {
            description: 'Active State', 
            options: [true, false],
        },
        target: {
            description: 'Target URl', 
            table: {
                type: { summary: 'string' },
            },
        }
    },
};

const Template = args => <NavIconButton {...args} />;

export const Default = Template.bind({});

export const Active = Template.bind({});
Active.args = {
    active: true,
}