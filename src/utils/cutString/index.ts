export const cutString = (string: string, maxValueLengthString: number): string => {
  const startValue = 0;
  const endValue = maxValueLengthString;

  return `${string.slice(startValue, endValue)}...`;
};
