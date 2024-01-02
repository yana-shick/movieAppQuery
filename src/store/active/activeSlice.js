import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  title: '',
  year: '',
  country: '',
  runtime: '',
  director: '',
  actors: '',
  plot: '',
  imdbRating: '',
  poster: '',
  isFavorite: false,
};

const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    upload(state, action) {
      state.id = action.payload.imdbID;
      state.title = action.payload.Title;
      state.year = action.payload.Year;
      state.country = action.payload.Country;
      state.runtime = action.payload.Runtime;
      state.director = action.payload.Director;
      state.actors = action.payload.Actors;
      state.plot = action.payload.Plot;
      state.imdbRating = action.payload.imdbRating;
      state.poster = action.payload.Poster;
      state.isFavorite = false;
    },
    update(state, action) {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.year = action.payload.year;
      state.country = action.payload.country;
      state.runtime = action.payload.runtime;
      state.director = action.payload.director;
      state.actors = action.payload.actors;
      state.plot = action.payload.plot;
      state.imdbRating = action.payload.imdbRating;
      state.poster = action.payload.poster;
      state.isFavorite = true;
    },
    toggleIsFavorite(state) {
      state.isFavorite = !state.isFavorite;
    },
  },
});

console.log(`activeSlice:`, activeSlice);

export const { upload, toggleIsFavorite, update } = activeSlice.actions;
export default activeSlice.reducer;
