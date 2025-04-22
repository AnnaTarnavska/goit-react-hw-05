import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import s from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();
    const goBackRef = useRef(location.state ?? '/movies')

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchMovieDetails(movieId);
                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [movieId]);
    
    return (
        <div>
            <Link to={goBackRef.current} className={s.goBack}>⤺ Go back</Link>
            <div className={s.detailsMovieContainer}>
                <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title} className={s.imgPoster} />
                <div className={s.movieDescription}>
                    <h2>{movie.title}</h2>
                    <p>Original language: {movie.original_language}</p>
                    <p>Realise Date: {movie.release_date}</p>
                    <p>Raiting: {movie.vote_average}</p>
                    <p>Movie Runtime: {movie.runtime} min</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                </div>
            </div>
            <nav className={s.moreInfoLinks}>
                <NavLink to='cast'>Cast</NavLink>
                <NavLink to='reviews'>Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}

export default MovieDetailsPage;