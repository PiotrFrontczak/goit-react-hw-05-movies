import React, { useEffect, useState } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '584470dd898841524f519ab5622a6d35';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error(error));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}

export default MovieDetails;
