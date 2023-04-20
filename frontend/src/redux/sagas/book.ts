import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

import {
  fetchBooksSuccess,
  fetchBooksError,
  fetchBookDetailSuccess,
  fetchBookDetailFailure,
} from '../actions/book';
import { fetchBooksService } from '../services/books';
import { FETCH_BOOKS_REQUEST, FETCH_BOOK_DETAIL } from '../constants';
import { Book, BookActionType, BookDetailResponse } from '../../types/types';
import { url } from '../../Routes';

function* fetchBooksSaga() {
  try {
    const response: Book[] = yield call(fetchBooksService);
    yield put(fetchBooksSuccess(response));
  } catch (err) {
    yield put(fetchBooksError(err));
  }
}

function* fetchBookDetailSaga(action: BookActionType) {
  try {
    const bookId = action.payload as string;
    const bookDetailsUrl: string = `${url}/api/books/${bookId}`;
    const response: BookDetailResponse = yield axios.get(bookDetailsUrl);
    yield put(fetchBookDetailSuccess(response.data));
  } catch (error) {
    yield put(fetchBookDetailFailure(error));
  }
}

const sagaArray = [
  takeLatest(FETCH_BOOKS_REQUEST, fetchBooksSaga),
  takeLatest(FETCH_BOOK_DETAIL, fetchBookDetailSaga),
];

export default sagaArray;
