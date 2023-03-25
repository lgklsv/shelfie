export const validateImageInput = (imageValue: FileList | null | undefined) => {
  if (imageValue && imageValue.length !== 0) {
    return {
      imageValue: imageValue[0],
      imageIsValid: true,
      imageErrorMessage: '',
    };
  }
  return {
    imageValue: new File(['1234'], 'test.jpg', { type: 'image/jpeg' }),
    imageIsValid: false,
    imageErrorMessage: 'Image should be provided',
  };
};
