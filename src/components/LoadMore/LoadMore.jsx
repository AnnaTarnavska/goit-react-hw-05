import s from './LoadMore.module.css'

const LoadMore = ({ onClick, loading, hasMore }) => {
    
    return (
        <>
      {hasMore && (
        <button onClick={onClick} disabled={loading} className={s.loadBtn}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
      {!hasMore && <p>No more movies to load</p>}
    </>
    );
}

export default LoadMore;