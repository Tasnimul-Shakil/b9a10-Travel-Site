import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "../../../assets/user.png";
import noImage from "../../../assets/No_image.jpg";
import mainLogo from "../../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSighOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  const [theme, setTheme]= useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  
  const handleToggle = (e) => {
    if (e.target.checked){
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  };
  
  useEffect( () => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  },[theme]);



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
        <a href="/" className="btn border-none bg-transparent  hover:bg-[#f0ca4e] text-xl text-[#55D4AB] hover:text-[#072F53]">
          <img src={mainLogo} alt="" />
          TravelCraft
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1 ">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2 ">
      <label className="cursor-pointer grid place-items-center">
          <input type="checkbox" 
          onChange={handleToggle} 
          checked={theme === 'light' ? false : true} 
          className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
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

      </div>
    </div>
  );
};

export default Navbar;
