import React from 'react';
import AIIcon from '../icons/AIIcon';

function BeginButton() {
  return (
    <div className="relative">
      <button className="primary-button-bg begin_button h-[56px] w-fit px-[44px] py-4 rounded-full font-spacegrotesk text-[18px] leading-[24px] flex items-center gap-2 relative z-20">
        Begin <AIIcon />
      </button>
    </div>
  );
}

export default BeginButton;
