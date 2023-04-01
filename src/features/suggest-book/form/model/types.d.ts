interface FormInputs {
  title: string;
  author: string;
  published: string;
  category: string;
  type: string | null;
  image: FileList;
  agreement: boolean;
}

type AvailableNames =
  | 'image'
  | 'type'
  | 'title'
  | 'author'
  | 'published'
  | 'category'
  | 'agreement';
