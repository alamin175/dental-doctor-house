import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(UserContext);
  const handleLogOut = () => {
    logOut().then(() => {
      //user logout
    });
  };

  const navOption = (
    <>
      <Link to="/">
        <li>
          <a>Home</a>
        </li>
      </Link>

      <li>
        <a>About</a>
      </li>
      <Link to="/appoinment">
        <li>
          <a>Appoinment</a>
        </li>
      </Link>
      {user ? (
        <button className="btn bg-[#F7A582]" onClick={handleLogOut}>
          LogOut
        </button>
      ) : (
        <Link to="/login">
          <button className="btn" onClick={handleLogOut}>
            Login
          </button>
        </Link>
      )}
    </>
  );
  return (
    <div className="navbar mx-auto  bg-black bg-opacity-30 text-white max-w-screen-xl z-10 fixed">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Doctor House</a>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 items-center">{navOption}</ul>
      </div>
    </div>
  );
};

export default Navbar;
