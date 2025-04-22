import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import s from './MovieReviews.module.css';

const MovieReviews = () => {

  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieReviews(movieId)
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData()
  }, [movieId])

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li className={s.reviewItem} key={review.id}>
            <p>{review.content}</p>
            <p>{review.author}</p>
            <p>{review.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default MovieReviews;