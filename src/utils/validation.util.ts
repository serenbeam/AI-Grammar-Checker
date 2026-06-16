export const isValidText = (text: string): boolean => {
  return text.trim().length > 0;
}

export const isTextWithinLimit = (
  text: string,
  limit: number,
): boolean => {
  return text.length <= limit;
};

export const hasMinimumLength = (
  text: string,
  minLength: number,
): boolean => {
  return text.trim().length >= minLength;
};