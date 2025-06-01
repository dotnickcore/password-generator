import { useForm, useWatch, type SubmitHandler } from 'react-hook-form';
import type { IFormInput } from '../interfaces/IFormInput';
import InputRange from './ui/InputRange';
import Input from './ui/Input';
import Button from './ui/Button';
import { Form } from './ui/Form';
import Container from './ui/Container';
import Heading from './ui/Heading';
import Label from './ui/Label';
import Span from './ui/Span';
import { usePasswordGeneratorContext } from '../hooks/usePasswordGeneratorContext';

function Generate() {
  const { handleGeneratePassword } = usePasswordGeneratorContext();

  const formMethods = useForm<IFormInput>({
    defaultValues: {
      passwordLength: 1,
    },
  });

  const passwordLength = useWatch({
    control: formMethods.control,
    name: 'passwordLength',
    defaultValue: 1,
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleGeneratePassword(data);
  };

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <Container className="mb-6">
        <Heading level={2} className="text-lg font-semibold text-gray-700 mb-3">
          Password Length: {passwordLength}
        </Heading>
        <InputRange
          name="passwordLength"
          register={formMethods.register}
          min={1}
          max={50}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-100"
        />
      </Container>

      <Container className="space-y-3 mb-8">
        <Label
          htmlFor="doesIncludeUpperCaseLetters"
          className="flex items-center"
        >
          <Input
            name="doesIncludeUpperCaseLetters"
            type="checkbox"
            register={formMethods.register}
          />
          <Span className="text-gray-700 ml-2">Include uppercase letters</Span>
        </Label>

        <Label
          htmlFor="doesIncludeLowerCaseLetters"
          className="flex items-center"
        >
          <Input
            name="doesIncludeLowerCaseLetters"
            type="checkbox"
            register={formMethods.register}
          />
          <Span className="text-gray-700 ml-2">Include lower letters</Span>
        </Label>

        <Label htmlFor="doesIncludeNumbers" className="flex items-center">
          <Input
            name="doesIncludeNumbers"
            type="checkbox"
            register={formMethods.register}
          />
          <Span className="text-gray-700 ml-2">Include numbers</Span>
        </Label>

        <Label htmlFor="doesIncludeSymbols" className="flex items-center">
          <Input
            name="doesIncludeSymbols"
            type="checkbox"
            register={formMethods.register}
          />
          <Span className="text-gray-700 ml-2">Include symbols</Span>
        </Label>

        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded mt-9"
          label="Generate Password"
        />
      </Container>
    </Form>
  );
}

export default Generate;
