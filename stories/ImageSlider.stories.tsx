import type { Meta, StoryObj } from '@storybook/react';
import { Slide } from '../lib';
import { action } from '@storybook/addon-actions';

const images = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1018/600/400',
  { url: 'https://picsum.photos/id/1020/600/400', alt: 'Nice landscape' },
];

const log = (i: number) => {
  console.log(`New image ${i}`);
  action('Slide Changed')(i);
};

const meta: Meta<typeof Slide> = {
  title: 'Image SlideShow - Demo',
  component: Slide,
  tags: ['autodocs'],
  args: {
    images: images,
  },
};

export default meta;

type Story = StoryObj<typeof Slide>;

export const Default: Story = {};

export const SideEffect: Story = {
  args: {
    onSlideChange: log,
  },
};

export const AutoSwitchOff: Story = {
  args: {
    autoSwitch: false,
  },
};

export const InfiniteLoopOff: Story = {
  args: {
    infiniteLoop: false,
    pauseOnHover: true,
  },
};

export const PauseOnHover: Story = {
  args: {
    pauseOnHover: true,
  },
};

export const ButtonPosition: Story = {
  args: {
    buttonPosition: 'bottom',
  },
};

export const AnimationFade: Story = {
  args: {
    animation: 'fade',
  },
};

export const ShowIndicators: Story = {
  args: {
    showIndicators: true,
  },
};

export const CustomButtons: Story = {
  args: {
    customButton: {
      left: '⬅️',
      right: '➡️',
    },
  },
};

export const HideButtons: Story = {
  args: {
    hideButton: true,
  },
};
