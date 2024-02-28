import Link from 'next/link';

export default function Menu() {
  // mockdata
  const menuLinks = ['Experience link', 'Education link', 'Skills link'];

  return (
    <main className="py-4 px-4 md:py-6 md:px-12">
      <div className="max-w-7xl m-auto">
        <div className="flex gap-3">
          {menuLinks.map((headerLink, index) => {
            return (
              <Link className="p-1" key={`headerLink${index}`} href="/">
                {headerLink}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
