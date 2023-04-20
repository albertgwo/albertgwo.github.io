import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import Title from './Title';
import PortfolioMenu from '../components/PortfolioMenu';
import MainMenu from '../components/MainMenu';
import { fadeConfig } from '../styles/animations/animations';
import { animated, useTransition } from '@react-spring/web';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { children, className } = props;
  const [showMainMenu, setShowMainMenu] = useState<boolean>(false);
  const [showSecondaryMenu, setShowSecondaryMenu] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMainMenu(true);
    }, 5500);
    return () => clearTimeout(timeout);
  }, []);

  const handlePortfolioClick = async () => {
    if (showMainMenu) {
      setShowMainMenu(false);
      await new Promise((resolve) => setTimeout(resolve, 800)); // Adjust the delay as needed
      setShowSecondaryMenu(true);
    } else {
      setShowSecondaryMenu(false);
      await new Promise((resolve) => setTimeout(resolve, 800)); // Adjust the delay as needed
      setShowMainMenu(true);
    }
  };

  const handleOptionClicked = (page: string) => {
    handlePortfolioClick();
    console.log(page);
  };

  const mainMenuTransition = useTransition(showMainMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: fadeConfig,
  });

  const secondaryMenuTransition = useTransition(showSecondaryMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: fadeConfig,
  });

  return (
    <div className={twMerge('justify-center flex', className)}>
      <Title className='mt-8 mb-4' />
      {mainMenuTransition((style, item) =>
        item ? (
          <animated.div
            style={style}
            className='absolute inset-x-0 h-min flex flex-row max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mt-24 justify-evenly'
          >
            <MainMenu handlePortfolioClick={handlePortfolioClick} />
          </animated.div>
        ) : null
      )}
      {secondaryMenuTransition((style, item) =>
        item ? (
          <animated.div
            style={style}
            className='absolute inset-x-0 h-min flex flex-row max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mt-24 justify-evenly'
          >
            <PortfolioMenu handleOptionClicked={handleOptionClicked} />
          </animated.div>
        ) : null
      )}
      <div>{children}</div>
    </div>
  );
};

export default Header;
