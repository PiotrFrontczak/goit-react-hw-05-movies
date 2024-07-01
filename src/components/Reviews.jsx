import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '584470dd898841524f519ab5622a6d35';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then(response => setReviews(response.data.results))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}: {review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
