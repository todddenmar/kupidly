import React from 'react';
import AIIcon from '../icons/AIIcon';

function BeginButton() {
  return (
    <div className="relative">
      <button className="primary-button-bg h-[56px] w-fit px-[44px] py-4 rounded-full font-spacegrotesk text-[18px] flex items-center gap-2 relative z-20">
        Begin <AIIcon />
      </button>
      <div className="w-full h-[56px] opacity-90 light-blur blur-xl absolute z-10 top-[20px] scale-[0.8]"></div>
    </div>
  );
}

export default BeginButton;
