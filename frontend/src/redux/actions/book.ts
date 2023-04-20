import { Book } from '../../types/types';
import * as types from '../constants';

// FETCH BOOKS
export const fetchBooksRequest = () => {
  return {
    type: types.FETCH_BOOKS_REQUEST,
  };
};

export const fetchBooksSuccess = (data: Book[]) => {
  return {
    type: types.FETCH_BOOKS_SUCCESS,
    payload: data,
  };
};

export const fetchBooksError = (error: unknown) => {
  return {
    type: types.FETCH_BOOKS_ERROR,
    payload: error,
  };
};
