import { ReactElement } from 'react';

export type Data = (string | { url: string; alt?: string })[];

/**
 * Props for the Slide component.
 */
export type Slider = {
  /**
   * An array of image URLs or objects with `url` and optional `alt`.
   *
   * @example
   * images: [
   *   'https://example.com/image1.jpg',
   *   { url: 'https://example.com/image2.jpg', alt: 'Description of image 2' }
   * ]
   */
  images: Data;
  /** Type of animation to use: 'slide' or 'fade'. */
  animation?: 'slide' | 'fade';
  /** Whether to show indicator dots below the slideshow. */
  showIndicators?: boolean;
  /** Custom navigation buttons, can be strings or React elements. */
  customButton?: {
    left?: string | ReactElement;
    right?: string | ReactElement;
  };
  /** If true, hides the left/right navigation buttons. */
  hideButton: boolean;
  /** Position of the navigation buttons: overlay on image or below it. */
  buttonPosition?: 'overlay' | 'bottom';
  /** If true, slideshow will auto-switch to the next image. */
  autoSwitch?: boolean;
  /** If true, slideshow loops back to the beginning after the last image. */
  infiniteLoop?: boolean;
  /** The index of the image to show first starting from 0 . */
  defaultImageIndex: number;
  /** Duration each image stays visible when autoSwitch is true (in ms). */
  duration?: number;
  /** Whether to pause auto-switching when user hovers over the slideshow. */
  pauseOnHover?: boolean;
  /** Duration of the transition animation (in ms). */
  transitionDuration?: number;
  /** Callback fired when the slide changes, passes new index. */
  onSlideChange?: (imageIndex: number) => void;
};
