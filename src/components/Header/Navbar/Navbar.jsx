import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { GiOpenedFoodCan } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logoutUsers } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logoutUsers()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

    const links = (
      <>
        <li id="sidebar" className="mx-3">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li id="sidebar" className="mx-3">
          <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Add Product
          </NavLink>
        </li>
        <li id="sidebar" className="mx-3">
          <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            My Cart
          </NavLink>
        </li>
      </>
    );
    return (
      <div>
        <div className="navbar bg-[#262626] text-[#c5a35e] px-5 md:px-16 lg:px-20">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <Link
              to={"/"}
              className="btn btn-ghost normal-case items-center text-xs -ml-4 md:ml-0 md:text-xl"
            >
              <span className="text-xl md:text-5xl">
                <GiOpenedFoodCan></GiOpenedFoodCan>
              </span>
              <span className="text-white">Yummy</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <span className="mr-2 text-xs">{user?.displayName}</span>
                <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <button
                  onClick={handleLogout}
                  className=" text-xs w-16 h-9 p-2 bg-blue-900 text-white border-none rounded hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Log Out
                </button>
              </>
            ) : (
              <Link
                to={"/login"}
                className="text-xs w-24 h-9 p-2 flex justify-center items-center bg-blue-900 text-white border-none rounded hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;