import { useState, useEffect, useRef, ReactElement } from 'react';
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
  const indicatorRefs = useRef<(HTMLButtonElement | null)[]>([]);

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

  useEffect(() => {
    if (showIndicators && indicatorRefs.current[imageIndex]) {
      indicatorRefs.current[imageIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [imageIndex, showIndicators]);

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
          ...(animation === 'slide'
            ? {
                transform: `translateX(-${imageIndex * 100}%)`,
                transitionDuration: `${transitionDuration}ms`,
              }
            : {}),
        }}
        className="flex aspect-[18/9] h-full w-full transition-all ease-in-out select-none"
      >
        {imgData.map((d, i) => {
          const isActive = i === imageIndex;
          return (
            <img
              key={i}
              src={d.url}
              alt={d.alt}
              loading="lazy"
              aria-label="Image"
              style={{
                ...(animation === 'fade'
                  ? {
                      transitionDuration: `${transitionDuration}ms`,
                    }
                  : {}),
              }}
              className={`pointer-events-none h-full w-full object-center ${
                animation === 'slide' ? 'shrink-0' : ''
              } ${
                animation === 'fade'
                  ? `absolute top-0 left-0 transition-opacity ease-in-out ${
                      isActive ? 'z-10 opacity-100' : 'z-0 opacity-0'
                    }`
                  : ''
              }`}
            />
          );
        })}
      </div>
      {!hideButton && (
        <div
          className={`absolute z-20 flex items-center sm:px-2 ${buttonPosition === 'overlay' ? 'top-1/2 left-0 h-full w-full -translate-y-1/2 justify-between' : ''} ${buttonPosition === 'bottom' ? 'right-0 bottom-1 justify-end gap-2' : ''} `}
        >
          <Button label={customButton.left || ''} onClick={prevImage} />
          <Button label={customButton.right || ''} onClick={nextImage} />
        </div>
      )}
      {showIndicators && (
        <div className="absolute bottom-1 left-1/2 z-20 flex w-full -translate-x-1/2 justify-center px-4">
          <div className="scrollbar-hide flex max-w-[50px] gap-2 overflow-hidden rounded-full bg-black/50 px-2 py-1 backdrop-blur-sm sm:max-w-[200px]">
            {imgData.map((_, i) => (
              <button
                key={i}
                ref={(el) => {
                  indicatorRefs.current[i] = el;
                }}
                onClick={() => setImageIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1 w-1 flex-shrink-0 cursor-pointer rounded-full transition-all duration-300 focus:outline-none sm:h-2 sm:w-2 ${
                  imageIndex === i
                    ? 'scale-125 bg-white'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

const Button = ({
  onClick,
  label,
}: {
  label: string | ReactElement;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="h-fit cursor-pointer rounded bg-black/50 p-1 text-xs text-white transition hover:bg-black/70 sm:text-sm md:text-base"
    >
      {label}
    </button>
  );
};
