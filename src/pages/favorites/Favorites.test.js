import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Favorites from './Favorites'; 

test('should render favorite movies from sessionStorage', async () => {
  const favoriteMovies = [
    { id: 1, title: 'Movie 1', posterPath: '/path1' },
    { id: 2, title: 'Movie 2', posterPath: '/path2' },
  ];
  sessionStorage.setItem('favorites', JSON.stringify(favoriteMovies));

  render(
    <MemoryRouter>
      <Favorites />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
  });
});

test('should display multiple favorite movies', async () => {
  const favoriteMovies = [
    { id: 1, title: 'Movie 1', posterPath: '/path1' },
    { id: 2, title: 'Movie 2', posterPath: '/path2' },
    { id: 3, title: 'Movie 3', posterPath: '/path3' },
  ];
  sessionStorage.setItem('favorites', JSON.stringify(favoriteMovies));

  render(
    <MemoryRouter>
      <Favorites />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
    expect(screen.getByText('Movie 3')).toBeInTheDocument();
  });
});


///Renderização dos Favoritos:

// Simula a presença de filmes no sessionStorage como favoritos.
// Verifica se os favoritos são corretamente exibidos na tela.

// Exibição de Favoritos:

// Simula múltiplos filmes sendo marcados como favorito e
// Verifica se todos os filmes favoritos são exibidos na tela.