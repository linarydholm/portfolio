// 'use client';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation';

export function BannerButton() {
  // const [bannerLink, setBannerLink] = useState('Contact');
  // const [otherPath, setOtherPath] = useState('');
  // const pathname = usePathname().toLowerCase();

  // useEffect(() => {
  //   setBannerLink(pathname === '/' ? 'Work' : 'Home');
  //   setOtherPath(pathname === '/' ? 'work' : '/');
  // }, [pathname]);

  return (
    <button className="text-xxs h-8 w-20 flex items-center justify-center rounded bg-tertiary-60 text-dark-bg hover:bg-tertiary duration-300 ease-in-out">
      Contact
    </button>
  );
}
