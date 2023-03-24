interface SuggestedBook {
  title: string;
  authors: string[];
  publishedDate: string;
  saleInfo: SalesInfo;
  categories: string[];
  imageLinks: {
    thumbnail: string;
  };
}

type BooksList = {
  items: SuggestedBook[];
};
