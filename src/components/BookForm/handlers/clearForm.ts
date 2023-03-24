/* eslint-disable no-param-reassign */
export const clearForm = (
  title: HTMLInputElement | null,
  author: HTMLInputElement | null,
  date: HTMLInputElement | null,
  category: HTMLSelectElement | null,
  ebook: HTMLInputElement | null,
  printed: HTMLInputElement | null,
  image: HTMLInputElement | null,
  agreement: HTMLInputElement | null
) => {
  if (
    title &&
    author &&
    date &&
    category &&
    ebook &&
    printed &&
    image &&
    agreement
  ) {
    title.value = '';
    author.value = '';
    date.value = '';
    category.value = 'DEFAULT';
    ebook.checked = false;
    printed.checked = false;
    image.value = '';
    agreement.checked = false;
  }
};
