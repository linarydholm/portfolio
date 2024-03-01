import { menuLinks } from '../__data__/data';
import { NavProps } from '../types/Nav.types';

export default function Nav(props: NavProps) {
  const { setNewSelectedLink, myClass } = props;

  return (
    <nav className="py-4 md:py-6">
      <div className="max-w-7xl m-auto">
        <ul className="flex gap-3">
          {menuLinks.map((headerLink, index) => {
            const link = headerLink.toLowerCase();

            return (
              <button
                className={myClass}
                key={`${link}${index}`}
                name={link}
                onClick={() => setNewSelectedLink(link)}
              >
                {headerLink}
              </button>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
