import React from 'react';
import { Button } from '../global-components/Button';

interface MainMenuProps {
  handlePortfolioClick: () => void;
}

interface MenuItem {
  text: string;
  onClick?: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ handlePortfolioClick }) => {
  const menuItems: MenuItem[] = [
    { text: 'portfolio', onClick: handlePortfolioClick },
    { text: 'about' },
    { text: 'contact' },
  ];
  return (
    // <div className='flex flex-row justify-evenly max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-2 z-20'>
    <>
      {menuItems.map((item) => (
        <Button
          key={item.text}
          variant='text'
          color='cream'
          className='font-retail font-light opacity-70'
          onClick={item?.onClick}
        >
          {item.text}
        </Button>
      ))}
      {/* // </div> */}
    </>
  );
};

export default MainMenu;
