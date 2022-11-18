import { Outlet, NavLink } from "react-router-dom";

const Header = () => {
     
    return (
        <div>
         <header>
           <NavLink to='/'>Home</NavLink>
           <NavLink to=''>Movies</NavLink>
         </header>
         <Outlet />
        </div>

    )


};

export default Header;