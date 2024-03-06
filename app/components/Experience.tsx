import { redHatRegular } from '@/fonts';
import { person } from '../data/person';

export default function Experience() {
  const { experience } = person;

  return (
    <section className="px-6 pt-6">
      <div className="max-w-7xl m-auto">
        {experience.map((job, index) => {
          return (
            <div key={index}>
              <p className={`${redHatRegular.className} text-xxs pb-1`}>
                {job.jobTitle}, {job.period}
              </p>
              <p className="text-xs pb-6">{job.jobDescription}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
