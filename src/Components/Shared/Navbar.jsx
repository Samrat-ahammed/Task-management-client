import { Link } from "react-router-dom";
import navBarLogo from "../../assets/favo.ico.png";

const Navbar = () => {
  const navLinks = (
    <>
      <Link to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to={"/allTask"}>
        <li>
          <a>Task</a>
        </li>
      </Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#E6F7FF]">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
            >
              {navLinks}
            </ul>
          </div>
          <div className="btn btn-ghost text-xl items-center">
            <div className="w-[300px] flex justify-center items-center">
              <img className="w-[20%]" src={navBarLogo} alt="" />
              <span className="w-full text-cyan-800">Task-Management</span>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">samrrat ahammed</a>
              </li>
              <li>
                <a>samoiuv@gmail.com</a>
              </li>
              <Link to={"/dashboard"}>
                <a>Dashboard</a>
              </Link>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
