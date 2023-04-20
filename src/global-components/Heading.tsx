import React from 'react';
import { twMerge } from 'tailwind-merge';

type HeadingProps = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

function Heading({ element: Element = 'h2', children, id, className }: HeadingProps) {
  return (
    <Element className={twMerge('font-bold text-2xl pb-3', className)} id={id}>
      {children}
    </Element>
  );
}

export default Heading;
