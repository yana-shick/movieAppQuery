import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    load(state, action) {
      state.push({
        id: action.payload.imdbID,
        title: action.payload.Title,
        year: action.payload.Year,
        country: action.payload.Country,
        runtime: action.payload.Runtime,
        director: action.payload.Director,
        actors: action.payload.Actors,
        plot: action.payload.Plot,
        imdbRating: action.payload.imdbRating,
        poster: action.payload.Poster,
      });
    },
    add(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        year: action.payload.year,
        country: action.payload.country,
        runtime: action.payload.runtime,
        director: action.payload.director,
        actors: action.payload.actors,
        plot: action.payload.plot,
        imdbRating: action.payload.imdbRating,
        poster: action.payload.poster,
      });
    },
    del(state, action) {
      if (state.length > 1) {
        return state.filter((movie) => {
          console.log(`starting detele favorite`, action.payload.id, movie.id);
          return movie.id !== action.payload.id;
        });
      } else {
        return initialState;
      }
    },
  },
});
console.log(`favoritesSlice:`, favoritesSlice);
export const { load, add, del } = favoritesSlice.actions;
export default favoritesSlice.reducer;
