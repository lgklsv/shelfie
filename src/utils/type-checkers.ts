export const isVolume = (
  bookType: SuggestedBook | Volume
): bookType is Volume => {
  return 'description' in bookType;
};
