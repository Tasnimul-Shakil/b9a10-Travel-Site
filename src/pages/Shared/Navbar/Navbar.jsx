import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "../../../assets/user.png";
import noImage from "../../../assets/No_image.jpg";
import mainLogo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSighOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/ViewAllCards">Tourist Spots</NavLink>
      </li>
      <li>
        <NavLink to="/AllBlogs">All Blog</NavLink>
      </li>
      <li>
        <NavLink to="/about"> About Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar ">
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
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a href="/" className="btn border-none bg-white hover:bg-[#f0ca4e] text-xl text-[#55D4AB] hover:text-[#072F53]">
          <img src={mainLogo} alt="" />
          TourPlanner
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1 ">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2 ">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                src={user ? user.photoURL || noImage : userDefaultPicture}
                alt=""
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow rounded-box w-52 bg-white"
          >
            <li>
              <Link to="/profile" className="justify-between">
                {user ? user.displayName : "profile"}
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            {user ? (
              <li>
                <a onClick={handleSighOut} className=" ">
                  Sign Out
                </a>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <a className=" ">Login</a>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <a className=" ">Register</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
