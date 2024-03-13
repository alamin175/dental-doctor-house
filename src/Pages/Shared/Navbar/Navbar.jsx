import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../Context/AuthContext";
import img from "../../../assets/images/Other Image/image-removebg-preview.png";
import "./Navbar.css";

const Navbar = ({ isFixed }) => {
  const { user, logOut } = useContext(UserContext);
  const handleLogOut = () => {
    logOut().then(() => {
      //user logout
    });
  };

  const navOption = (
    <>
      <li>
        <NavLink to="/" activeClassName="active-link">
          <a>Home</a>
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" activeclassname="active-link">
          <a>About</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/appoinment" activeclassname="active-link">
          <a>Appoinment</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/doctors" activeclassname="active-link">
          <a>Doctor's</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" activeclassname="active-link">
          <a>Dashboard</a>
        </NavLink>
      </li>
      {user ? (
        <button className="btn bg-[#F7A582]" onClick={handleLogOut}>
          LogOut
        </button>
      ) : (
        <NavLink to="/login" activeclassname="active-link">
          <button className="btn" onClick={handleLogOut}>
            Login
          </button>
        </NavLink>
      )}
    </>
  );
  return (
    <div
      className={`navbar mx-auto  bg-black bg-opacity-30 text-white max-w-screen-xl z-10 ${
        isFixed ? "fixed" : ""
      } `}
    >
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
        <NavLink to="/">
          <img src={img} className="md:w-1/2" />
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 items-center">{navOption}</ul>
      </div>
    </div>
  );
};

export default Navbar;
