import { ActionTypes, BookResponse, BookState } from '../../types/types';
import * as types from './../constants/index';

const initialState: BookState = {
  loading: false,
  error: '',
  msg: '',
  bookList: [],
  data: {
    _id: '',
    title: '',
    isbn: '',
    description: '',
    copies: 0,
    author: '',
    publisher: '',
    publishedDate: '',
  },
  bookProps: {
    _id: '',
    title: '',
    isbn: '',
    description: '',
    copies: 0,
    author: '',
    publisher: '',
    publishedDate: '',
  },
};

const bookReducer = (state = initialState, action: ActionTypes) => {
  const payload = action.payload as BookResponse;

  switch (action.type) {
    case types.FETCH_BOOKS_REQUEST:
    case types.FETCH_BOOK_DETAIL:
      return {
        ...state,
        loading: true,
        errors: false,
      };

    case types.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        errors: false,
      };

    case types.FETCH_BOOKS_ERROR:
    case types.FETCH_BOOK_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        errors: true,
      };

    case types.FETCH_BOOK_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: false,
        data: payload.book,
        // bookProps: { ...payload.book },
      };

    default:
      return state;
  }
};

export default bookReducer;
