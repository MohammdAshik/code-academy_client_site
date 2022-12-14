import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiQuickbooks } from "react-icons/si";
import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../Contaxt/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((e) => console.error(e));
  };
  return (
    <div className="h-[50px] w-[98%] mx-auto flex bg-base-100 justify-between">
      <div className="flex">
        <Link
          to={"/"}
          className="btn btn-ghost flex items-center normal-case text-xl text-theme"
        >
          <SiQuickbooks className="text-yellow-500" />{" "}
          <span className="ml-1">Code-Academy</span>
        </Link>
      </div>

      <div className="hidden md:block">
        <Link
          to={"/courses"}
          className="btn btn-ghost mx-3 normal-case text-lg"
        >
          Courses
        </Link>
        <Link to={"/faq"} className="btn btn-ghost mx-3 normal-case text-lg">
          FAQ
        </Link>
        <Link to={"/blog"} className="btn btn-ghost mx-3 normal-case text-lg">
          Blog
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        {/* dark mode light mode toggle */}

        <label className="swap swap-rotate mr-3">
          <input type="checkbox" />

          <svg
            className="swap-on fill-current w-6 h-6 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user?.uid ? (
          <div className="flex items-center">
            <img
              title={user?.displayName}
              className="w-[35px] h-[35px] rounded-full"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
              }
              alt=""
            ></img>
            <Link
              onClick={handleLogout}
              className="btn btn-ghost mx-1 normal-case text-lg"
            >
              <FiLogOut />
            </Link>
          </div>
        ) : (
          <div>
            <Link
              to={"/login"}
              className="btn btn-ghost mx-1 normal-case text-lg"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="btn btn-ghost mx-1 normal-case text-lg"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      {/* phone toggle navbar  */}
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-square btn-ghost ">
          <GiHamburgerMenu className="text-xl" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            {user?.uid ? (
              <div className="flex flex-col">
                <img
                  title={user?.displayName}
                  className="w-[35px] h-[35px] rounded-full"
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
                  }
                  alt=""
                ></img>
                <Link
                  onClick={handleLogout}
                  className="btn btn-ghost mx-1 normal-case text-lg"
                >
                  <FiLogOut />
                </Link>
              </div>
            ) : (
              <div className="flex flex-col">
                <Link
                  to={"/login"}
                  className="btn btn-ghost mx-1 normal-case text-lg"
                >
                  Login
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link
              to={"/courses"}
              className="btn btn-ghost mx-3 normal-case text-lg"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to={"/faq"}
              className="btn btn-ghost mx-3 normal-case text-lg"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to={"/blog"}
              className="btn btn-ghost mx-3 normal-case text-lg"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
