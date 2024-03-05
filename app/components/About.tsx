import { person } from '../data/person';

export default function About() {
  const { aboutMe, hello } = person.personal;
  return (
    <section className="px-6 mt-6 mb-24">
      <div className="max-w-7xl m-auto">
        <p className="text-l pb-1">{hello}</p>
        <p className="text-xs pl-6">{aboutMe}</p>
      </div>
    </section>
  );
}
