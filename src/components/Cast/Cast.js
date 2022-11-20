import { useState, useEffect } from 'react';
import { getMovieCasts } from "api";
import { useParams } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';

const Cast = () => {
    const { id } = useParams();
    const [movieCasts, setMovieCasts] = useState([]);

    useEffect(() => {
        async function getCasts() {
            try {
                const response = await getMovieCasts(id);
                setMovieCasts(response);
            } catch {
            } finally {
            }
        }
        getCasts(id);

    }, [id]);

    return (
        movieCasts.map(({ id, name, character, profile_path }) => 
           ( 
            <li key={id}>
              <img
              src={
                profile_path !== null
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  :  (<IoIosPerson size={230} />)
              }
              alt=""
              width="180px"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
            )
            )
    )
}
export default Cast;