
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { StyledLink, StyledLi } from './MovieList.styled';


const MovieList = ({ movies }) => {

    const location = useLocation();

    return (
        <ul>
            {movies.map(movie => {
               return (<StyledLi key={movie.id}>
                    <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                       {movie.title}
                    </StyledLink>
                </StyledLi>);
            })}
        </ul>
    );
};
export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    })
  ),
};