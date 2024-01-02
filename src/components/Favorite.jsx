import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FavoriteCard } from '../styles/Favorite.styled';

import { useContext } from 'react';
import MyContext from '../contexApi';

export const Favorite = ({ favorite }) => {
  // const dispatch = useDispatch();
  const nav = useNavigate();
  const { setMovie } = useContext(MyContext);
  return (
    <FavoriteCard
      onClick={() => {
        setMovie(favorite.Title);
        nav('/');
      }}
      poster={favorite.Poster}
    >
      <p> {favorite.Title}</p>
      <p> {favorite.Year}</p>
      <p> {favorite.Runtime}</p>
      <p> {favorite.Director}</p>
    </FavoriteCard>
  );
};
