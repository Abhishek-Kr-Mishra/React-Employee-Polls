
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Nav = ({currentUser, logOut}) => {
  return (
    <nav className="nav">
        <div>
        <NavLink to="/" className="link"> Home </NavLink>
        <NavLink to="/leaderboard" className="link"> Leaderboard </NavLink>
        <NavLink to="/new" className="link">New Tweet</NavLink>
        </div>
        <div>
            <strong>
                Welcome, {currentUser}
            </strong>
            <button class="log-out" onClick={(e) => logOut(e)}>Log Out</button>
        </div>
    </nav>
  );
};

export default Nav;