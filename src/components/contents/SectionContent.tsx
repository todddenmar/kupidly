import React from 'react';

function SectionContent({ title, content }: { title: string; content: any }) {
  return (
    <div className="flex flex-col gap-4 ">
      <h3 className="font-spacegrotesk font-bold text-[24px] leading-[32px] sm:text-[32px] sm:leading-[32px] md:text-[24px] md:leading-[32px] xl:text-[48px] xl:leading-[48px] text-primary_text">
        {title}
      </h3>
      <p className="text-sm leading-5 text-secondary_text sm:text-2xl sm:leading-8">
        {content}
      </p>
    </div>
  );
}

export default SectionContent;
