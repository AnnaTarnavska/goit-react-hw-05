import axios from "axios";

const api_key = '7cd66e8cba8125b5139e7a6ef67c5abd'
const APIReadAccessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2Q2NmU4Y2JhODEyNWI1MTM5ZTdhNmVmNjdjNWFiZCIsIm5iZiI6MTc0NDk3MzY0My4zMjA5OTk5LCJzdWIiOiI2ODAyMmY0YmIxMTNmZjg3MjNkOTk5YzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3nVwznv4Um6nG-OWox2CG8PRkSAf2fwSqoSa-a7yBtg';
const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2Q2NmU4Y2JhODEyNWI1MTM5ZTdhNmVmNjdjNWFiZCIsIm5iZiI6MTc0NDk3MzY0My4zMjA5OTk5LCJzdWIiOiI2ODAyMmY0YmIxMTNmZjg3MjNkOTk5YzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3nVwznv4Um6nG-OWox2CG8PRkSAf2fwSqoSa-a7yBtg`,
    },
}
export const fetchTrendingMovies = async (page) => {
    try {
        const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${api_key}&page=${page}`);
        return response.data.results.slice(0, 12);
    } catch (error) {
        console.log('Error fetching trending movies:', error);
        throw error;
    }  
};

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}search/movie?api_key=${api_key}&query=${query}`);
        return response.data.results;
    } catch (error) {
        console.log('Error searching movies:', error);
        throw error;
    } 

};

export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}movie/${movieId}?api_key=${api_key}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching movie details:', error);
        throw error;
    } 

};

export const fetchMovieCast = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}movie/${movieId}/credits`, options);
        return response.data.cast;
    } catch (error) {
        console.log('Error fetching movie cast:', error);
        throw error;
    } 

};

export const fetchMovieReviews = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}movie/${movieId}/reviews`, options);
        return response.data.results;
    } catch (error) {
        console.log('Error fetching movie reviews:', error);
        throw error;
    } 

};