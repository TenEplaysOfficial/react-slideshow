import type { Meta, StoryObj } from '@storybook/react';
import { Slide } from '../lib';

const meta: Meta<typeof Slide> = {
  title: 'Image SlideShow - Demo',
  component: Slide,
  tags: ['autodocs'],
  args: {},
};

export default meta;

type Story = StoryObj<typeof Slide>;

export const Default: Story = {};
