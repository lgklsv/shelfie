import { object, string, mixed, bool } from 'yup';

export const formSchema = object({
  title: string()
    .required('Title should not be empty')
    .min(3, 'Title should be at least 3 characters')
    .max(40, 'Title is too long'),
  author: string()
    .required('Author should not be empty')
    .min(3, 'Author should be at least 3 characters')
    .max(40, 'Author is too long'),
  published: string()
    .required('Published date should not be empty')
    .nullable()
    .test(
      'published',
      'Published date should not be in the future',
      (value) => {
        if (value) {
          const enteredDate = Date.parse(value);
          const now = new Date().getTime();
          const difference = now - enteredDate;
          return difference > 0;
        }
        return false;
      }
    ),
  category: string()
    .required()
    .notOneOf(['DEFAULT'], 'Category should be selected'),
  type: string().required('Type should be chosen'),
  image: mixed<FileList>().test('image', 'Image should be provided', (value) =>
    value ? value.length > 0 : false
  ),
  agreement: bool().oneOf(
    [true],
    'Terms should be accepted to submit the form'
  ),
});
