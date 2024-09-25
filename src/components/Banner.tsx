import Image from 'next/image';
import React from 'react';
import BeginButton from './buttons/BeginButton';
import HeroHeading from './headings/HeroHeading';
import DesktopHeroTopImage from '/public/images/desktop/hero-background-top@2x.png';
import DesktopHeroBottomImage from '/public/images/desktop/hero-background-bottom@2x.png';
import MobileHeroTopImage from '/public/images/mobile/hero-background-top@2x.png';
import MobileHeroBottomImage from '/public/images/mobile/hero-background-bottom@2x.png';
import StarsImage from '/public/images/star@2x.png';

function Banner() {
  return (
    <div className="h-[557px] md:h-auto w-full relative">
      <div className="absolute max-w-[1440px] mx-auto inset-0 flex flex-col items-center justify-center">
        <Image
          src={StarsImage}
          alt="star-bg"
          className="object-cover  object-center h-full w-full z-0"
          quality={100}
        />
      </div>
      <div className="flex flex-col w-full max-w-[1200px] mx-auto">
        <div className="h-[72px] md:h-[241px] w-full">
          <Image
            className="block sm:hidden object-cover h-full w-full"
            src={MobileHeroTopImage}
            alt="hero-background-top"
            quality={100}
          />
          <Image
            className="hidden sm:block object-cover h-full w-full"
            src={DesktopHeroTopImage}
            alt="hero-background-top"
            quality={100}
          />
        </div>
        {/* Heading */}
        <div className="py-[24px] px-[40px] flex flex-col gap-6 items-center relative">
          <HeroHeading>Create your AI clone in 5 minutes </HeroHeading>
          <p className="text-[16px] font-light leading-6 md:text-2xl text-center text-white opacity-50">
            Monetize your online audience 24/7
          </p>
          <BeginButton />
          <div className="w-full h-[100px] opacity-50 light-blur blur-[100px] absolute top-[268px]"></div>
          <div className="w-full h-[100px] opacity-30 light-blur2 blur-[100px] absolute top-[368px]"></div>
        </div>
        <div>
          <Image
            className="block sm:hidden object-cover h-full w-full relative z-0"
            src={MobileHeroBottomImage}
            alt="hero-background-bottom"
            quality={100}
          />
          <Image
            className="hidden sm:block object-cover h-full w-full relative z-0"
            src={DesktopHeroBottomImage}
            alt="hero-background-bottom"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
