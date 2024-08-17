'use client';

import { useState, useEffect } from 'react';

interface Movie {
  id: number;
  title: string;
  vote_average: number;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = 'YOUR_TMDB_API_KEY'; // Replace with your actual TMDB API key
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      );
      const data = await response.json();
      setMovies(data.results.slice(0, 10));
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Top 10 Rated Movies</h1>
      <ol>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} - Rating: {movie.vote_average.toFixed(1)}
          </li>
        ))}
      </ol>
    </main>
  );
}