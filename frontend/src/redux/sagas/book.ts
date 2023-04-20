import { put, call, takeLatest } from 'redux-saga/effects';

import { fetchBooksSuccess, fetchBooksError } from '../actions/book';
import { fetchBooksService } from '../services/books';
import { FETCH_BOOKS_REQUEST } from '../constants';
import { Book } from '../../types/types';

function* fetchBooksSaga() {
  try {
    const response: Book[] = yield call(fetchBooksService);
    yield put(fetchBooksSuccess(response));
  } catch (err) {
    yield put(fetchBooksError(err));
  }
}

const fetchBooksVar = [takeLatest(FETCH_BOOKS_REQUEST, fetchBooksSaga)];

export default fetchBooksVar;
