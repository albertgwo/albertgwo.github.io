// import React from 'react';
// import { Button } from '../global-components/Button';
// import { SpringValue, animated } from 'react-spring';

// interface MainMenuProps {
//   animation: {
//     opacity: SpringValue<number>;
//   };
//   handleOptionClicked: (page: string) => void;
// }

// interface MenuItem {
//   text: string;
// }

// const PortfolioMenu: React.FC<MainMenuProps> = ({ animation, handleOptionClicked }) => {
//   const menuItems: MenuItem[] = [{ text: 'people' }, { text: 'places' }, { text: 'nature' }];
//   console.log('animation', animation);
//   return (
//     <animated.div style={animation}>
//       <div className='flex flex-row justify-evenly max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-2 z-20'>
//         {menuItems.map((item) => (
//           <Button
//             key={item.text}
//             variant='text'
//             color='cream'
//             className='font-retail font-light opacity-70'
//             onClick={() => handleOptionClicked(item.text)}
//           >
//             {item.text}
//           </Button>
//         ))}
//       </div>
//     </animated.div>
//   );
// };

// export default PortfolioMenu;

// import React from 'react';
// import { Button } from '../global-components/Button';
// import { SpringValue, animated, useSpring } from 'react-spring';

// interface MainMenuProps {
//   animation: {
//     opacity: SpringValue<number>;
//   };
//   handleOptionClicked: (page: string) => void;
// }

// interface MenuItem {
//   text: string;
// }

// const PortfolioMenu: React.FC<MainMenuProps> = ({ animation, handleOptionClicked }) => {
//   const menuItems: MenuItem[] = [{ text: 'people' }, { text: 'places' }, { text: 'nature' }];
//   console.log('animation', animation);

//   const fadeInAnim = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: 1 },
//     config: {
//       mass: 20,
//       tension: 15,
//       friction: 1,
//       clamp: true,
//       precision: 0.001,
//     },
//   });

//   return (
//     <animated.div style={fadeInAnim}>
//       <div className='flex flex-row justify-evenly max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-2 z-20'>
//         {menuItems.map((item) => (
//           <Button
//             key={item.text}
//             variant='text'
//             color='cream'
//             className='font-retail font-light opacity-70'
//             onClick={() => handleOptionClicked(item.text)}
//           >
//             {item.text}
//           </Button>
//         ))}
//       </div>
//     </animated.div>
//   );
// };

// export default PortfolioMenu;

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
    // <div className='flex flex-row justify-evenly max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-2 z-20'>
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
      {/* </div> */}
    </>
  );
};

export default PortfolioMenu;
