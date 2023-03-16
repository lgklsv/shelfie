export const stripText = (text: string, charCount: number): string => {
  return text.length > charCount ? `${text.slice(0, charCount)}...` : text;
};
