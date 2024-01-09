export const dateStringToMonthAndYear = (dateString: string) => {
  if (dateString === '') return undefined;
  const date = new Date(dateString);
  return `${date.toLocaleString('en-us', {
    month: 'long',
  })}  ${date.getFullYear()}`;
};
