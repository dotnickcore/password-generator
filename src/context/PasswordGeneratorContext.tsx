import { useCallback, useMemo, useState } from 'react';
import type { IFormInput } from '../interfaces/IFormInput';
import generatePassword from '../utils/generatePassword';
import type { IPasswordGeneratorContextValue } from './PasswordGeneratorContextValue';
import { PasswordGeneratorContext } from './PasswordGeneratorContextInstance';

export default function PasswordGeneratorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [generatedPassword, setGeneratePassword] = useState<string>('');

  const handleGeneratePassword = useCallback((input: IFormInput) => {
    setGeneratePassword(generatePassword(input));
  }, []);

  const value: IPasswordGeneratorContextValue = useMemo(
    () => ({
        generatedPassword,
        handleGeneratePassword,
    }),
    [generatedPassword, handleGeneratePassword]
  );

  return (
    <PasswordGeneratorContext.Provider value={value}>{children}</PasswordGeneratorContext.Provider>
  )
}
