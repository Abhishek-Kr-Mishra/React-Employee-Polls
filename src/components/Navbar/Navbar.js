import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Nav = ({ currentUser, logOut }) => {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/" className="link" data-testid="navLink">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink to="/leaderboard" className="link" data-testid="navLink">
          {" "}
          Leaderboard{" "}
        </NavLink>
        <NavLink to="/add" className="link" data-testid="navLink">
          New Poll
        </NavLink>
      </div>
      <div>
        <strong data-testid="welcome-message">Welcome, {currentUser}</strong>
        <button className="log-out" onClick={(e) => logOut(e)}>
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Nav;
