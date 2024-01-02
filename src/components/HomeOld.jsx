import React from 'react';

import { useEffect, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { upload } from '../store/active/activeSlice';
import { toggleIsFavorite } from '../store/active/activeSlice';
import { load } from '../store/favorites/favoritesSlice';

import { PageContainer } from '../styles/Page.styled';
import {
  SearchSection,
  SearchContainer,
  StyledSearchInput,
  StyledIconSearch,
  SearchButton,
} from '../styles/Search.styled';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Active } from '../pages/Active';

const API = import.meta.env.VITE_API_KEY;
const matrixId = 'tt0133093';

export const Home = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.active);
  const firstDone = useRef(false);
  const datalistTag = useRef();
  const inputSearchTag = useRef();
  const [searchTitle, setSearchTitle] = useState();
  const [titleToFetch, setTitleToFetch] = useState();

  useEffect(() => {
    if (movie.id) return;
    if (firstDone.current) return;
    firstDone.current = true;
    const fetchMovie = async () => {
      const data = await fetchData({ type: 'id', value: matrixId });
      await uploadActive(data);
    };
    fetchMovie();
  }, []);

  let parameter = '';
  const fetchData = async (loadObj) => {
    if (loadObj.type === 'id') {
      parameter = `i=${loadObj.value}`;
    } else if (loadObj.type === 'search') {
      parameter = `s=${loadObj.value}`;
    } else if (loadObj.type === 'movie') {
      parameter = `t=${loadObj.value}`;
    }
    let res = await fetch(
      `https://www.omdbapi.com/?${parameter}&apikey=${API}`,
    );
    return await res.json();
  };

  const uploadActive = async (data) => {
    console.log(`data API: `, data);
    dispatch(upload(data));
    let favorites = localStorage.getItem('favoritesList');
    if (!favorites) return;
    let favoritesArr = JSON.parse(favorites);
    for (const favoriteId of favoritesArr) {
      // FETCH
      const dataFavorite = await fetchData({ type: 'id', value: favoriteId });
      dispatch(load(dataFavorite));
      console.log(`favorite data API: `, favoriteId, dataFavorite);
      // check if active is favorite
      console.log(`test: `, data.imdbID, favoriteId);
      if (data.imdbID == favoriteId) {
        dispatch(toggleIsFavorite());
      }
    }
  };

  useEffect(() => {
    if (!searchTitle) return;
    
    const searchMovie = async () => {
      // FETCH
      const data = await fetchData({ type: 'search', value: searchTitle });
      // if(data.Response === "False")error
      console.log(`received movie search`, data);
      console.log(datalistTag.current);
      for (let i = datalistTag.current.children.length - 1; i >= 0; i--) {
        datalistTag.current.children[i].remove();
      }
      data.Search.forEach((movie) => {
        let option = document.createElement('option');
        option.value = movie.Title;
        option.id = movie.imdbID;
        datalistTag.current.appendChild(option);
      });
    };
    searchMovie();
  }, [searchTitle]);

  useEffect(() => {
    if (!titleToFetch) return;
    const fetchMovie = async () => {
      const data = await fetchData({ type: 'movie', value: titleToFetch });
      dispatch(upload(data));
      let favorites = localStorage.getItem('favoritesList');
      if (!favorites) return;
      let favoritesArr = JSON.parse(favorites);
      for (const favoriteId of favoritesArr) {
        if (data.imdbID === favoriteId) {
          dispatch(toggleIsFavorite());
        }
      }
    };
    fetchMovie();
  }, [titleToFetch]);

  return (
    <PageContainer>
      <SearchSection>
        <SearchContainer>
          <StyledIconSearch icon={faSearch} />
          <StyledSearchInput
            type="text"
            placeholder="search for a movie"
            onChange={(e) => setSearchTitle(e.target.value)}
            list="movies"
            ref={inputSearchTag}
          />
          <datalist id="movies" ref={datalistTag}></datalist>
        </SearchContainer>
        <SearchButton
          onClick={() => setTitleToFetch(inputSearchTag.current.value)}
        >
          go
        </SearchButton>
      </SearchSection>

      {movie.id ? <Active /> : null}
    </PageContainer>
  );
};
