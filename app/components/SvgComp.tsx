import { forwardRef } from 'react'; // read about forwardRef (for animations?)
import type { SvgCompProps } from '../types/SvgComp.types';

export const SvgComp = forwardRef<SVGSVGElement, SvgCompProps>(function SvgComp(props, ref) {
  const { children, titleAccess, viewBox = '0 0 24 24', ...other } = props;

  return (
    <svg
      aria-hidden={titleAccess ? undefined : true}
      focusable="false"
      ref={ref}
      role={titleAccess ? 'img' : undefined}
      viewBox={viewBox}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </svg>
  );
});
