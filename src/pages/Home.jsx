import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = '584470dd898841524f519ab5622a6d35';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(response => setMovies(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home">
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
