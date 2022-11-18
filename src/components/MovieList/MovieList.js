
import PropTypes from 'prop-types';
import { NavLink, useLocation } from "react-router-dom";


const MovieList = ({ movies }) => {

    const location = useLocation();

    return (
        <ul>
            {movies.map(movie => {
                return (<li key={movie.id}>
                    <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                       {movie.title}
                    </NavLink>
                </li>);
            })}
        </ul>
    );
};
export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    })
  ),
};