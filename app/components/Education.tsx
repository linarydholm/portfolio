import { person } from '../__data__/person';

export default function Education() {
  const { education } = person;

  return (
    <section className="px-6 pt-6">
      <div className="max-w-7xl m-auto">
        {education.map((school) => {
          return (
            <>
              <p className="text-xxs pb-1">
                {school.school}, {school.period}
              </p>
              <p className="text-xs pb-6">{school.program}</p>
            </>
          );
        })}
      </div>
    </section>
  );
}
