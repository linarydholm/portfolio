'use client';
import { menuLinks } from '../__data__/data';
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
      <nav className="px-6">
        <div className="max-w-7xl m-auto">
          <ul className="flex gap-6">
            {menuLinks.map((headerLink) => {
              let myClass = 'border-transparent';

              if (activeLink === headerLink) {
                myClass = 'border-purple-500';
              }

              return (
                <button
                  className={`py-1 border-b-2 text-s ${myClass}`}
                  key={`headerLink${headerLink}`}
                  onClick={() => setActiveLink(headerLink)}
                >
                  {headerLink}
                </button>
              );
            })}
          </ul>
        </div>
      </nav>
      {component}
    </>
  );
}
