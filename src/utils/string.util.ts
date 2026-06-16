export const capitalize = (text: string): string => {
  if(!text) return '';

  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const truncateText = (
  text: string,
  maxLength: number,
): string => {
  
  if(text?.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength)}...`;
};

export const removeExtraSpaces = (text: string): string => {
  return text.trim().replace(/\s+/g, ' ');
};

export const isEmptyString = (text: string): boolean => {
  return text.trim().length === 0;
};
