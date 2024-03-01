'use client';
import Skills from './pageComponents/Skills';
import Experience from './pageComponents/Experience';
import Education from './pageComponents/Education';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';

export default function HomePage() {
  const [selectedLink, setSelectedLink] = useState('skills');
  const [activeComponent, setActiveComponent] = useState(<Skills />);
  const [myClass, setMyClass] = useState('');

  const setNewSelectedLink = (newSelectedLink: string) => {
    setSelectedLink(newSelectedLink);
  };

  const setClass = (newClass: string) => {
    setMyClass(newClass);
  };

  useEffect(() => {
    if (selectedLink === 'skills') {
      setActiveComponent(<Skills />);
    } else if (selectedLink === 'experience') {
      setActiveComponent(<Experience />);
    } else if (selectedLink === 'education') {
      setActiveComponent(<Education />);
    }
  }, [selectedLink]);

  return (
    <main className="py-4 md:py-6">
      <div className="max-w-7xl m-auto">
        <Nav myClass={myClass} setNewSelectedLink={setNewSelectedLink} />
        {activeComponent}
      </div>
    </main>
  );
}
