import Image from 'next/image';
import React from 'react';
import BeginButton from './buttons/BeginButton';
import Heading1 from './headings/Heading1';

function Banner() {
  return (
    <div className="h-[557px] md:h-auto w-full relative">
      <div className="absolute max-w-[1440px] mx-auto inset-0 flex flex-col items-center justify-center">
        <Image
          src={'/images/Star.png'}
          alt="star-bg"
          width={1440}
          height={831}
          className="object-cover  object-center h-full w-full z-0"
        />
      </div>
      <div className="flex flex-col w-full max-w-[1200px] mx-auto">
        <div className="h-[72px] md:h-[241px] w-full">
          <Image
            className="block sm:hidden object-cover h-full w-full"
            src={'/images/mobile/hero-background-top.png'}
            alt="star-bg"
            width={430}
            height={142}
          />
          <Image
            className="hidden sm:block object-cover h-full w-full"
            src={'/images/desktop/hero-background-top.png'}
            alt="star-bg"
            width={1441}
            height={241}
          />
        </div>
        {/* Heading */}
        <div className="py-[24px] px-[40px] flex flex-col gap-6 items-center relative">
          <Heading1>Create your AI clone in 5 minutes </Heading1>
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
            src={'/images/mobile/hero-background-bottom.png'}
            alt="star-bg"
            width={390}
            height={260}
          />
          <Image
            className="hidden sm:block object-cover h-full w-full relative z-0"
            src={'/images/desktop/hero-background-bottom.png'}
            alt="star-bg"
            width={1441}
            height={555}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
