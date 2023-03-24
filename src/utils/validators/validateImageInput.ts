export const validateImageInput = (imageInput: HTMLInputElement | null) => {
  if (imageInput && imageInput.files && imageInput.files.length !== 0) {
    return {
      imageValue: URL.createObjectURL(imageInput.files[0]),
      imageIsValid: true,
      imageErrorMessage: '',
    };
  }
  return {
    imageValue: '',
    imageIsValid: false,
    imageErrorMessage: 'Image should be provided',
  };
};
