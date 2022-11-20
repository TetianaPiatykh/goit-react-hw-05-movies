import { Outlet} from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "components/Loader/Loader";
import { StyledHeader, Link } from "./Header.styled";

const Header = () => {
     
    return (
        <StyledHeader>
         <nav>
           <Link to='/' end>Home</Link>
           <Link to='movies'>Movies</Link>
         </nav>
        <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>
        </StyledHeader>

    )


};

export default Header;