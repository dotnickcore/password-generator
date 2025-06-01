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

  if (
    !doesIncludeUpperCaseLetters &&
    !doesIncludeLowerCaseLetters &&
    !doesIncludeNumbers &&
    !doesIncludeSymbols
  ) {
    throw new Error('At least one character type must be selected');
  }

  // Validate length
  if (passwordLength <= 0) {
    throw new Error('Password length must be greater than 0');
  }

  // Character sets
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  // Build the character pools
  const enabledPools: string[] = [];
  if (doesIncludeUpperCaseLetters) enabledPools.push(uppercaseChars);
  if (doesIncludeLowerCaseLetters) enabledPools.push(lowercaseChars);
  if (doesIncludeNumbers) enabledPools.push(numberChars);
  if (doesIncludeSymbols) enabledPools.push(symbolChars);

  // Combined pool for remaining characters
  const combinedPool = enabledPools.join('');

  // Generate at least one character from each enabled pool
  const guaranteedChars: string[] = [];
  enabledPools.forEach((pool) => {
    const randomIndex = Math.floor(Math.random() * pool.length);
    guaranteedChars.push(pool[randomIndex]);
  });

  // Fill remaining slots with random characters from combined pool
  const remainingLength = passwordLength - guaranteedChars.length;
  const remainingChars: string[] = [];
  for (let i = 0; i < remainingLength; i++) {
    const randomIndex = Math.floor(Math.random() * combinedPool.length);
    remainingChars.push(combinedPool[randomIndex]);
  }

  // Combine and shuffle the characters
  const allChars = [...guaranteedChars, ...remainingChars];
  const shuffledChars = shuffleArray(allChars);

  return shuffledChars.join('');
}

export default generatePassword;
