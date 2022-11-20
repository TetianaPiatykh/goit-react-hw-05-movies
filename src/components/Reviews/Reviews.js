import { useState, useEffect } from 'react';
import { getMovieReviews } from "api";
import { useParams } from 'react-router-dom';
import { StyledDiv } from './Reviews.styled';

const Reviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function getReviews() {
            try {
                const response = await getMovieReviews(id);
                if (response) {
                    setReviews(response.results);
                  }

            } catch {
                 alert('Something went wrong. Try again');
            } finally {
            }
        }
        getReviews(id);

    }, [id]);
    console.log(reviews);

    if (reviews.length === 0) {
        return (
            <p>We don`t have any reviews for this movie.</p>
        )
    } else {
            return (
    <StyledDiv>
        <ul>
          {reviews && reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
    </StyledDiv>
    )
    }

    
}
export default Reviews;
 