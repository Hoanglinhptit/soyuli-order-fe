import { cx } from '../../utils';

/* eslint-disable react/require-default-props */
type Props = {
  href: string;
  className?: string;
  children?: React.ReactNode;
};

export default function HeaderLink({
  href,
  className = '',
  children = null,
}: Props) {
  return (
    <a
      href={href}
      className={cx(
        'no-underline text-[#000] hover:text-[#E7B5A3] text-[1.3rem]',
        className
      )}
    >
      {children}
    </a>
  );
}
