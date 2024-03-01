import Image from 'next/image';
import { person } from '../__data__/person';

export function Header() {
  const { personal } = person;

  return (
    <header className="py-4 md:py-12">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 max-w-7xl m-auto">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-3 justify-center items-center">
          <p>
            {personal.firstName} {personal.lastName}
          </p>
          <p>{personal.jobTitle}</p>
        </div>
        <div className="col-span-1">
          <div className="flex justify-center items-center aspect-square bg-yellow-100 overflow-hidden border-0 rounded-full">
            <Image
              src="/aiony-haust-3TLl_97HNJo-unsplash.jpg"
              width={1200}
              height={1200}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
