import { person } from '../__data__/person';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

export default function Skills() {
  const { skills } = person;

  const joinArrWithComma = (categoryArr: string[]): string => {
    return categoryArr.join(', ');
  };

  return (
    <section className="px-6 pt-6">
      <div className="max-w-7xl m-auto">
        {Object.entries(skills).map(([keyName, categoryArr]) => {
          return (
            <div className="pb-4" key={keyName}>
              <p className="text-xxs pb-1">{capitalizeFirstLetter(keyName)}</p>
              <p className="text-xs">{joinArrWithComma(categoryArr)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
