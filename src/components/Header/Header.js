import { Outlet} from "react-router-dom";
import { StyledHeader, Link } from "./Header.styled";

const Header = () => {
     
    return (
        <StyledHeader>
         <nav>
           <Link to='/' end>Home</Link>
           <Link to='movies'>Movies</Link>
         </nav>
         <Outlet />
        </StyledHeader>

    )


};

export default Header;