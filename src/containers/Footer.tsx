'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const socialMedias = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/santostelecom',
    icon: <FaInstagram />,
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/santostelecomofc',
    icon: <FaFacebook />,
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@santostelecom',
    icon: <FaTiktok />,
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@SantosTelecom',
    icon: <AiOutlineYoutube />,
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--green)] text-[var(--pearl)]">
      <div className="mx-auto flex flex-col-reverse xl:container xl:flex-row">
        <div className="flex w-full flex-col items-center px-5 py-12 text-center xl:w-1/2 xl:items-start xl:text-left">
          <Image
            src="/global/logo-full.png"
            alt="Logo completa da Santos Telecom"
            width={140}
            height={60}
            priority
            className="mb-5 h-auto max-w-full xl:h-[60px] xl:w-auto"
          />

          <p className="mb-2">
            &copy; {currentYear}. Todos os direitos reservados.
          </p>

          <Link
            href="/politica-de-privacidade"
            className="underline transition-colors duration-300 hover:text-white"
          >
            Política de Privacidade
          </Link>
        </div>

        <div className="flex w-full flex-col bg-[url(/global/bg-footer.png)] bg-cover bg-no-repeat px-10 py-[88px] xl:w-1/2">
          <h4 className="mb-4 text-xl">Nas redes sociais</h4>

          <div className="flex flex-wrap gap-3">
            {socialMedias.map(({ name, url, icon }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visite nosso ${name}`}
                className="flex items-center justify-center rounded-xl border border-[var(--pearl)] p-2 text-2xl transition-colors duration-300 hover:bg-[var(--pearl)] hover:text-[var(--green)]"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
