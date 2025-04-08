import { ReactElement } from 'react';

export type Data = (string | { url: string; alt?: string })[];

export type Slider = {
  images: Data;
  animation?: 'slide' | 'fade';
  showIndicators?: boolean;
  customButton?: {
    left?: string | ReactElement;
    right?: string | ReactElement;
  };
  hideButton: boolean;
  buttonPosition?: 'overlay' | 'bottom';
  autoSwitch?: boolean;
  infiniteLoop?: boolean;
  defaultImageIndex: number;
  duration?: number;
  pauseOnHover?: boolean;
  transitionDuration?: number;
  onSlideChange?: (imageIndex: number) => void;
};
