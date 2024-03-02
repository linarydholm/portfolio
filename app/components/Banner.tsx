import { GitHubIcon } from '@/public/svg/GitHubIcon';
import { FillLinkedinIcon } from '@/public/svg/FillLinkedinIcon';

export function Banner() {
  return (
    <section className="px-6 py-6">
      <div className="flex gap-4 justify-between items-center max-w-7xl m-auto">
        <p>Work</p>
        <div className="mx-auto"></div>
        <GitHubIcon
          className="w-8 h-8 text-white fill-purple-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        />
        <FillLinkedinIcon
          className="w-8 h-8 text-white fill-purple-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        />
      </div>
    </section>
  );
}
