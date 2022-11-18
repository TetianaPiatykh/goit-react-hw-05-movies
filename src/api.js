import axios from "axios";

const API_KEY = '2427728aad15a749245524c0a748833d';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['key'] = '29651354-06221cc15eb0ca625c8b2fb12';

export const getTrendingMovies = async () => {
    const url = `/trending/all/day?api_key=${API_KEY}`;
    const response = await axios.get(url);

    return response.data.results;
}


export const getSearchMovies = async query => {
  const url = `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;

  const response = await axios.get(url);

  return response.data;
};

export const getMovieInfo = async (id) => {
    const url = `/movie/${id}?api_key=${API_KEY}`;
    const response = await axios.get(url);

    return response.data;
    

};

export const getMovieCasts = async (id) => {
  const url = `/movie/${id}/credits?api_key=${API_KEY}`;
  const response = await axios.get(url);

  return response.data.cast;
};

export const getMovieRewiews = async id => {
  const url = `/movie/${id}/reviews?api_key=${API_KEY}`;
  const response = await axios.get(url);

  return response.data;
};

