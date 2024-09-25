import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="h-[72px] w-full p-4">
      <div className="flex items-center justify-between text-[12px] leading-[16px] text-secondary_text">
        <div className="flex-1">
          <div>© 2024 Kupidly</div>
          <div>
            <Link className="underline" href="mailTo:support@kupidly.com">
              support@kupidly.com
            </Link>
          </div>
        </div>
        <ul className="flex flex-1">
          <li className="px-4">
            <Link className="underline" href={'#'}>
              Terms and Conditions
            </Link>
          </li>
          <li className="px-4">
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
