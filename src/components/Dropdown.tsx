import React, { useState, useRef } from 'react';
import { Transition } from '@headlessui/react';

interface DropdownMenuProps {
  label: string;
}

const Dropdown: React.FC<DropdownMenuProps> = ({ label }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    // if (hideTimeout.current) {
    //   clearTimeout(hideTimeout.current);
    // }
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    // if (hideTimeout.current) {
    //   clearTimeout(hideTimeout.current);
    // }
    // hideTimeout.current = setTimeout(() => {
    setIsDropdownVisible(false);
    // }, 100);
  };

  return (
    <div
      className='relative inline-block text-left'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-300 hover:text-white focus:outline-none'>
        {label}
      </button>

      <Transition
        show={isDropdownVisible}
        enter='transition ease-out duration-300'
        enterFrom='transform opacity-0'
        enterTo='transform opacity-100'
        leave='transition ease-in duration-200'
        leaveFrom='transform opacity-100'
        leaveTo='transform opacity-0'
      >
        <div className='absolute left-1/2 w-24 text-center transform -translate-x-1/2 rounded-md bg-[#19193C]'>
          <button className='block w-full py-2 text-sm text-gray-300 hover:text-white hover:bg-[#22224C]'>
            people
          </button>
          <button className='block w-full py-2 text-sm text-gray-300 hover:text-white hover:bg-[#22224C]'>
            places
          </button>
          <button className='block w-full py-2 text-sm text-gray-300 hover:text-white hover:bg-[#22224C]'>
            nature
          </button>
          <button className='block w-full py-2 text-sm text-gray-300 hover:text-white hover:bg-[#22224C]'>
            sports
          </button>
          <button className='block w-full py-2 text-sm text-gray-300 hover:text-white hover:bg-[#22224C]'>
            underwater
          </button>
          <button className='block w-full py-2 text-sm text-gray-300 hover:text-white hover:bg-[#22224C]'>
            graduation
          </button>
          <button className='block w-full py-2 text-sm text-gray-300 hover:text-white hover:bg-[#22224C]'>
            film
          </button>
        </div>
      </Transition>
    </div>
  );
};

export default Dropdown;
