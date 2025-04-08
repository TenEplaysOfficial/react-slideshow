import { useState, useEffect, useRef } from 'react';
import { Slider } from './types';
import getIcon from './getIcon';

export default function ImageSlider({
  images,
  animation = 'slide',
  showIndicators = false,
  autoSwitch = true,
  infiniteLoop = true,
  duration = 3000,
  buttonPosition = 'overlay',
  customButton = {
    left: getIcon('arrowLeft'),
    right: getIcon('arrowRight'),
  },
  hideButton = false,
  onSlideChange,
  defaultImageIndex = 0,
  pauseOnHover = false,
  transitionDuration = 700,
}: Slider) {
  const [imageIndex, setImageIndex] = useState(defaultImageIndex);
  const intervalRef = useRef<null | NodeJS.Timeout>(null);

  const imgData = images.map((img) =>
    typeof img === 'string' ? { url: img, alt: 'img' } : img,
  );

  const createInterval = () => {
    if (!autoSwitch) return;
    cleanInterval();

    intervalRef.current = setInterval(() => {
      nextImage();
      // console.log('Interval');
    }, duration);
  };

  const cleanInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      // console.log('clearInterval');
      intervalRef.current = null;
    }
  };

  const restartInterval = () => {
    if (!autoSwitch) return;
    cleanInterval();
    createInterval();
  };

  const nextImage = () => {
    // console.log('nextImage clicked');
    setImageIndex((prev) => {
      const isLast = prev >= imgData.length - 1;

      if (!infiniteLoop && isLast) {
        cleanInterval();
      }

      const nextIndex = infiniteLoop
        ? (prev + 1 + imgData.length) % imgData.length
        : Math.min(prev + 1, imgData.length - 1);

      if (onSlideChange) {
        onSlideChange(nextIndex);
      }
      return nextIndex;
    });

    restartInterval();
  };

  const prevImage = () => {
    // console.log('prevImage clicked');
    setImageIndex((prev) => {
      if (infiniteLoop) {
        return (prev - 1 + imgData.length) % imgData.length;
      }
      return Math.max(prev - 1, 0);
    });

    restartInterval();
  };

  useEffect(() => {
    createInterval();
    return () => {
      cleanInterval();
    };
  }, []);

  const handleMouseEnter = () => {
    // console.log('Mouse Enter');
    if (pauseOnHover) {
      cleanInterval();
    }
  };

  const handleMouseLeave = () => {
    // console.log('Mouse Leave');
    if (pauseOnHover) {
      createInterval();
    }
  };

  return (
    <section
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Image slider"
      className="relative overflow-hidden"
    >
      <div
        tabIndex={0}
        onKeyDown={(e) => {
          // console.log(e.key);
          if (e.key.toLowerCase() === 'arrowleft') {
            prevImage();
          } else if (e.key.toLowerCase() === 'arrowright') {
            nextImage();
          }
        }}
        style={{
          transform: `translateX(-${imageIndex * 100}%)`,
          transitionDuration: `${transitionDuration}ms`,
        }}
        className="flex aspect-[18/9] h-full w-full transition-all ease-in-out"
      >
        {imgData.map((d, i) => (
          <img
            key={i}
            src={d.url}
            alt={d.alt}
            loading="lazy"
            aria-label="Image"
            className="h-full w-full shrink-0 object-center"
          />
        ))}
      </div>
      {!hideButton && (
        <div className="absolute top-1/2 left-0 z-20 flex h-full w-full -translate-y-1/2 place-content-center items-center justify-between sm:px-2">
          <button onClick={prevImage} className="h-fit cursor-pointer">
            {customButton.left}
          </button>
          <button onClick={nextImage} className="h-fit cursor-pointer">
            {customButton.right}
          </button>
        </div>
      )}
      {showIndicators && (
        <div className="flex justify-center">
          {imgData.map((_, i) => (
            <span>{imageIndex === i ? '🔥' : '🔯'}</span>
          ))}
        </div>
      )}
    </section>
  );
}
