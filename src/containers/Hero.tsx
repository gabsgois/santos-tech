import { Button } from '@/components/Button';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

export const Hero: React.FC = () => {
  return (
    <div className="h-screen bg-[image:url(/hero/bg-hero-mobile.png)] bg-cover bg-left-bottom xl:flex xl:items-center xl:bg-[image:url(/hero/bg-hero.png)] xl:bg-right-top">
      <div className="container mx-auto px-4 pt-36 xl:pt-0">
        <p className="mb-2 text-white uppercase">Santos Telecom</p>

        <h4 className="mb-4 max-w-[646px] text-[40px] text-white xl:mb-10 xl:text-5xl">
          A segurança e conforto do seu patrimônio agora tem nome
        </h4>

        <Button href="/#solutions" label="Conheça nossas soluções" />
      </div>

      <div className="absolute bottom-12 left-1/2 container hidden h-20 w-full -translate-x-1/2 items-center justify-center bg-[image:url(/hero/dots.png)] bg-contain bg-center bg-no-repeat sm:flex">
        <a
          href="#solutions"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border-[1px] border-white text-2xl text-white transition-all before:absolute before:h-20 before:w-20 before:rounded-full before:border-[1px] before:border-[#fff3] before:transition-all before:content-[''] hover:h-20 hover:w-20 hover:bg-white hover:text-4xl hover:text-[var(--green)]"
        >
          <FiChevronDown />
        </a>
      </div>
    </div>
  );
};
