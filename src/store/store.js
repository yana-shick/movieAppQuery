import { configureStore } from '@reduxjs/toolkit';

import activeReducer from './active/activeSlice';
import favoritesReducer from './favorites/favoritesSlice';

const store = configureStore({
  reducer: {
    active: activeReducer,
    favorites: favoritesReducer,
  },
});

export default store;
