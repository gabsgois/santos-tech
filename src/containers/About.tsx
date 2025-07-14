import { Button } from '@/components/Button';
import Image from 'next/image';
import React from 'react';
import { ImWhatsapp } from 'react-icons/im';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[var(--green)] py-14 text-[var(--pearl)] xl:py-[72px]"
    >
      <div className="relative container mx-auto px-4">
        <Image
          src="/about/icon-about.svg"
          alt="Ícone sobre a Santos Telecom"
          width={112}
          height={92}
          className="absolute -top-8 right-5 xl:top-0 xl:right-4"
        />

        <p className="mb-2 uppercase">sobre</p>

        <h2 className="mb-6 text-4xl font-normal xl:mb-12 xl:text-[42px]">
          Eficiência e profissionalismo.
          <br /> Confie na experiência da Santos Telecom
        </h2>

        <div className="flex flex-wrap gap-6 lg:flex-nowrap lg:gap-8">
          {/* CARD 01 */}
          <div className="shrink rounded-3xl border-[1px] border-[#22362828] shadow-xl">
            <div className="px-4 pt-4 xl:px-6 xl:pt-6">
              <label className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--green-dark)] text-2xl xl:mb-6">
                1
              </label>

              <h3 className="mb-2 text-xl font-semibold xl:text-3xl">
                Atuamos desde 2014
              </h3>

              <p className="font-medium text-[var(--gray)]">
                Há mais de 10 anos implementamos soluções em casas, condomínios e
                empresas na baixada santista, São Paulo e região.
              </p>
            </div>

            <Image
              src="/about/card-about-1.svg"
              alt="Imagem Atuamos desde 2019"
              height={140}
              width={470}
              className="mt-8 mb-10 h-auto w-full xl:mt-14"
            />
          </div>

          {/* CARD 02 */}
          <div className="shrink rounded-3xl border-[1px] border-[#22362828] shadow-xl">
            <div className="px-4 pt-4 xl:px-6 xl:pt-6">
              <label className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--green-dark)] text-2xl xl:mb-6">
                2
              </label>

              <h3 className="mb-2 text-xl font-semibold xl:text-3xl">
                Utilizamos tecnologia de ponta
              </h3>

              <p className="font-medium text-[var(--gray)]">
                Em todos os nossos serviços você pode contar com soluções
                modernas e no padrão adequado para as suas demandas.
              </p>
            </div>

            <Image
              src="/about/card-about-2.svg"
              alt="Imagem Utilizamos tecnologia de ponta"
              height={234}
              width={470}
              className="mt-9 h-auto w-full"
            />
          </div>
        </div>

        {/* CARD 03 */}
        <div className="mt-8 flex w-full flex-col rounded-3xl border-[1px] border-[#22362828] shadow-xl lg:flex-row">
          <div className="px-4 pt-4 lg:max-w-1/4 xl:px-6 xl:pt-6 2xl:max-w-1/3">
            <label className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--green-dark)] text-2xl xl:mb-6">
              3
            </label>

            <h3 className="mb-2 text-xl font-semibold xl:text-3xl">
              Já entregamos mais de 100 projetos
            </h3>

            <p className="mb-4 font-medium text-[var(--gray)]">
              Excelência. Com as soluções Santos Telecom você tem a qualidade e
              agilidade que precisa.
            </p>

            <div className="hidden lg:block">
              <Button
                href="https://api.whatsapp.com/send?phone=5513981720623&text=Ol%C3%A1,%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
                target="_blank"
                rel="noopener noreferrer"
                label="Solicite um orçamento"
                endIcon={<ImWhatsapp className="text-lg" />}
              />
            </div>
          </div>

          <Image
            src="/about/card-about-3-mobile.svg"
            alt="Imagem Já entregamos mais de 100 projetos"
            height={470}
            width={335}
            className="mb-6 h-auto w-full lg:hidden"
          />

          <div className="mx-4 mb-8 lg:hidden">
            <Button
              href="https://api.whatsapp.com/send?phone=5513981720623&text=Ol%C3%A1,%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
              target="_blank"
              rel="noopener noreferrer"
              label="Solicite um orçamento"
              endIcon={<ImWhatsapp className="text-lg" />}
            />
          </div>

          <Image
            src="/about/card-about-3.svg"
            alt="Imagem Já entregamos mais de 100 projetos"
            height={470}
            width={570}
            className="mx-auto hidden h-full w-auto lg:block"
          />
        </div>
      </div>
    </section>
  );
};
