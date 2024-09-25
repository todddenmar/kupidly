import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="h-[72px] sm:h-[55px] w-full p-4">
      <div className="flex items-center justify-between sm:gap-[29px] text-[12px] leading-[16px] text-secondary_text w-full max-w-[1200px] mx-auto">
        <div className="flex-1 sm:flex sm:justify-between sm:items-center">
          <div>© 2024 Kupidly</div>
          <div>
            <Link className="underline" href="mailTo:support@kupidly.com">
              support@kupidly.com
            </Link>
          </div>
        </div>
        <ul className="flex flex-1 sm:flex-none sm:gap-[29px]">
          <li className="px-4 sm:px-0">
            <Link className="underline" href={'#'}>
              Terms and Conditions
            </Link>
          </li>
          <li className="px-4 sm:px-0">
            <Link className="underline" href={'#'}>
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
