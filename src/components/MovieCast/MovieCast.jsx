import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import s from './MovieCast.module.css'

const MovieCast = () => {

  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieCast(movieId)
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData()
  },[movieId])

  return (
    <div>
      <ul className={s.castList}>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.profile_path ? (
      <img
        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
        alt={actor.name}
      />
            ) : (
                <div>
                  <p>No photo</p>
              </div>
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;