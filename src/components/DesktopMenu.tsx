'use client';

import { navLinks } from '@/mocks/menuData';
import Link from 'next/link';
import { ImWhatsapp } from 'react-icons/im';
import { Button } from './Button';

export const DesktopMenu = () => (
  <nav className="hidden items-center gap-8 xl:flex">
    {navLinks.map(({ key, label }) => (
      <Link
        key={key}
        href={`/#${key}`}
        className="font-[var(--text-nav)] text-white transition-colors duration-300 hover:text-[var(--green-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {label}
      </Link>
    ))}

    <Button
      href="https://api.whatsapp.com/send?phone=5513981720623&text=Ol%C3%A1,%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
      target="_blank"
      rel="noopener noreferrer"
      label="Fale conosco"
      endIcon={<ImWhatsapp className="text-lg" />}
    />
  </nav>
);
