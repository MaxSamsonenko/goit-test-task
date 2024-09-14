import { createSlice } from '@reduxjs/toolkit';
import { fetchFavorite, addFavorite, removeFavorite } from './operations';

import { loadFavoritesFromLocalStorage } from './local-storage/localStorage';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFavoritesFromLocalStorage(),
  extraReducers: builder => {
    builder
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        state = [...state, ...action.payload];
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        if (!state.includes(action.payload)) {
          state.push(action.payload);
        }
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        if (state.includes(action.payload)) {
          let index = state.indexOf(action.payload);
          state = state.slice(index);
        }
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
