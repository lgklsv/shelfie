type BookFormState = {
  titleMessage: string;
  authorMessage: string;
  dateMessage: string;
  selectMessage: string;
  radioMessage: string;
  imageMessage: string;
  checkboxMessage: string;
  popup: {
    isVisible: boolean;
    type: 'success' | 'error';
    message: string;
  };
};

type BooksFromProps = {
  addBook: (book: SuggestedBook) => void;
};
