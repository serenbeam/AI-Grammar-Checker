export const REGEX_CONSTANTS = {
  MULTIPLE_SPACES: /\s+/g,

  MULTIPLE_NEW_LINES: /\n{2,}/g,
  
  LEADING_TRAILING_SPACES: /^\s+|s+$/g,
} as const;