'use client';

import { Input } from '@/components/Input';
import { InputPhone } from '@/components/InputPhone';
import { Select } from '@/components/Select';
import { Textarea } from '@/components/Textarea';
import { solutionsData } from '@/mocks/solutionsData';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { validationSchema } from './validationSchema';

interface FormProps {
  contactMethod: string;
  name: string;
  phone: string;
  email: string;
  message?: string;
}

export const FormContact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const methods = useForm<FormProps>({
    resolver: yupResolver(validationSchema),
  });

  const {
    handleSubmit,
    reset: resetForm,
    formState: { errors },
    getValues,
  } = methods;

  const handleOnSubmit: SubmitHandler<FormProps> = (values: FormProps) => {
    setLoading(true);
    console.log('Form data submitted:', values);

    const params = {
      contactMethod: values.contactMethod,
      name: values.name,
      phone: values.phone,
      email: values.email,
      message: values.message || '',
    };

    emailjs
      .send('service_oftpvy8', 'template_0wu8r0t', params, 'bbOguvrxVZpAhwCEw')
      .then(() => {
        toast.success(
          <>
            Olá {getValues().name} 👋! <br />
            <br />
            Em breve nossa equipe entrará em contato com você.
          </>,
          {
            position: 'bottom-center',
            duration: 8000,
          },
        );

        resetForm();
      })
      .catch(() => {
        toast.error(
          <>
            Ops, não recebemos sua mensagem.
            <br />
            <br />
            Por favor, tente novamente mais tarde ou entre em contato pelo
            WhatsApp.
          </>,
          {
            position: 'bottom-center',
            duration: 8000,
          },
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className="grid gap-4">
          <Select
            label="Como podemos te ajudar?"
            name="contactMethod"
            options={solutionsData.map(solution => ({
              value: solution.description,
              label: solution.description,
            }))}
            error={errors.contactMethod?.message}
            disabled={loading}
          />

          <Input
            name="name"
            label="Informe o seu nome"
            error={errors.name?.message}
            disabled={loading}
          />

          <InputPhone
            name="phone"
            label="Um telefone para contato"
            error={errors.phone?.message}
            disabled={loading}
          />

          <Input
            name="email"
            label="E o seu e-mail"
            error={errors.email?.message}
            disabled={loading}
          />

          <Textarea
            name="message"
            label="Mensagem (opcional)"
            disabled={loading}
          />

          <button
            type="submit"
            className="flex max-w-full items-center justify-center gap-3 rounded-[50px] border border-[var(--green-light)] px-8 py-3 font-medium text-[var(--green-light)] transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white enabled:hover:bg-[var(--green-light)] enabled:hover:text-[var(--green)] disabled:opacity-80 sm:max-w-[282px]"
            disabled={loading}
          >
            Solicitar contato
          </button>
        </form>
      </FormProvider>

      <Toaster />
    </>
  );
};
