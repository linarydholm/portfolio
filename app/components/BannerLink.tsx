'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function BannerLink() {
  const [bannerLink, setBannerLink] = useState('Work');
  const [otherPath, setOtherPath] = useState('');
  const pathname = usePathname().toLowerCase();

  useEffect(() => {
    setBannerLink(pathname === '/' ? 'Work' : 'Home');
    setOtherPath(pathname === '/' ? 'work' : '/');
  }, [pathname]);

  return (
    <Link
      className="text-xxs h-8 w-20 flex items-center justify-center bg-primary rounded"
      href={otherPath}
    >
      {bannerLink}
    </Link>
  );
}
