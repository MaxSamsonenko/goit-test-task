import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveFavoritesToLocalStorage } from './local-storage/localStorage';

axios.defaults.baseURL = 'https://662baedade35f91de1592414.mockapi.io/api/v1';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchPage',
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=${limit}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavorite = createAsyncThunk(
  'favorites/fetchFavorite',
  async (_id, { getState }) => {
    const state = getState().favorites;
    return state;
  }
);

export const addFavorite = createAsyncThunk(
  'favorites/addFavorite',
  async (_id, { getState }) => {
    const state = getState().favorites;

    if (state.includes(_id)) {
      return;
    }

    const updatedIds = [...state, _id];
    saveFavoritesToLocalStorage(updatedIds);
    return _id;
  }
);

export const removeFavorite = createAsyncThunk(
  'favorites/removeFavorite',
  async (_id, { getState }) => {
    const state = getState().favorites;
    const updatedIds = state.filter(favoriteId => favoriteId !== _id);
    saveFavoritesToLocalStorage(updatedIds);
    return _id;
  }
);
