import type { IFormInput } from '../interfaces/IFormInput';

const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function generatePassword(options: IFormInput) {
  const {
    passwordLength,
    doesIncludeUpperCaseLetters,
    doesIncludeLowerCaseLetters,
    doesIncludeNumbers,
    doesIncludeSymbols,
  } = options;

  // Validate at least one character type is selected
  const totalPools = [
    doesIncludeUpperCaseLetters,
    doesIncludeLowerCaseLetters,
    doesIncludeNumbers,
    doesIncludeSymbols,
  ].filter(Boolean).length;
  if (totalPools === 0) {
    throw new Error('At least one character type must be selected');
  }

  // Validate length
  if (passwordLength <= 0) {
    throw new Error('Password length must be greater than 0');
  }

  // Character sets
  const charSets = [
    {
      enabled: doesIncludeUpperCaseLetters,
      chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    },
    {
      enabled: doesIncludeLowerCaseLetters,
      chars: 'abcdefghijklmnopqrstuvwxyz',
    },
    { enabled: doesIncludeNumbers, chars: '0123456789' },
    { enabled: doesIncludeSymbols, chars: '!@#$%^&*()_+-=[]{}|;:,.<>?' },
  ].filter((set) => set.enabled);

  // Create combined pool of all enabled characters
  const combinedPool = charSets.map((set) => set.chars).join('');

  // Generate password characters
  const passwordChars: string[] = [];

  // 1. First include one character from each enabled set (up to password length)
  const setsToInclude = Math.min(passwordLength, charSets.length);
  const shuffledSets = shuffleArray([...charSets]);

  for (let i = 0; i < setsToInclude; i++) {
    const set = shuffledSets[i];
    const randomIndex = Math.floor(Math.random() * set.chars.length);
    passwordChars.push(set.chars[randomIndex]);
  }

  // 2. Fill remaining characters from the combined pool
  const remainingLength = passwordLength - passwordChars.length;
  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * combinedPool.length);
    passwordChars.push(combinedPool[randomIndex]);
  }

  // 3. Shuffle the final characters
  return shuffleArray(passwordChars).join('');
}

export default generatePassword;
