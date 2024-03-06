import { redHatRegular } from '@/fonts';
import { person } from '../data/person';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

export default function Skills() {
  const { skills } = person;

  const joinArrWithComma = (categoryArr: string[]): string => {
    return categoryArr.join(' \u2022 ');
  };

  return (
    <section className="px-6 pt-6">
      <div className="max-w-7xl m-auto">
        {Object.entries(skills).map(([keyName, categoryArr]) => {
          return (
            <div className="pb-6" key={keyName}>
              <p className={`${redHatRegular.className} text-xxs pb-1`}>
                {capitalizeFirstLetter(keyName)}
              </p>
              <p className="text-xs">{joinArrWithComma(categoryArr)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
