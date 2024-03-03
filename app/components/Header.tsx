import Image from 'next/image';
import { person } from '../data/person';

export function Header() {
  const { personal } = person;

  return (
    <header className="px-6 py-12">
      <div className="flex max-w-7xl m-auto w-full relative justify-between">
        {/* centers div in parent div: absolute left-0 -translate-y-1/2 top-1/2 */}
        <div className="flex flex-col justify-center items-start absolute left-0 -translate-y-1/2 top-1/2">
          <p className="text-xs pb-1">
            {personal.firstName} {personal.lastName}
          </p>

          <p className="text-l pl-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {personal.jobTitle}
          </p>
        </div>
        <div></div>
        <div className="w-1/2 flex justify-center items-center aspect-square overflow-hidden border-2 border-tertiary-20 rounded-full">
          <Image
            src="/aiony-haust-3TLl_97HNJo-unsplash.jpg"
            width={640}
            height={640}
            alt="Picture of the author"
          />
        </div>
      </div>
    </header>
  );
}
