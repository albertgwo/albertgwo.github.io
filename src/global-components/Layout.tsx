import React, { ReactNode } from 'react';
import Header from './Header';

const Layout: React.FC<{ children: ReactNode }> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
