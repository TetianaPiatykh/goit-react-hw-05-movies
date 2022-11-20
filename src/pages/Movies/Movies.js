import MovieList from "components/MovieList/MovieList";
import { useState, useEffect  } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBox from "components/SearchBox/SearchBox";
import { getSearchMovies } from "api";

 const Movies = () => {
//   const movie = getSearchMovies();
    const [searchParams] = useSearchParams('');
    const [findedMovies, setFindedMovies] = useState([]);
    const query = searchParams.get('query');

    useEffect(() => {
    async function searchMovies() {
      try {
        if (!query) {
          return;
        }
        const response = await getSearchMovies(query);

        if (response) {
          setFindedMovies(response.results);
        }
      } catch {
      } finally {
      }
    }
    searchMovies(query);
  }, [query]);


  return (
    <main>
        <SearchBox />
        { findedMovies && <MovieList movies={findedMovies} />}
    </main>
  );
};

export default Movies;