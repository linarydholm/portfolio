import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <section className="py-4 px-4 md:py-12 md:px-12">
      <header className="grid gap-4 grid-cols-2 md:grid-cols-3 max-w-7xl m-auto">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-3 justify-center items-center">
          <h1>Lina Rydholm</h1>
          <h2>Frontend Utvecklare</h2>
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
      </header>
    </section>
  );
}
