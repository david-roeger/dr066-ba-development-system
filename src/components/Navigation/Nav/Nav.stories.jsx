import React from 'react';
import { Nav, Grid } from '../../index';
import { BrowserRouter } from 'react-router-dom'

export default {
    component: Nav,
    title: 'Navigation/Nav',
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Grid full>
                    {Story()}
                </Grid>
            </BrowserRouter>
        ),
      ],
    parameters: {
        docs: {
            description: {
                component: 'Renders <code>&lt;NavIconButton&gt;</code> elements inside Container. </br> Default Values are defined in config file',
            },
        },
        layout: 'fullscreen'
    },
    argTypes: {
        children: {
            description: 'NavIconButtons',
            type: {
                required: true 
            },
            table: {
                type: { summary: '[NavIconButton]' },
                default: '-'
            },
            control: {
                control: false
            }
        },
    }
};

const Template = args => <Nav {...args} />;

export const Default = Template.bind({});