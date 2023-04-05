export const isVolume = (
  bookType: SuggestedBook | Volume
): bookType is Volume => {
  return 'readingModes' in bookType;
};
