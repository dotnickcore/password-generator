import type { IFormInput } from '../interfaces/IFormInput';

export interface IPasswordGeneratorContextValue {
  generatedPassword: string;
  handleGeneratePassword: (input: IFormInput) => void;
}