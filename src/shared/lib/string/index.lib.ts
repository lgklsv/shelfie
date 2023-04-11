export const sliceText = (text: string, charCount: number): string => {
  const cleanText = text.trim();
  return cleanText.length > charCount
    ? `${cleanText.slice(0, charCount)}...`
    : cleanText;
};

export const cleanText = (text: string): string => {
  return text.trim().replace(/(<([^>]+)>)/gi, '');
};
