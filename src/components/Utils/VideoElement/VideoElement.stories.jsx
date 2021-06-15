import React from 'react';
import { VideoElement } from '../../index';

export default {
  title: 'Statecomponents/VideoElement',
  component: VideoElement,
  parameters: {
    docs: {
      description: {
        component: 'VideoElement for showing videos from Devices. <br/> Aspect Ratio is 16 / 9',
      },
    },
  },
  argTypes: {
        src: {
            description: 'Video source (Can be imported or https)', 
            type: {
                required: true 
            },
            table: {
              type: { summary: 'string' },
            },
            control: { type: 'text' },
            controls: false
        },
        type: {
            description: 'Video format', 
            type: {
                required: true 
            },
            table: {
              type: { summary: 'string' },
            },
            control: { type: 'text' },
            controls: false
        }
    }
};


const Template = args => <VideoElement
 {...args} />;

export const Default = Template.bind({});
Default.args = {
};