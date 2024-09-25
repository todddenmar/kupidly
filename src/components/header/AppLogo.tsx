import Image from 'next/image';
import React from 'react';

function AppLogo() {
  return (
    <div>
      <Image
        src={'/images/MainLogo.png'}
        alt="kupidly-logo"
        width={124}
        height={40}
      />
    </div>
  );
}

export default AppLogo;
