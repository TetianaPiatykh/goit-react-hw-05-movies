import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieInfo } from 'api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { BackLink } from "components/BackLink/BackLink";
import {AddMovieInfo} from 'components/AddMovieInfo/AddMovieInfo';

const MovieDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function getMoviesDetails() {
            try {
                const response = await getMovieInfo(id);
                setMovie(response);
            } catch {
            } finally {
            }
        }
        getMoviesDetails(id);

    }, [id]);

    
    return (
     movie && (
        <main>
            <div>
                <BackLink to={backLinkHref}>Back to products</BackLink>
                    <MovieInfo movie={movie}></MovieInfo>
                    <AddMovieInfo />
                <Suspense fallback={<div>Loading page...</div>}>
                 <Outlet />
                </Suspense>
                
            </div>
        </main>
        )
        
    );

};

export default MovieDetails;
