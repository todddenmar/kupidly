import { cn } from '@/app/lib/utils';
import React from 'react';

function HeroHeading({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        'font-bold text-[30px] leading-[36px] md:text-[60px] md:leading-[60px] text-center font-spacegrotesk heading_gradient',
        className
      )}
    >
      {children}
    </h1>
  );
}

export default HeroHeading;
