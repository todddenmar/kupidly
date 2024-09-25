import React from 'react';
import SectionHeading from '../headings/SectionHeading';
import SectionContent from '../contents/SectionContent';
import { cn } from '@/app/lib/utils';

function SectionLayout({
  sectionTitle,
  contentTitle,
  content,
  contentImage,
  contentFooter,
  className,
  maxWidth,
}: {
  sectionTitle?: string;
  contentTitle: any;
  content: any;
  contentImage: any;
  contentFooter?: any;
  className?: string;
  maxWidth?: number;
}) {
  return (
    <div className="max-w-[1200px] mx-auto">
      {sectionTitle && (
        <div className="px-[24px] py-4 md:pb-[50px]">
          <SectionHeading>{sectionTitle}</SectionHeading>
        </div>
      )}
      <div
        className={cn(
          'px-6 py-2 flex flex-col md:flex-row  md:items-center gap-[32px] lg:gap-0 ',
          className
        )}
      >
        <div className="md:flex-1">{contentImage}</div>
        <div className={`md:order-first md:flex-1 `}>
          <div style={{ maxWidth: maxWidth }}>
            <SectionContent title={contentTitle} content={content} />
          </div>
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
