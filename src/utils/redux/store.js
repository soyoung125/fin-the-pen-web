import { configureStore } from '@reduxjs/toolkit';

// import storage from 'redux-persist/lib/storage'; // for local storage
import storage from 'redux-persist/lib/storage/session'; // for session storage

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import userReducer from './user/userSlice';
import eventReducer from './event/eventSlice';
import commonReducer from './common/commonSlice';

const reducers = combineReducers({
  common: commonReducer,
  user: userReducer,
  event: eventReducer,
  // 리듀서 추가를 여기에 해주삼 ㅇㅇ
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
