// APP STATE
export type AppState = {
  bookState: BookState;
};

// BOOK-STATE
export type BookState = {
  bookProps: Book;
  data: Book[];
  loading: boolean;
  msg: string;
  error: string;
};

export type Book = {
  _id: string;
  title: string;
  isbn: string;
  description: string;
  copies: number;
  author: string;
  publisher: string;
  publishedDate: string;
};

// PROPS
export type BookProps = {
  bookData: Book;
};

export type BookActionType = {
  type: string;
  payload: string | boolean | BookResponse;
};

export type ActionTypes = BookActionType | Payload;

// RESPONSES
export type BookResponse = {
  book: Book;
  bookList: Book[];
};
