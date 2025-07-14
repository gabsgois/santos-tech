import Image from 'next/image';
import React from 'react';

interface Props {
  image: string;
  message: string;
  author: string;
  company: string;
}

export const CardTestimonials: React.FC<Props> = ({
  image,
  message,
  author,
  company,
}) => {
  return (
    <div className="group w-full rounded-3xl border-[1px] border-[#00000014] bg-[var(--pearl)] p-2.5 text-[var(--green)] shadow-lg sm:max-w-80 md:w-[370px]">
      <div className="relative mb-4 max-h-[230px] overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt="Ícone soluções"
          width={350}
          height={230}
          className="w-full rounded-2xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          priority
        />
      </div>

      <p className="mb-4">{message}</p>

      <h5 className="text-xl font-semibold">{author}</h5>
      <p className="mb-6 font-medium italic">{company}</p>
    </div>
  );
};
