import { ActionTypes, BookResponse, BookState } from '../../types/types';
import * as types from './../constants/index';

const initialState: BookState = {
  loading: false,
  error: '',
  msg: '',
  data: [],
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
      return {
        ...state,
        loading: false,
        errors: true,
      };

    default:
      return state;
  }
};

export default bookReducer;
