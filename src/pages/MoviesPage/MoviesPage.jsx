import { useEffect, useState } from "react";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from './MoviesPage.module.css'
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryFromUrl = searchParams.get("query") || "";
    const [query, setQuery] = useState(queryFromUrl);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (!queryFromUrl) return;

        const fetchData = async () => {
            try {
                const results = await searchMovies(queryFromUrl);
                setMovies(results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchData();
    }, [queryFromUrl]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            setSearchParams({ query });
        }
    };




    return (
        <div>
            <h1>Search Movies</h1>
            <form className={s.searchForm} onSubmit={handleSearch}>
                <input className={s.searchInput} type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a movie" />
                <button className={s.searchBtn} type="submit">Search</button>
            </form>
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
};

export default MoviesPage;