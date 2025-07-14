'use client';

import { partnersData } from '@/mocks/partnersData';
import Image from 'next/image';
import React from 'react';
import 'swiper/css';
import './partners.css';

export const Partners: React.FC = () => {
  return (
    <section
      id="partners"
      className="bg-[var(--pearl)] pt-16 pb-14 xl:py-[72px]"
    >
      <div className="container mx-auto mb-6 px-4 xl:mb-12">
        <p className="mb-2 uppercase">parceiros</p>

        <h2 className="text-4xl">Empresas que trabalhamos em colaboração</h2>
      </div>

      <div className="scroller">
        <div className="scroller-content">
          {Array.from({ length: 3 }).map(() =>
            partnersData.map((partner, index) => (
              <div key={index} className="scroller-item">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={100}
                  className="max-h-24 w-auto"
                />
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
};
