import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const Select: React.FC<Props> = ({
  label,
  name,
  options,
  error,
  placeholder = 'Selecione uma opção',
  disabled,
}) => {
  const { register } = useFormContext();

  return (
    <div className="grid gap-1">
      <label
        htmlFor={name}
        className={`block font-medium ${error ? 'text-red-500' : 'text-[var(--pearl)]'}`}
      >
        {label}
      </label>

      <select
        id={name}
        defaultValue=""
        {...register(name)}
        className={`h-[50px] w-full rounded border bg-white p-2 disabled:opacity-80 ${error ? 'border-red-500' : 'border-gray-300'}`}
        disabled={disabled}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
