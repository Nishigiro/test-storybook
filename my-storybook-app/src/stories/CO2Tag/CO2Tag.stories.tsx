// CO2Tag.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import styled from '@emotion/styled';  // Import styled from @emotion/styled
import CO2Tag, { CO2TagProps } from './CO2Tag'; // Adjust the path accordingly
import { Co2TagContainer, Co2TagItem, Co2TagTextStyle } from './styles';



export default {
  title: 'Example/CO2Tag',
  component: CO2Tag,
  decorators: [withKnobs],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    positive: { control: 'boolean' },
    wording: { control: 'text' },
    tooltip: { control: 'boolean' },
    modalText: { control: 'text' },
  },
} as Meta;


const Template: Story<CO2TagProps> = (args) => (
  <CO2Tag {...args} />
);

export const Default = Template.bind({});
Default.args = {
  positive: true,
  wording: 'CO2Tag',
  tooltip: true,
  modalText: 'Your Default Modal Text',
};
