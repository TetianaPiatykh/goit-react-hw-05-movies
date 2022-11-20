import { useLocation } from 'react-router-dom';
import { StyledLink, StyledDiv, StyledUl } from './AddMovieInfo.styled';

export const AddMovieInfo = () => {

    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
    
    return (
        <StyledDiv>
            {/* <p>Additional information</p> */}
            <StyledUl>
                <li>
                    <StyledLink to={'cast'} state={{ from: backLinkHref }}>
                        Cast
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to={'reviews'} state={{ from: backLinkHref }}>
                         Reviews
                     </StyledLink>
                </li>
            </StyledUl>
        </StyledDiv>
    )

}
// export default AddMovieInfo;