import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '584470dd898841524f519ab5622a6d35';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(response => setMovies(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
