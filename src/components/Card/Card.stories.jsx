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
        colCount: {
            description: 'Put items in cols next to each other. Default colCount uses <code>Grid</code> Auto Cols. col must be set.', 
            table: {
                type: { summary: 'number' },
            },
            control: { 
                type: 'range', 
                min: 0, 
                max: 9, 
                step: 1 
            }
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
    children: [
        <Text key={0}>Element</Text>,
        <Text key={1}>Element</Text>,
        <Text key={2}>Element</Text>,
        <Text key={3}>Element</Text>,
        <Text key={4}>Element</Text>
    ]
}

export const Col = Template.bind({});
Col.args = {
    col: true,
    children: [
        <Text key={0}>Element</Text>,
        <Text key={1}>Element</Text>,
        <Text key={2}>Element</Text>,
        <Text key={3}>Element</Text>,
        <Text key={4}>Element</Text>
    ]
}

export const CustomCol = Template.bind({});
CustomCol.args = {
    col: true,
    colCount: 3,
    children: [
        <Text key={0}>Element</Text>,
        <Text key={1}>Element</Text>,
        <Text key={2}>Element</Text>,
        <Text key={3}>Element</Text>,
        <Text key={4}>Element</Text>
    ]
}


export const Video = Template.bind({});
Video.args = {
    col: true,
    children: [
        <Text key={0}>Element</Text>,
        <Text key={1}>Element</Text>,
        <Text key={2}>Element</Text>,
        <Text key={3}>Element</Text>,
        <VideoElement key={4}/>,
        <Text key={5}>Element</Text>
    ]
}