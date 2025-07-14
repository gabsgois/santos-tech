'use client';

import React from 'react';
import { FaWaze } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import { FormContact } from './FormContact';

export const Contacts: React.FC = () => {
  return (
    <section className="bg-[var(--green)] py-[72px]">
      <div className="container mx-auto flex flex-wrap px-4">
        <div className="mb-12 w-full xl:mb-0 xl:w-1/2">
          <p className="mb-2 text-[var(--pearl)] uppercase">contato</p>

          <h2 className="mb-4 text-4xl font-normal text-[var(--pearl)] xl:text-[42px]">
            Entre em contato
          </h2>

          <FormContact />
        </div>

        <div className="flex w-full flex-col gap-12 xl:w-1/2 xl:items-center xl:justify-center xl:gap-14">
          <div className="w-md max-w-full">
            <h3 className="mb-2 text-3xl font-semibold text-[var(--pearl)]">
              WhatsApp
            </h3>

            <p className="mb-4 font-medium text-[var(--gray)]">
              Caso prefira, chame nossa equipe no WhatsApp.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=5513981720623&text=Ol%C3%A1,%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-[50px] border border-white px-8 py-3 font-medium text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-[var(--green)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="font-[var(--text-nav)]">Converse agora</span>

              <ImWhatsapp className="text-lg" />
            </a>
          </div>

          <div className="w-md max-w-full">
            <h3 className="mb-2 text-3xl font-semibold text-[var(--pearl)]">
              Localização
            </h3>

            <p className="font-medium text-[var(--gray)]">
              Estamos localizados em Santos - SP.
            </p>

            <p className="mb-4 font-medium text-white">
              Av. Washington Luís, 224/226, Loja 01 - Encruzilhada
              <br />
              CEP: 11050-000
            </p>

            <a
              href="https://maps.app.goo.gl/tefaUy4CaXpNR5Xj9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-[50px] border border-white px-8 py-3 font-medium text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-[var(--green)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="font-[var(--text-nav)]">Como chegar</span>

              <FaWaze className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
