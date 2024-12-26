import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import icon from "../assets/icon (2).png";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Queries</NavLink>
            </li>
            <li>
              <NavLink>Recommendation for me</NavLink>
            </li>
            <li>
              <NavLink>My Queries</NavLink>
            </li>
            <li>
              <NavLink>My Recommendation</NavLink>
            </li>
          </ul>
        </div>
        <img className="w-8" src={icon} alt="" />
        <a className="btn btn-ghost text-xl">Recommendo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/queries">Queries</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to={`/recommendation`}>Recommendation for me</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to="/myQueries">My Queries</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to="/myRecommendation">My Recommendation</NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link to="/login">
            <button
              onClick={userSignOut}
              className="px-4 p-2 bg-[#2B3440] rounded-none text-white font-semibold"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="px-4 p-2 bg-[#2B3440] rounded-none text-white font-semibold">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
