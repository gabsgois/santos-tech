'use client';

import { DesktopMenu } from '@/components/DesktopMenu';
import { MobileMenu } from '@/components/MobileMenu';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { FiX } from 'react-icons/fi';

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openMenu]);

  return (
    <>
      <header
        id="header"
        className={`absolute top-0 z-50 h-[88px] w-full ${isHomePage ? 'bg-transparent' : 'bg-[var(--green)]'}`}
      >
        <div className="container mx-auto flex items-center justify-between gap-10 px-4 py-4">
          <Link href="/" aria-label="Página inicial">
            <Image
              src="/global/logo.png"
              alt="Logo da Santos Telecom"
              width={140}
              height={56}
              priority
              className="h-auto max-h-14 w-auto"
            />
          </Link>

          <DesktopMenu />

          <button
            onClick={() => setOpenMenu(prev => !prev)}
            aria-label={openMenu ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={openMenu}
            className="text-3xl text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white xl:hidden"
          >
            {openMenu ? <FiX /> : <CgMenuRightAlt />}
          </button>
        </div>
      </header>

      <MobileMenu open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
};
