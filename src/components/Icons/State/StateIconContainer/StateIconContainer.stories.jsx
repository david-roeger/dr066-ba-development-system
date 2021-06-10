import React from 'react';
import { StateIconContainer } from '../../../index';
import { On as StateIconLight } from '../Icons/StateIconLight/StateIconLight.stories';

export default {
    component: StateIconContainer,
    title: 'Icons/State/StateIconContainer',
    subcomponents: { StateIconLight },
    parameters: {
        docs: {
            description: {
                component: 'Container Component for Device Icons. <br> Expects one <code>&lt;...StateIcon&gt;</code> Element as Child.',
            },
        },
    },
    argTypes: {
        children: {
            description: 'State Icon Component',
            type: {
                required: true 
            },
            table: {
                type: { summary: '<...StateIcon/>' },
            },
            control: {
                type: null
            }
        },
    }
};

const Template = args => <StateIconContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: <StateIconLight {...StateIconLight.args}/>
};