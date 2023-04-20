import React from 'react';
import { Button } from '../global-components/Button';

interface MainMenuProps {
  handleOptionClicked: (page: string) => void;
}

interface MenuItem {
  text: string;
}

const PortfolioMenu: React.FC<MainMenuProps> = ({ handleOptionClicked }) => {
  const menuItems: MenuItem[] = [{ text: 'people' }, { text: 'places' }, { text: 'nature' }];

  return (
    <>
      {menuItems.map((item) => (
        <Button
          key={item.text}
          variant='text'
          color='cream'
          className='font-retail font-light opacity-70'
          onClick={() => handleOptionClicked(item.text)}
        >
          {item.text}
        </Button>
      ))}
    </>
  );
};

export default PortfolioMenu;
