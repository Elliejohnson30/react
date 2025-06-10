import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './Search.jsx';
import Spinner from './Spinner.jsx';
import MovieCard from './MovieCard.jsx';
import { useDebounce } from 'react-use';
import { getTrendingMovies, updateSearchCount } from './appwrite.js';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmExYzVhMzA1MGQ2MDJiMDI2OTE4YTZmZmUwNzgyYSIsIm5iZiI6MTc0ODM4MTE3Ni41NzcsInN1YiI6IjY4MzYyZGY4YzQzNTU4MDdkMzAzN2RiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HNn3NYatfElZ3BQkNAeUCucy02qx8vJ1F-Igp5WRzv8';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.status_message || 'Failed to fetch movies');
      }

      const data = await response.json();

      if (data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.error(`Error fetching trending movies: ${error}`);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-screen-lg mx-auto px-4 py-6">
        {/* Header */}
        <header className="text-center mb-8">
          <img
            src="/hero-img.png"
            alt="Hero Banner"
            className="mx-auto w-40 mb-4"
          />
          <h1 className="text-3xl font-bold">
            Find <span className="text-gradient">Movies</span> You'll Enjoy
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {/* Trending Movies */}
        {trendingMovies.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3">Trending Movies</h2>
            <ul className="flex overflow-x-auto space-x-3 pb-2">
              {trendingMovies.map((movie, index) => (
                <li
                  key={movie.$id}
                  className="min-w-[100px] flex-shrink-0 text-center bg-white text-gray-900 shadow rounded-md p-2"
                >
                  <p className="text-xs font-semibold text-gray-500 mb-1">
                    {index + 1}
                  </p>
                  <img
                    src={movie.poster_url}
                    alt={movie.title}
                    className="w-[100px] h-[150px] object-cover rounded"
                  />
                  <p className="mt-1 text-xs truncate">{movie.title}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* All Movies */}
        <section>
          <h2 className="text-xl font-bold mb-3">All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-400">{errorMessage}</p>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
