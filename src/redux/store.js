import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { advertsReducer } from './advertsSlice';
import { favoritesReducer } from './favoriteSlice';

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
