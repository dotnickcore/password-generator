import type { FieldValues } from 'react-hook-form';
import type { InputProps } from '../../types/InputProps';

function Input<T extends FieldValues>({
  name,
  register,
  className,
  type,
  placeholder,
}: InputProps<T>) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
  );
}

export default Input;