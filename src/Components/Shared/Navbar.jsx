import { Link } from "react-router-dom";
import navBarLogo from "../../assets/favo.ico.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then((res) => {
        Swal.fire({
          icon: "error",
          title: "Logout Successfully",
          text: "",
          footer: "",
        });
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };
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
      <Link to={"/about"}>
        <li>
          <a>About</a>
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
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.ibb.co/KDXmPL9/avater.png"
                  }
                />
              </div>
            </div>
            {user ? (
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user?.displayName}</a>
                </li>
                <li>
                  <a>{user?.email}</a>
                </li>
                <li>
                  <Link to={"/dashboard/addTask"}>Dashboard</Link>
                </li>
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
