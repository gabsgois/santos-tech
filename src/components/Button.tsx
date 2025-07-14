import Link, { LinkProps } from 'next/link';
import React from 'react';

interface Props extends LinkProps, React.HTMLAttributes<HTMLAnchorElement> {
  label: string;
  endIcon?: React.ReactNode;
  target?: string;
  rel?: string;
  variant?: 'outlined' | 'contained';
}

export const Button: React.FC<Props> = ({
  label,
  endIcon,
  variant = 'outlined',
  ...props
}) => {
  const variantStyles =
    variant === 'contained'
      ? 'hover:bg-[var(--green-light)] text-white bg-[var(--green)] hover:text-[var(--green)]'
      : 'border border-[var(--green-light)] hover:bg-[var(--green-light)] hover:text-[var(--green)] text-[var(--green-light)]';

  return (
    <Link
      className={`flex max-w-full items-center justify-center gap-3 rounded-[50px] px-8 py-3 font-medium transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:max-w-[282px] ${variantStyles}`}
      {...props}
    >
      <span className="font-[var(--text-nav)]">{label}</span>

      {endIcon && <span className="text-lg">{endIcon}</span>}
    </Link>
  );
};
