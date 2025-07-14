'use client';

import { CardProjects } from '@/components/CardProjects';
import { projectsData } from '@/mocks/projectsData';
import Image from 'next/image';
import React from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './projetcs.css';

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="overflow-hidden bg-[var(--green)] py-14 text-[var(--pearl)] xl:py-[72px]"
    >
      <div className="relative container mx-auto px-4">
        <Image
          src="/projects/icon-projects.svg"
          alt="Ícone projetos"
          width={420}
          height={280}
          className="absolute -top-8 -right-[280px] lg:right-4 xl:-top-[72px]"
        />

        <p className="mb-2 uppercase">projetos</p>

        <h2 className="relative mb-6 max-w-[480px] text-4xl xl:mb-12">
          Conheça alguns dos projetos que já realizamos
        </h2>
      </div>

      <div className="swiper-projects swiper-projects-container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={8}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 'auto',
            },
          }}
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <CardProjects
                key={index}
                title={project.title}
                description={project.description}
                images={project.images}
                videos={project.videos}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
