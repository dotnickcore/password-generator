import type { UseFormReturn, SubmitHandler, FieldValues } from "react-hook-form";

export type FormProps<T extends FieldValues> = {
  formMethods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  className?: string;
  children: React.ReactNode;
}