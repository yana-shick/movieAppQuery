import { useState } from 'react';
import GlobalStyles from './styles/Global.styled';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Search } from './components/Search.jsx';
import { Favorites } from './pages/Favorites.jsx';
import { Active } from './pages/Active.jsx';

import { useQuery } from '@tanstack/react-query';
import fetchData from './assets/func.js';

import { Provider } from './contexApi.js';

const matrixId = 'tt0133093';
function App() {
  const [movie, setMovie] = useState(matrixId);

  const { isLoading, data, error } = useQuery({
    queryKey: ['movie', movie],
    queryFn: () => {
      let payload = {};
      if (movie === matrixId) payload = { type: 'id', value: movie };
      else payload = { type: 'movie', value: movie };
      return fetchData(payload);
    },
  });
  console.log(`this is query: `, data);

  // check coockies 
  const checkFavorite = () => {
    const favorites = localStorage.getItem('favoritesList');
    if (!favorites) return false;
    const favoritesArr = JSON.parse(favorites);
    for (const favoriteId of favoritesArr) {
      if (data?.imdbID === favoriteId) {
        return true;
      }
    }
    return false;
  };

  let isFavorite = checkFavorite();

  return (
    <>
      <Provider value={{ data, isFavorite, setMovie }}>
        <BrowserRouter>
          <Header />
          <Search />
          <Routes>
            {isLoading || <Route path="/" element={<Active />} />}
            <Route
              path="/favorites"
              element={<Favorites />}
            />
          </Routes>
        </BrowserRouter>
        {error && <div>error</div>}
        <GlobalStyles />
      </Provider>
    </>
  );
}

export default App;
