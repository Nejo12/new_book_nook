import { put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import * as action from '../actions/borrow'; // the list got too long.
import { GET_BORROW, BORROW_BOOK, RETURN_BOOK } from '../constants';
import {
  AppState,
  BookDetailResponse,
  BookResponse,
  BorrowResponse,
} from '../../types/types';
import { url } from '../../Routes';

const _id = (state: AppState) => state.authState.user._id;
const id = (state: AppState) => state.bookState.bookProps._id;

function* borrowedSaga() {
  try {
    const userId: string = yield select(_id);
    const response: BookResponse = yield axios.get(
      `${url}/api/borrows/all?userId=` + userId,
    );
    // console.log('response in borrowedSaga:', response);
    yield put(action.getBorrowSuccess(response.data));
  } catch (error: any) {
    // yield put(borrowBookFailure(error.response.data));

    yield put(action.getBorrowFailure(error));
  }
}

function* borrowBookSaga(action: any) {
  try {
    const bookData = action.payload;
    const response: BorrowResponse = yield axios.post(
      `${url}/api/borrows`,
      bookData,
    );
    console.log('response in borrowBookSaga:', response);
    // yield put(action.borrowBookSuccess(response));
  } catch (error: any) {
    yield put(action.borrowBookFailure(error));
    // yield put(borrowBookFailure(error.response.data));
  }
}

function* returnBookSaga(action: any) {
  try {
    const borrowedId = action.payload;
    const bookId: string = yield select(id);
    const response: BookDetailResponse = yield axios.delete(
      `${url}/api/borrows/delete/` + bookId + '/' + borrowedId,
    );
    // yield put(action.returnBookSuccess(response));
  } catch (error: any) {
    yield put(action.returnBookFailure(error));
  }
}

const borrowSagaArray = [
  takeLatest(GET_BORROW, borrowedSaga),
  takeLatest(BORROW_BOOK, borrowBookSaga),
  takeLatest(RETURN_BOOK, returnBookSaga),
];

export default borrowSagaArray;
