import Image from 'next/image';
import React from 'react';
import MainLogoImage from '/public/images/MainLogo.png';

function AppLogo() {
  return (
    <div>
      <Image src={MainLogoImage} alt="kupidly-logo" quality={100} />
    </div>
  );
}

export default AppLogo;
