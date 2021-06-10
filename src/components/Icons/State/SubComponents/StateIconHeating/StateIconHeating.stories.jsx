import React from 'react';
import { StateIconHeating, StateIconContainer } from '../../../../index';

import { colorClasses } from './StateIconHeating.config'

export default {
    component: StateIconHeating,
    title: 'Icons/State/SubComponents/StateIconHeating',
    decorators: [
      (Story) => (
          <StateIconContainer>
              {Story()}
          </StateIconContainer>
      ),
    ],
    parameters: {
        docs: {
            description: {
                component: 'State Icon Heating Component <br> The SVG is directly manipulated inside the component. <br> Icon Must be wrapped inside <code>&lt;StateIconContainer&gt;</code> Element.',
            },
        },
    },
    argTypes: {
        state: {
            description: 'Icon state (0 - 100)', 
            table: {
                type: { summary: 'number' },
            },
            control: { 
                type: 'range', 
                min: 0, 
                max: 100, 
                step: 1 
            },
        },
        colorClass: {
            description: 'Color Class (from config)',
            table: {
                type: { summary: 'string' },
            },
            options: Object.keys(colorClasses),
            control: { type: 'select' },
        }
    },
};

const Template = args => <StateIconHeating {...args} />;

export const Default = Template.bind({});

export const Cold = Template.bind({});
Cold.args = {
  state: 0
};

export const Hot = Template.bind({});
Hot.args = {
  state: 100
};

export const Zwave = Template.bind({});
Zwave.args = {
  colorClass: 'zwave',
};

export const Enocean = Template.bind({});
Enocean.args = {
  colorClass: 'enocean',
};

export const Zigbee = Template.bind({});
Zigbee.args = {
  colorClass: 'zigbee',
};