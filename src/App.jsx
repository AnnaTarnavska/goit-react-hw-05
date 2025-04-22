import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import Navigation from './components/Navigation/Navigation';
// import MovieCast from './components/MovieCast/MovieCast';
// import MovieReviews from './components/MovieReviews/MovieReviews';
import { lazy, Suspense } from 'react';

const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'))
const App = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Navigation/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
              <Route path='cast' element={<MovieCast />} />
              <Route path='reviews' element={<MovieReviews/> } />
            </Route>
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App;
