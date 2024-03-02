import { GitHubIcon } from './svg/GitHubIcon';
import { FillLinkedinIcon } from './svg/FillLinkedinIcon';
import Link from 'next/link';
import { BannerLink } from './BannerLink';

export function Banner() {
  return (
    <section className="px-6 py-6">
      <div className="flex gap-4 justify-between items-center max-w-7xl m-auto">
        {/* make next row a component (work / back to homepage) */}
        <BannerLink />
        <div className="mx-auto"></div>
        <Link href="https://github.com/linarydholm" target="_blank">
          <GitHubIcon
            className="w-8 h-8 fill-primary-dark duration-300 ease-in-out hover:fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/lina-rydholm-6169b823b/" target="_blank">
          <FillLinkedinIcon
            className="w-8 h-8 fill-primary-dark duration-300 ease-in-out hover:fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          />
        </Link>
      </div>
    </section>
  );
}
