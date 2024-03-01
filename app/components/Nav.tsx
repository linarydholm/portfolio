'use client';
import Link from 'next/link';
import { menuLinks } from '../__data__/data';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <nav className="py-4 px-4 md:py-6 md:px-12">
      <div className="max-w-7xl m-auto">
        <div className="flex gap-3">
          {menuLinks.map((headerLink, index) => {
            const link = headerLink.toLowerCase();
            return (
              <Link className="p-1" key={`headerLink${index}`} href={link !== 'about' ? link : '/'}>
                {/* headerLink === currentPath */}
                {headerLink}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
