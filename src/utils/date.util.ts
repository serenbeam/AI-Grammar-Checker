export const formatDate = (
  date: Date,
  locale: string = 'en-US',
): string => {

  return new Intl.DateTimeFormat(locale).format(date);
}

export const formatTime = (
    date: Date,
    locale: string = 'en-US',
): string => {
  
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};