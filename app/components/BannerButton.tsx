import { redHatRegular } from '@/styles/fonts/fonts';

export function BannerButton() {
  return (
    <button
      className={`${redHatRegular.className} text-xxs h-8 w-20 flex items-center justify-center rounded bg-tertiary-60 text-dark-bg hover:bg-tertiary duration-300 ease-in-out`}
    >
      Contact
    </button>
  );
}
