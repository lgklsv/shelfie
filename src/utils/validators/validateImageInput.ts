export const validateImageInput = (imageInput: HTMLInputElement | null) => {
  if (imageInput && imageInput.files?.length !== 0) {
    return {
      imageIsValid: true,
      imageErrorMessage: '',
    };
  }
  return {
    imageIsValid: false,
    imageErrorMessage: 'Image should be provided',
  };
};
