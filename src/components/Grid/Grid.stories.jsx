import React from "react";
import { Grid } from "../index";

export default {
  component: Grid,
  title: "Grid",
  parameters: {
    docs: {
      description: {
        component:
          "Grid Components. Renders Cols based on Screensize or variable",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    children: {
      description: "Content",
      type: {
        required: true,
      },
      control: {
        type: null,
      },
      default: {},
    },
    cols: {
      description: "Flexible grid col count",
      table: {
        type: { summary: "number" },
      },
      control: {
        type: "range",
        min: 0,
        max: 9,
        step: 1,
      },
    },
  },
};

const Template = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <div key={0} className='h-2xl bg-yellow-500'></div>,
    <div key={1} className='h-2xl bg-yellow-500'></div>,
    <div key={2} className='h-2xl bg-yellow-500'></div>,
    <div key={3} className='h-2xl bg-yellow-500'></div>,
    <div key={4} className='h-2xl bg-yellow-500'></div>,
    <div key={5} className='h-2xl bg-yellow-500'></div>,
    <div key={6} className='h-2xl bg-yellow-500'></div>,
    <div key={7} className='h-2xl bg-yellow-500'></div>,
    <div key={8} className='h-2xl bg-yellow-500'></div>,
    <div key={9} className='h-2xl bg-yellow-500'></div>,
  ],
};
