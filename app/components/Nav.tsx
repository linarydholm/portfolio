'use client';
import { menuLinks } from '../data/data';
import { useState } from 'react';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';

export default function Nav() {
  const [activeLink, setActiveLink] = useState('Skills');

  let component;

  switch (activeLink) {
    case 'Education':
      component = <Education />;
      break;
    case 'Experience':
      component = <Experience />;
      break;
    case 'Skills':
    default:
      component = <Skills />;
      break;
  }

  return (
    <>
      <nav className="px-6 overflow-y-auto">
        <div className="max-w-7xl m-auto">
          <ul className="flex gap-6">
            {menuLinks.map((headerLink) => {
              return (
                <div className="relative group overflow-hidden" key={headerLink}>
                  <button
                    className={`flex flex-col py-[6px] text-s`}
                    key={`headerLink${headerLink}`}
                    onClick={() => setActiveLink(headerLink)}
                  >
                    {headerLink}
                  </button>
                  <span
                    className={`absolute bottom-0 h-0.5 w-0 bg-tertiary-60 ease-in-out duration-500 group-hover:w-2/3 group-hover:bg-tertiary ${
                      activeLink === headerLink ? 'bg-primary h-0.5 w-2/3' : false
                    }`}
                  />
                </div>
              );
            })}
          </ul>
        </div>
      </nav>
      {component}
    </>
  );
}
