import { createContext } from 'react';
import type { IPasswordGeneratorContextValue } from './PasswordGeneratorContextValue';

export const PasswordGeneratorContext = createContext<IPasswordGeneratorContextValue | undefined>(
  undefined
);