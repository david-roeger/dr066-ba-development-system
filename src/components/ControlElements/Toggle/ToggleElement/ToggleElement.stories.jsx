import React from 'react';
import { ToggleElement } from '../../../index';

export default {
  title: 'ControlElements/Toggle/ToggleElement',
  component: ToggleElement,
  parameters: {
    docs: {
      description: {
        component: 'Toggle Element <br/> Expects one <code>&lt;ToggleScala&gt;</code> Element as Child.',
      },
    },
  },
  argTypes: {
    attribute: {
      description: 'Attribute Name', 
      table: {
          type: { summary: 'string' },
      },
      control: { type: 'text' },
    },
    children: {
      description: 'Content',
      table: {
        type: { summary: '<ToggleScala><Toggle /></ToggleScala>' },
      },
      type: {
          required: true 
      },
      control: {
          type: null
      }
    }
  }
};


const Template = args => <ToggleElement {...args} />;

export const Default = Template.bind({});
Default.args = {
};