import Image from 'next/image';
import React from 'react';
import SectionContent from '../contents/SectionContent';

function Section2() {
  return (
    <div className="p-[24px] flex flex-col gap-[32px]">
      <Image
        src={'/images/social.png'}
        alt="social"
        width={1382}
        height={782}
      />
      <SectionContent
        title="Connect and Promote"
        content={
          <>
            Link to your Kupidly profile on your various socials. We've found
            great results with impactful call-to-actions such as “I answer DMs
            on Kupidly” or “Send me your best pickup line on Kupidly”
          </>
        }
      />
    </div>
  );
}

export default Section2;
