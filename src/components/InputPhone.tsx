'use client';

import { formatPhone } from '@/helpers/formatPhone';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  error?: string;
  disabled?: boolean;
}

export const InputPhone: React.FC<Props> = ({
  label,
  name,
  error,
  disabled,
}) => {
  const { control } = useFormContext();
  const [maskedValue, setMaskedValue] = useState('');

  return (
    <div className="grid gap-1">
      <label
        htmlFor={name}
        className={`block font-medium ${error ? 'text-red-500' : 'text-[var(--pearl)]'}`}
      >
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type="tel"
            inputMode="numeric"
            className={`w-full rounded border-[1px] border-[var(--gray)] bg-white p-3 disabled:opacity-80 ${
              error ? 'border-red-500' : ''
            }`}
            value={maskedValue}
            onChange={e => {
              const raw = e.target.value;
              const masked = formatPhone(raw);
              setMaskedValue(masked);
              field.onChange(masked);
            }}
            disabled={disabled}
          />
        )}
      />

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
