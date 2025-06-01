import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export type InputRangeProps<T extends FieldValues> = {
  name: Path<T>;
  register: UseFormRegister<T>;
  value?: number;
  min?: number;
  max?: number;
  className?: string;
};
