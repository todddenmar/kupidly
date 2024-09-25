import { cn } from '@/app/lib/utils';
import React from 'react';

function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-full max-w-[1200px] mx-auto md:blur-[150px] h-[40px] opacity-50 blur-[50px] section-divider',
        className
      )}
    ></div>
  );
}

export default SectionDivider;
