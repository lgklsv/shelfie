export const stripText = (text: string, charCount: number): string => {
  const cleanText = text.trim();
  return cleanText.length > charCount
    ? `${cleanText.slice(0, charCount)}...`
    : cleanText;
};
