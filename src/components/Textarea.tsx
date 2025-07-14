import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  error?: string;
  disabled?: boolean;
}

export const Textarea: React.FC<Props> = ({ label, name, error, disabled }) => {
  const { register } = useFormContext();

  return (
    <div className="grid gap-1">
      <label
        className={`block font-medium ${error ? 'text-red-500' : 'text-[var(--pearl)]'}`}
        htmlFor={name}
      >
        {label}
      </label>

      <textarea
        {...register(name)}
        className={`w-full resize-none rounded border-[1px] border-[var(--gray)] bg-white p-3 disabled:opacity-80 ${
          error ? 'border-red-500' : ''
        }`}
        id={name}
        rows={3}
        disabled={disabled}
      />

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
