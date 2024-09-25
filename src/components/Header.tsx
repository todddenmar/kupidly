import React from 'react';
import AppLogo from './header/AppLogo';
import NavigationBar from './header/NavigationBar';

function Header() {
  return (
    <nav className="flex flex-col justify-center w-full">
      <div className="flex items-center w-full max-w-[1200px] mx-auto h-[72px] md:h-[92px] py-[20px] px-[16px]">
        <AppLogo />
        <NavigationBar />
      </div>
    </nav>
  );
}

export default Header;
