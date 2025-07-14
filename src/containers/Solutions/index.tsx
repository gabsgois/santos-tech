'use client';

import { Button } from '@/components/Button';
import { CardSolutions } from '@/components/CardSolutions';
import { solutionsData } from '@/mocks/solutionsData';
import Image from 'next/image';
import React from 'react';
import { ImWhatsapp } from 'react-icons/im';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './solutions.css';

export const Solutions: React.FC = () => {
  return (
    <section
      id="solutions"
      className="bg-[image:url(/solutions/bg-solutions.svg)] bg-cover"
    >
      <div className="relative container mx-auto px-4 pt-28 xl:pt-[72px]">
        <Image
          src="/solutions/icon-solutions.svg"
          alt="Ícone soluções"
          width={108}
          height={108}
          className="absolute top-6 right-5 xl:top-10 xl:right-4"
        />

        <p className="mb-2 uppercase">Soluções</p>

        <h2 className="mb-6 text-4xl xl:mb-12">
          Protegemos e facilitamos o que importa
        </h2>
      </div>

      <div className="container mx-auto pl-4">
        <div className="swiper-solutions block xl:hidden">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView="auto"
            scrollbar={{ draggable: true }}
          >
            {solutionsData.map((solution, index) => (
              <SwiperSlide key={index}>
                <CardSolutions
                  key={index}
                  image={solution.img}
                  description={solution.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="container hidden flex-wrap justify-between gap-8 px-4 xl:flex 2xl:justify-around 2xl:gap-9">
          {solutionsData.map((solution, index) => (
            <CardSolutions
              key={index}
              image={solution.img}
              description={solution.description}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center pb-14 xl:mt-12 xl:pb-[72px]">
        <Button
          href="https://api.whatsapp.com/send?phone=5513981720623&text=Ol%C3%A1,%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
          target="_blank"
          rel="noopener noreferrer"
          label="Solicite um orçamento"
          endIcon={<ImWhatsapp className="text-lg" />}
          variant="contained"
        />
      </div>
    </section>
  );
};
