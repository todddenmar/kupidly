import Banner from '@/components/Banner';
import BeginButton from '@/components/buttons/BeginButton';
import SectionDivider from '@/components/dividers/SectionDivider';
import SectionLayout from '@/components/layouts/SectionLayout';
import Image from 'next/image';
import generateImage from '/public/images/images@2x.png';
import socialImage from '/public/images/social@2x.png';
import giftImage from '/public/images/gift@2x.png';
import AIonoffImage from '/public/images/AIonoff@2x.png';
export default function Home() {
  return (
    <div>
      <Banner />
      <SectionLayout
        sectionTitle="How It Works"
        maxWidth={454}
        contentTitle={
          <>
            Clone Yourself <br className="hidden md:block" />
            In Minutes
          </>
        }
        content={
          <>
            Upload a few images of yourself and adjust your AI's configurations
            to create your <span className="text-highlight_text">AI clone</span>{' '}
            in <span className="text-highlight_text">less than 5 minutes!</span>
          </>
        }
        contentImage={
          <Image
            src={generateImage}
            alt="how-it-works"
            className="object-contain h-full w-full"
            quality={100}
          />
        }
      />
      <SectionDivider />
      <SectionLayout
        maxWidth={514}
        contentTitle="Connect and Promote"
        content={
          <>
            Link to your Kupidly profile on your various socials. We've found
            great results with impactful call-to-actions such as “I answer DMs
            on Kupidly” or “Send me your best pickup line on Kupidly”
          </>
        }
        contentImage={
          <Image
            src={socialImage}
            alt="social"
            className="object-contain h-full w-full"
            quality={100}
          />
        }
      />
      <SectionDivider />
      <SectionLayout
        className="xl:pt-0 xl:-mt-[40px]"
        maxWidth={516}
        contentTitle={
          <>
            Engage and Earn <br className="hidden md:block" />
            with AI
          </>
        }
        content={
          <>
            Your AI will engage in personalized conversation with those who
            visit your Kupidly profile. Monetize your audience 24/7 by accepting
            <span className="text-highlight_text"> gifts</span> and offering{' '}
            <span className="text-highlight_text">unlockable media</span>
          </>
        }
        contentImage={
          <Image
            src={giftImage}
            alt="gift"
            className="object-contain h-full w-full"
            quality={100}
          />
        }
      />
      <SectionDivider className="xl:-mt-[40px]" />
      <SectionLayout
        maxWidth={501}
        contentTitle="Seamless AI Control"
        className="xl:pt-0 xl:-mt-[40px]"
        content={
          <div className="flex flex-col gap-[32px]">
            <div>
              Monitor your AI's actions at all times with the ability to turn
              your
              <span className="text-highlight_text"> AI on/off</span> and
              manually take over conversations if you choose!
            </div>
          </div>
        }
        contentFooter={
          <div className="flex justify-center">
            <BeginButton />
          </div>
        }
        contentImage={
          <Image
            src={AIonoffImage}
            alt="AIonoff"
            className="object-contain h-full w-full"
            quality={100}
          />
        }
      />
    </div>
  );
}
