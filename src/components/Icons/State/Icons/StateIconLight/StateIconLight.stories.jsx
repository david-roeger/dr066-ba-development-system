import React from 'react';
import { StateIconLight, StateIconContainer } from '../../../../index';

import { colorClasses } from './StateIconLight.config'

export default {
  component: StateIconLight,
  title: 'Icons/State/Icons/StateIconLight',
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
              component: 'State Icon Light Component <br> The SVG is directly manipulated inside the component. <br> Icon Must be wrapped inside <code>&lt;StateIconContainer&gt;</code> Element.',
          },
      },
  },
  argTypes: {
    state: {
      description: 'Icon state (0 - 100)', 
      table: {
        type: { summary: 'number' },
      },
      type: {
        required: false
      },
      control: { 
        type: 'range', 
        min: 0, 
        max: 100, 
        step: 1 },
    },
    colorClass: {
      description: 'Color Class (from IconState.config)',
      table: {
        type: { summary: 'string' },
      },
      options: Object.keys(colorClasses),
      control: { type: 'select' },
    }
  }
};

const Template = args => <StateIconLight {...args} />;

export const Default = Template.bind({});

export const Off = Template.bind({});
Off.args = {
  state: 0
};

export const On = Template.bind({});
On.args = {
  state: 100,
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