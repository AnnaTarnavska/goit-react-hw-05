import { NavLink, useLocation } from "react-router-dom";
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  const uniqueMovies = movies.filter(
    (movie, index, self) =>
      index === self.findIndex((m) => m.id === movie.id)
  );
  

    return (
        <div className={s.movieList}>
            {uniqueMovies.map((movie) => (
        <div key={movie.id} className={s.movieItem}>
                <NavLink state={location} to={`/movies/${movie.id}`}>
                  {movie.poster_path ? (
                    <img className={s.moviePoster}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
                    />) : (
                      <div>
                      <p>No movie poster</p>
                      </div>
                  )}
            
            <h3>{movie.title}</h3>
          </NavLink>
        </div>
      ))}
        </div>
    );
};

export default MovieList;