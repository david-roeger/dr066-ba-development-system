import React from 'react';
import { StateIconHumidity, StateIconContainer } from '../../../../index';

import { colorClasses } from './StateIconHumidity.config'

export default {
    component: StateIconHumidity,
    title: 'Icons/State/SubComponents/Humidity',
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
                component: 'State Icon Humidity Component <br> The SVG is directly manipulated inside the component. <br> Must be wrapped inside <code>&lt;StateIconContainer&gt;</code> Element.',
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

const Template = args => <StateIconHumidity {...args} />;

export const Default = Template.bind({});

export const Low = Template.bind({});
Low.args = {
  state: 0
};

export const High = Template.bind({});
High.args = {
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