import React from 'react';
import { Text } from '../index';

export default {
    component: Text,
    title: 'Text',
    argTypes: {
        size: {
            description: 'Base Text Size', 
            table: {
                type: { summary: 'string' },
            },
            control: { 
              options: ['sm', 'base', 'xl'],
              type: 'radio'
            }
        }
    }
};

const Template = args => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Text"
};