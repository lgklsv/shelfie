import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  CheckboxInput,
  ImageInput,
  RadioInput,
  SelectInput,
  TextLikeInput,
  PopupNotification,
} from 'shared/ui';
import { bookCategories } from 'shared/model/book-categories';
import { form } from './model';
import styles from './BookFormSection.module.scss';

type PopupState = {
  isVisible: boolean;
  type: 'success' | 'error';
  message: string;
};

type BooksFromProps = {
  addBook: (book: SuggestedBook) => void;
};

const BookFormSection: React.FC<BooksFromProps> = ({ addBook }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: false,
    resolver: yupResolver(form.formSchema),
  });

  const [popupState, setPopupState] = React.useState<PopupState>({
    isVisible: false,
    type: 'error',
    message: '',
  });

  React.useEffect(() => {
    if (isSubmitting && !isValid) {
      setPopupState({
        isVisible: true,
        type: 'error',
        message: 'All form fields are required !',
      });
    }
  }, [isSubmitting, isValid]);

  const handlePopUpunmount = () => {
    setPopupState({
      isVisible: false,
      type: 'error',
      message: 'Error',
    });
  };

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    const newBook: SuggestedBook = {
      id: new Date().getTime().toString(),
      title: data.title,
      authors: [data.author],
      publishedDate: data.published,
      isEbook: data.type,
      categories: [data.category],
      imageLinks: {
        thumbnail: URL.createObjectURL(data.image[0]),
      },
    };

    reset();
    addBook(newBook);

    setPopupState({
      isVisible: true,
      type: 'success',
      message: 'Your suggestion successfully added! 🎉',
    });
  };

  return (
    <section className="container">
      <div className={styles.form_container}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className={`${styles.form} container_sm`}
          noValidate
        >
          <h3 className={styles.form__title}>Book details</h3>
          <TextLikeInput
            register={register}
            message={errors.title?.message?.toString()}
            type="text"
            name="title"
            id="title"
            placeholder="Title"
          />
          <TextLikeInput
            register={register}
            message={errors.author?.message?.toString()}
            type="text"
            name="author"
            id="author"
            placeholder="Author"
          />
          <div className={styles.form__split}>
            <TextLikeInput
              register={register}
              message={errors.published?.message?.toString()}
              type="date"
              name="published"
              id="published"
              placeholder="Published date"
            />
            <SelectInput
              register={register}
              id="category"
              name="category"
              defaultText="Choose category"
              message={errors.category?.message?.toString()}
              options={bookCategories}
            />
          </div>
          <div className={styles.form__split_half}>
            <div className={styles.form__radio}>
              <div className={styles.form__radio__group}>
                <RadioInput
                  register={register}
                  name="type"
                  id="e-book"
                  text="eBook"
                />
                <RadioInput
                  register={register}
                  name="type"
                  id="print"
                  text="Printed Book"
                />
              </div>
              <span className={styles.error__message}>
                {errors.type?.message?.toString()}
              </span>
            </div>
            <ImageInput
              register={register}
              name="image"
              id="image"
              text="Choose image"
              message={errors.image?.message?.toString()}
            />
          </div>
          <div className={styles.form__checkboxarea}>
            <CheckboxInput
              register={register}
              id="agreement"
              name="agreement"
              text="I have read and agree to the Terms of Service"
              message={errors.agreement?.message?.toString()}
            />
          </div>
          <button
            type="submit"
            className={`btn btn-primary ${styles.form__btn}`}
          >
            Submit
          </button>
        </form>
      </div>
      {popupState.isVisible && (
        <PopupNotification
          type={popupState.type}
          message={popupState.message}
          unmountMe={handlePopUpunmount}
        />
      )}
    </section>
  );
};

export default BookFormSection;
