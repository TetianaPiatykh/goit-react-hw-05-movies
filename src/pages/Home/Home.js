import { getTrendingMovies } from "api";
import { useEffect, useState } from "react";
import MovieList from "components/MovieList/MovieList";


const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([]);

    useEffect(() => {
          async function getTrends() {
      try {
        const response = await getTrendingMovies();
        if (response) {
          setTrendingMovies(response);
        }
      } catch {
        alert('Ops, try one more time');
      } finally {
      }
    }
    getTrends();
    }, [])

    return (
        <div>
            <MovieList movies={trendingMovies} />   
        </div>
        
    )

    
};

export default Home;