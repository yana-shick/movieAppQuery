import React from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { add } from '../store/favorites/favoritesSlice';
// import { del } from '../store/favorites/favoritesSlice';
// import { toggleIsFavorite } from '../store/active/activeSlice';

import { faHeart } from '@fortawesome/free-solid-svg-icons';

import {
  ActiveSection,
  MovieContainer,
  InfoContainer,
  InfoRow,
  RowTitle,
  RowText,
  Poster,
  ActorContainer,
  ActorCard,
  StyledIconFavorite,
} from '../styles/Active.styled';
import { useContext, useState } from 'react';
import MyContext from '../contexApi';

export const Active = () => {
  const { data, isFavorite } = useContext(MyContext);
  console.log(`isFavorite inside: `, isFavorite);

  const [fav, setFav] = useState(isFavorite);

  const addFavorite = () => {
    let favoritesArray = JSON.parse(localStorage.getItem('favoritesList'));
    if (!favoritesArray) {
      localStorage.setItem('favoritesList', JSON.stringify([data.imdbID]));
    } else {
      favoritesArray.push(data.imdbID);
      localStorage.setItem('favoritesList', JSON.stringify(favoritesArray));
    }
    setFav((fav) => !fav);
  };
  const deleteFavorite = () => {
    let favoritesArray = JSON.parse(localStorage.getItem('favoritesList'));
    favoritesArray = favoritesArray.filter((id) => id != data.imdbID);
    localStorage.setItem('favoritesList', JSON.stringify(favoritesArray));
    setFav((fav) => !fav);
  };
  return (
    <ActiveSection>
      <StyledIconFavorite
        icon={faHeart}
        isfavorite={fav.toString()}
        // isfavorite={true}
        onClick={() => {
          fav ? deleteFavorite() : addFavorite();
        }}
      />

      <MovieContainer>
        <Poster>
          <img src={data?.Poster} />
        </Poster>
        <InfoContainer>
          <InfoRow>
            <RowTitle>Title </RowTitle>
            <RowText>{data?.Title}</RowText>
          </InfoRow>
          <InfoRow>
            <RowTitle>Year </RowTitle>
            <RowText>{data?.Year}</RowText>
          </InfoRow>
          <InfoRow>
            <RowTitle>Country </RowTitle>
            <RowText>{data?.Country}</RowText>
          </InfoRow>
          <InfoRow>
            <RowTitle>Run Time </RowTitle>
            <RowText>{data?.Runtime}</RowText>
          </InfoRow>
          <InfoRow>
            <RowTitle>Director </RowTitle>
            <RowText>{data?.Director}</RowText>
          </InfoRow>
          <InfoRow>
            <RowTitle>Imdb Rating </RowTitle>
            <RowText>{data?.imdbRating}</RowText>
          </InfoRow>
        </InfoContainer>
      </MovieContainer>
      <ActorContainer>
        {data?.Actors?.split(',').map((actor) => (
          <ActorCard key={actor}>{actor.trim()}</ActorCard>
        ))}
      </ActorContainer>
    </ActiveSection>
  );
};
