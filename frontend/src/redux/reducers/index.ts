import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import bookState from './book';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bookState'],
};

const rootReducer = combineReducers({ bookState });

export default persistReducer(persistConfig, rootReducer);
