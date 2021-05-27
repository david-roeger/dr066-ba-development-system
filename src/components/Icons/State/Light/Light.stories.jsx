import React from 'react';
import { Light } from '../../../index';
import options from '../../../storybook-options';

export default {
  component: Light,
  title: 'Icons/State/Light',
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
    outline: {
      description: 'Outline color (text-color-*)',
      table: {
        type: { summary: 'string' },
      },
      options: options.colors[700],
      control: { type: 'select' },
    },
    base: {
      description: 'Base color (text-color-*)',
      table: {
        type: { summary: 'string' },
      }, 
      options: options.colors.primary,
      control: { type: 'select' }
    },
    fill: {
      description: 'Fill color (text-color-*)', 
      table: {
        type: { summary: 'string' },
      },
      options: [
        ...options.colors.secondary,
        ...options.colors[300]
      ],
      control: { type: 'select' }
    }
  }
};

const Template = args => <Light {...args} />;

export const Default = Template.bind({});

export const Off = Template.bind({});
Off.args = {
  state: 0
};

export const On = Template.bind({});
On.args = {
  state: 100
};