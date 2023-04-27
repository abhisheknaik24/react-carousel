import React, { Children, useEffect, useState } from 'react';
import styles from './Carousel.module.css';

type Options = {
  size?: number;
  color?: string;
};

const ChevronLeft = ({ size = 20, color = '#000' }: Options) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M15 18l-6-6 6-6' />
  </svg>
);

const ChevronRight = ({ size = 20, color = '#000' }: Options) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M9 18l6-6-6-6' />
  </svg>
);

type Props = {
  children: React.ReactNode[];
  showChevron?: boolean;
  chevronSize?: number;
  showDots?: boolean;
  auto?: boolean;
  interval?: number;
};

const Carousel = ({
  children,
  showChevron = true,
  chevronSize,
  showDots = true,
  auto,
  interval,
}: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (auto) {
      const carouselInterval = setInterval(
        () => {
          if (current < Children.count(children) - 1) {
            setCurrent((prev) => prev + 1);
          } else {
            setCurrent(0);
          }
        },
        interval ? interval : 10000
      );
      return () => {
        clearInterval(carouselInterval);
      };
    }
  }, [auto, children, current, interval]);

  const handleLeft = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const handleRight = () => {
    if (current < Children.count(children) - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.carouselContent}>
      {children[current]}
      {showChevron && (
        <div>
          {current > 0 && (
            <button
              className={styles.carouselLeftArrow}
              onClick={() => handleLeft()}
            >
              <ChevronLeft size={chevronSize} />
            </button>
          )}
          {current < Children.count(children) - 1 && (
            <button
              className={styles.carouselRightArrow}
              onClick={() => handleRight()}
            >
              <ChevronRight size={chevronSize} />
            </button>
          )}
        </div>
      )}
      {showDots && (
        <div className={styles.carouselDots}>
          {children.map((_, index) => (
            <span
              key={index}
              className={current === index ? styles.active : ''}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
