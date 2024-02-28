import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

export default function HomePage() {
  return (
    <main className="py-4 px-4 md:py-6 md:px-12">
      <div className="max-w-7xl m-auto">
        <Experience />
        <Education />
        <Skills />
      </div>
    </main>
  );
}
