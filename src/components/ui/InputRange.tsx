import type { FieldValues } from 'react-hook-form';
import type { InputRangeProps } from '../../types/InputRangeProps';

function InputRange<T extends FieldValues>({
  name,
  register,
  className,
  value,
  min,
  max
}: InputRangeProps<T>) {
  return (
    <input
      className={className}
      type="range"
      value={value}
      min={min}
      max={max}
      {...register(name)}
    />
  );
}

export default InputRange;