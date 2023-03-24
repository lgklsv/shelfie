export const isVolume = (
  bookType: SuggestedBook | Volume
): bookType is Volume => {
  return 'subtitle' in bookType;
};
