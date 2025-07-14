'use client';

import { navLinks } from '@/mocks/menuData';
import Link from 'next/link';
import { ImWhatsapp } from 'react-icons/im';
import { Button } from './Button';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen w-full bg-[var(--green)] px-4 pt-[88px] transition-all duration-300 ease-in-out xl:hidden ${
        open
          ? 'pointer-events-auto scale-100 opacity-100'
          : 'pointer-events-none scale-95 opacity-0'
      }`}
    >
      <nav className="container mx-auto flex flex-col items-end gap-8 py-6">
        {navLinks.map(({ key, label }) => (
          <Link
            key={key}
            href={`/#${key}`}
            onClick={onClose}
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
    </aside>
  );
};
