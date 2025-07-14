import React from 'react';
import { ImWhatsapp } from 'react-icons/im';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5513981720623&text=Ol%C3%A1,%20acessei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-[34px] bottom-[34px] z-50 flex h-11 w-11 items-center justify-center rounded-full border-[1px] border-[#41E35E] text-2xl text-[#41E35E] transition-all before:fixed before:right-6 before:bottom-6 before:h-16 before:w-16 before:rounded-full before:border-[1px] before:border-[#41e35f33] before:transition-all before:content-[''] hover:right-6 hover:bottom-6 hover:h-16 hover:w-16 hover:bg-[#41E35E] hover:text-3xl hover:text-white"
    >
      <ImWhatsapp />
    </a>
  );
};
