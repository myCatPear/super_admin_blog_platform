export const dateParse = (date: string): String => {
  const ms = new Date(date);
  const dateString = `${ms.getDate()}.${ms.getMonth()}.${ms.getFullYear()}`;

  return dateString;
};
