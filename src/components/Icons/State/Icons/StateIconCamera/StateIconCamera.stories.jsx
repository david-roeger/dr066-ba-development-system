import React from 'react';
import { StateIconCamera, StateIconContainer } from '../../../../index';
import { colorClasses } from './StateIconCamera.config'

export default {
    component: StateIconCamera,
    title: 'Icons/State/Icons/StateIconCamera',
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
                component: 'State Icon Camera Component <br> The SVG is directly manipulated inside the component. <br> Icon Must be wrapped inside <code>&lt;StateIconContainer&gt;</code> Element.',
            },
        },
    },
    argTypes: {
        state: {
            description: 'Icon state (true / false)', 
            table: {
                type: { summary: 'boolean' },
            },
            control: { 
                type: 'boolean', 

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

const Template = args => <StateIconCamera {...args} />;

export const Default = Template.bind({});

export const On = Template.bind({});
On.args = {
  state: true
};

export const Zwave = Template.bind({});
Zwave.args = {
  colorClass: 'zwave',
  state: true
};

export const Enocean = Template.bind({});
Enocean.args = {
  colorClass: 'enocean',
  state: true
};

export const Zigbee = Template.bind({});
Zigbee.args = {
  colorClass: 'zigbee',
  state: true
};