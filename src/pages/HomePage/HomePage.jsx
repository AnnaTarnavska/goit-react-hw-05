import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../services/api";
import s from './HomePage.module.css';
import LoadMore from "../../components/LoadMore/LoadMore";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      try {
        const data = await fetchTrendingMovies(page);
        if (data.length === 0) {
          setHasMore(false);
        } else {
          setMovies((prevMovies) => [...prevMovies, ...data]);
        }
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
      setLoading(false);
    };

    loadMovies();
  }, [page]);

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

    return (
        <div>
            <h2 className={s.libraryTitle}>Trending today</h2>
            <MovieList movies={movies} />
            <LoadMore onClick={handleLoadMore} loading={loading} hasMore={hasMore}/>
        </div>
    );
};

export default HomePage;