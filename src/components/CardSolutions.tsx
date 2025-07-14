import Image from 'next/image';
import React from 'react';

interface Props {
  image: string;
  description?: string;
}

export const CardSolutions: React.FC<Props> = ({ image, description }) => {
  return (
    <div className="group h-[390px] w-[270px] rounded-3xl bg-[var(--background-gray)] p-2.5 shadow-lg">
      <div className="relative flex h-full items-end overflow-hidden rounded-3xl p-4">
        <Image
          src={image}
          alt="Ícone soluções"
          width={250}
          height={370}
          className="absolute top-0 left-0 z-0 rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-110"
          priority
        />

        <p className="z-10 max-w-[160px] text-white">{description}</p>
      </div>
    </div>
  );
};
