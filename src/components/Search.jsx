import React from 'react';

import { useEffect, useRef, useState } from 'react';

import fetchData from '../assets/func';

import { PageContainer } from '../styles/Page.styled';
import {
  SearchSection,
  SearchContainer,
  StyledSearchInput,
  StyledIconSearch,
  SearchButton,
} from '../styles/Search.styled';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useQuery } from '@tanstack/react-query';
import useDebounce from '../assets/useDebounce';

import { useContext } from 'react';
import MyContext from '../contexApi';

export const Search = () => {
  const { setMovie } = useContext(MyContext);
  const datalistTag = useRef();

  const [search, setSearch] = useState('');

  const debouncedSearchTerm = useDebounce(search, 1000);

  const {
    isLoading,
    data: searchList,
    error,
  } = useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn: () => {
      if (debouncedSearchTerm) {
        return fetchData({ type: 'search', value: debouncedSearchTerm });
      }
      return;
    },
    enabled: !!search,
  });

  console.log(`this is query Search: `, searchList);

  if (searchList?.Search) {
    console.log(`i am in a list creator`);
    for (let i = datalistTag.current.children.length - 1; i >= 0; i--) {
      datalistTag.current.children[i].remove();
    }
    searchList.Search.forEach((movie) => {
      let option = document.createElement('option');
      option.value = movie.Title;
      option.id = movie.imdbID;
      datalistTag.current.appendChild(option);
    });
  }

  return (
    <PageContainer>
      <SearchSection>
        <SearchContainer>
          <StyledIconSearch icon={faSearch} />
          <StyledSearchInput
            value={search}
            type="text"
            placeholder="search for a movie"
            onChange={(e) => setSearch(e.target.value)}
            list="movies"
            // ref={inputSearchTag}
          />
          <datalist id="movies" ref={datalistTag}></datalist>
        </SearchContainer>
        <SearchButton
          onClick={() => {
            console.log(search);
            setMovie(search);
          }}
        >
          go
        </SearchButton>
      </SearchSection>
      {isLoading && <div>loading spiner</div>}
      {error && <div>error</div>}
    </PageContainer>
  );
};
