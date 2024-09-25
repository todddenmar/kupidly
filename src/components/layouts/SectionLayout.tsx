import React from 'react';
import Heading2 from '../headings/Heading2';
import SectionContent from '../contents/SectionContent';
import { cn } from '@/app/lib/utils';

function SectionLayout({
  sectionTitle,
  contentTitle,
  content,
  contentImage,
  contentFooter,
  className,
}: {
  sectionTitle?: string;
  contentTitle: string;
  content: any;
  contentImage: any;
  contentFooter?: any;
  className?: string;
}) {
  return (
    <div className="max-w-[1200px] mx-auto">
      {sectionTitle && (
        <div className="px-[24px] py-4 md:pb-[50px]">
          <Heading2>{sectionTitle}</Heading2>
        </div>
      )}
      <div
        className={cn(
          'p-6 flex flex-col md:grid md:grid-cols-2 md:justify-between md:items-center gap-[32px] lg:gap-[98px]',
          className
        )}
      >
        {contentImage}
        <div className="md:order-first">
          <SectionContent title={contentTitle} content={content} />
        </div>
        {contentFooter && (
          <div className="block md:hidden">{contentFooter}</div>
        )}
      </div>
      {contentFooter && (
        <div className="hidden md:block pb-[32px]">{contentFooter}</div>
      )}
    </div>
  );
}

export default SectionLayout;
