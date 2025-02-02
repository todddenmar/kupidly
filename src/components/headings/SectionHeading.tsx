import { cn } from '@/app/lib/utils';
import React from 'react';

function SectionHeading({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        'font-bold text-[30px] leading-[36px] md:text-[48px] text-center font-spacegrotesk heading_gradient ',
        className
      )}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
