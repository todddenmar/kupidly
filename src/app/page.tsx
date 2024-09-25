import Banner from '@/components/Banner';
import BeginButton from '@/components/buttons/BeginButton';
import SectionDivider from '@/components/dividers/SectionDivider';
import SectionLayout from '@/components/layouts/SectionLayout';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Banner />
      <SectionLayout
        sectionTitle="How It Works"
        contentTitle="Clone Yourself In Minutes"
        content={
          <>
            Upload a few images of yourself and adjust your AI's configurations
            to create your <span className="text-highlight_text">AI clone</span>{' '}
            in <span className="text-highlight_text">less than 5 minutes!</span>
          </>
        }
        contentImage={
          <Image
            src={'/images/images.png'}
            alt="how-it-works"
            width={1288}
            height={738}
            className="object-contain h-full w-full"
          />
        }
      />
      <SectionDivider />
      <SectionLayout
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
            src={'/images/social.png'}
            alt="social"
            width={1382}
            height={782}
            className="object-contain h-full w-full"
          />
        }
      />
      <SectionDivider />
      <SectionLayout
        contentTitle="Engage and Earn with AI"
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
            src={'/images/gift.png'}
            alt="gift"
            width={1289}
            height={1056}
            className="object-contain h-full w-full"
          />
        }
      />
      <SectionDivider />
      <SectionLayout
        contentTitle="Seamless AI Control"
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
            src={'/images/AIonoff.png'}
            alt="AIonoff"
            width={1289}
            height={1066}
            className="object-contain h-full w-full"
          />
        }
      />
    </div>
  );
}
