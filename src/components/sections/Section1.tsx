import React from 'react';
import Heading2 from '../headings/Heading2';
import Image from 'next/image';
import SectionContent from '../contents/SectionContent';

function Section1() {
  return (
    <div>
      <div className="px-[24px] py-4">
        <Heading2>How It Works</Heading2>
      </div>
      <div className="px-4 py-[24px] flex flex-col gap-[32px]">
        <Image
          src={'/images/images.png'}
          alt="how-it-works"
          width={1288}
          height={738}
        />
        <SectionContent
          title="Clone Yourself In Minutes"
          content={
            <>
              Upload a few images of yourself and adjust your AI's
              configurations to create your{' '}
              <span className="text-red-700">AI clone</span> in{' '}
              <span className="text-red-700">less than 5 minutes!</span>
            </>
          }
        />
      </div>
    </div>
  );
}

export default Section1;
