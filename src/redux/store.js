import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { advertsReducer } from './advertsSlice';

const rootReducer = combineReducers({
  adverts: advertsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
