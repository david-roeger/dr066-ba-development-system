import React from 'react';
import { Nav } from '../../index';

export default {
    component: Nav,
    title: 'Navigation/Nav',
    parameters: {
        docs: {
            description: {
                component: 'Nav Icon SVG. <br> The icons are referenced from <code>./public/NavIcons/*</code>. <br> Icon Values are defined in config file <br> Icon must be inside <code>&lt;NavIconButton&gt;</code> Element.',
            },
        },
    }
};

const Template = args => <Nav {...args} />;

export const Default = Template.bind({});