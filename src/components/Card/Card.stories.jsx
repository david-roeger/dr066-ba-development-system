import React from 'react';
import { Card } from '../index';
import { Text } from '../index'
import { VideoElement } from '../index';


export default {
  title: 'Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'Component.',
      },
    },
  },
  argTypes: {
        title: {
            description: 'Header Title',
            table: {
                type: { summary: 'string' },
            },
            control: {
                type: 'text'
            }
        },
        col: {
            description: 'Put items in cols next to each other', 
            table: {
                type: { summary: 'boolean' },
              },
              control: { 
                type: 'boolean', 
            },
        },
        children: {
            description: 'Text',
            type: {
                required: true 
            },
            table: {
                type: { summary: 'Element Collection' },
            },
            control: false
        }
    }
};


const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: [<Text>Element</Text>,<Text>Element</Text>,<Text>Element</Text>,<Text>Element</Text>,<Text>Element</Text>]
}
export const Col = Template.bind({});
Col.args = {
    col: true,
    children: [<Text>Element</Text>,<Text>Element</Text>,<Text>Element</Text>,<Text>Element</Text>,<Text>Element</Text>]
}

export const Video = Template.bind({});
Video.args = {
    col: true,
    children: [<Text>Element</Text>,<Text>Element</Text>,<Text>Element</Text>,<VideoElement />,<Text>Element</Text>]
}