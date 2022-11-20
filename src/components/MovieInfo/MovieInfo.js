import PropTypes from 'prop-types';
import { MovieInfoDiv, InfoDiv } from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
    
  const userScore = `${Math.round(movie.vote_average * 10)} %`;
  const movieRelease = new Date(movie.release_date).getFullYear();
  const movieTitle = movie.original_title;
    const movieGenres = movie.genres.map(genre => genre.name).join(' ');
    
     return  ( <MovieInfoDiv>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
        width="240px"
      />
      <InfoDiv>
        <h2>
          {movieTitle} ({movieRelease})
        </h2>
        <p>
          User Score: {userScore}
        </p>
        <h3>Overview:</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>{movieGenres}</p>
      </InfoDiv>
    </MovieInfoDiv>
  );   
}

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};