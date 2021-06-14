import React from 'react';
import { ValueElement, Value } from '../../../index';

export default {
  title: 'ControlElements/Value/ValueElement',
  component: ValueElement,
  parameters: {
    docs: {
      description: {
        component: 'UpDown Element <br/> Read Only <br/> Expects one <code>&lt;Value&gt;</code> Element as Child.'
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
        type: { summary: '<Value></Value>' },
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


const Template = args => <ValueElement {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Value state="Value"></Value>
};