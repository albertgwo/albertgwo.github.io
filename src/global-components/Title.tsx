import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useSpring, animated, useSpringRef, useChain } from '@react-spring/web';

const Title: React.FC<{ className?: string }> = ({ className }) => {
  const [middleTranslateY, setMiddleTranslateY] = useState(0);
  const [initialScale, setInitialScale] = useState(4);
  const titleRef = useRef(null);

  useEffect(() => {
    const middleTranslateY =
      window.innerHeight / 2 - (titleRef.current ? titleRef.current.offsetHeight / 2 : 0);
    setMiddleTranslateY(middleTranslateY);

    // Calculate the initial scale based on the width of the screen
    const screenWidth = window.innerWidth;
    const isLargerThanSmall = screenWidth >= 640; // 640px is the breakpoint for the "sm" screen size in Tailwind CSS
    const targetWidthPercentage = isLargerThanSmall ? 0.7 : 0.9;
    const targetWidth = screenWidth * targetWidthPercentage;
    const currentWidth = titleRef.current ? titleRef.current.offsetWidth : 0;
    const calculatedScale = currentWidth !== 0 ? targetWidth / currentWidth : 1;
    setInitialScale(calculatedScale);
  }, [titleRef.current]);

  const fadeInRef = useSpringRef();
  const fadeInAnim = useSpring({
    ref: fadeInRef,
    from: { opacity: 0 },
    to: { opacity: 0.9 },
    config: {
      mass: 20,
      tension: 15,
      friction: 1,
      clamp: true,
      precision: 0.001,
    },
    delay: 1000,
  });
  const scaleTranslRef = useSpringRef();
  const scaleTranslAnim = useSpring({
    ref: scaleTranslRef,
    from: { opacity: 0.9, scale: initialScale, y: middleTranslateY },
    to: { opacity: 1, scale: 1, y: 0 },
    config: {
      mass: 6.5,
      tension: 200,
      friction: 140,
      clamp: true,
      precision: 0.001,
    },
    delay: 1000,
  });

  useChain([fadeInRef, scaleTranslRef]);

  return (
    <div className='flex items-center justify-center'>
      <animated.div style={{ opacity: fadeInAnim.opacity }} ref={titleRef}>
        <animated.div
          style={{
            scale: scaleTranslAnim.scale,
            y: scaleTranslAnim.y,
            opacity: scaleTranslAnim.opacity,
          }}
          className={twMerge(
            'font-new-spirit-condensed text-[#3772F0] text-6xl text-center [text-shadow:_0_1px_40px_rgb(153_180_240_/_40%)]',
            className
          )}
        >
          Albert Gwo
        </animated.div>
      </animated.div>
    </div>
  );
};

export default Title;
