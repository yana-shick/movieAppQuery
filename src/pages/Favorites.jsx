import React from 'react';

import { useQuery } from '@tanstack/react-query';

import { PageContainer } from '../styles/Page.styled';
import { FavoriteSection } from '../styles/Favorite.styled';

import { Favorite } from '../components/Favorite';
import fetchData from '../assets/func';

export const Favorites = () => {
  const fetchFavorites = async () => {
    const favoritesData = [];
    const favorites = localStorage.getItem('favoritesList');
    if (!favorites) return;
    const favoritesArr = JSON.parse(favorites);
    for (const favoriteId of favoritesArr) {
      let data = await fetchData({ type: 'id', value: favoriteId });
      favoritesData.push(data);
    }
    console.log(`fetching favorites: `, favoritesData);
    return favoritesData;
  };

  const { isLoading, data, error } = useQuery({
    queryKey: ['favorites'],
    queryFn: () => fetchFavorites(),
  });

  console.log(`this is query favorites: `, data);
  return (
    <PageContainer>
      {isLoading || data?.length > 0 ? (
        <FavoriteSection>
          {data?.map((favorite) => (
            <Favorite favorite={favorite} key={favorite.imdbID} />
          ))}
        </FavoriteSection>
      ) : null}
    </PageContainer>
  );
};
