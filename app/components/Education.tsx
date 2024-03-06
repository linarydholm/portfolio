import { redHatRegular } from '@/fonts';
import { person } from '../data/person';

export default function Education() {
  const { education } = person;

  return (
    <section className="px-6 pt-6">
      <div className="max-w-7xl m-auto">
        {education.map((school, index) => {
          return (
            <div key={index}>
              <p className={`${redHatRegular.className} text-xxs pb-1`}>
                {school.school}, {school.period}
              </p>
              <p className="text-xs pb-6">{school.program}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
