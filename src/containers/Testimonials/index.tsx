'use client';

import { CardTestimonials } from '@/components/CardTestimonials';
import { testimonialsData } from '@/mocks/testimonialsData';
import Link from 'next/link';
import React from 'react';
import { ImWhatsapp } from 'react-icons/im';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './testimonials.css';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[var(--pearl)] pt-14 xl:py-[72px]">
      <div className="container mx-auto px-4">
        <p className="mb-2 uppercase">depoimentos</p>

        <h2 className="mb-6 text-4xl xl:mb-12">
          O que os nossos clientes falam sobre nós
        </h2>
      </div>

      <div className="swiper-testimonials swiper-testimonials-container mx-auto px-4">
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
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 'auto',
            },
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <CardTestimonials
                key={index}
                image={testimonial.img}
                message={testimonial.message}
                author={testimonial.author}
                company={testimonial.company}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-10 flex justify-center xl:mt-12">
        <Link
          href="https://api.whatsapp.com/send?phone=5513981720623&text=Ol%C3%A1,%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex max-w-full items-center justify-center gap-3 rounded-[50px] bg-[var(--green)] px-8 py-3 font-medium text-white transition-colors duration-300 ease-in-out hover:bg-[var(--green-light)] hover:text-[var(--green)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:max-w-96"
        >
          Seja um cliente Santos Telecom
          <ImWhatsapp className="text-lg" />
        </Link>
      </div>
    </section>
  );
};
