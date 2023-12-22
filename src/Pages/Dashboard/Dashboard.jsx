import { NavLink, Outlet } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl w-[400px] flex justify-center mx-auto text-center rounded-lg font-bold  mt-5 py-10 text-white bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400">
          Dashboard
        </h1>
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex justify-between mx-auto">
            <ul className="items-stretch hidden space-x-3 lg:flex mx-auto text-center">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-300 text-xl p-2 rounded-lg font-semibold text-black items-center text-center flex justify-center px-4"
                    : "bg-white text-xl rounded-lg font-semibold text-black items-center text-center flex justify-center px-4"
                }
              >
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                  >
                    Home
                  </a>
                </li>
              </NavLink>
              <NavLink
                to={"/dashboard/addTask"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-300 text-xl p-2 rounded-lg font-semibold text-black items-center text-center flex justify-center px-4"
                    : "bg-white text-xl rounded-lg font-semibold text-black items-center text-center flex justify-center px-4"
                }
              >
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                  >
                    Add-Task
                  </a>
                </li>
              </NavLink>

              <NavLink
                to={"/dashboard/toDoList"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-purple-300 text-xl p-2 rounded-lg font-semibold text-black items-center text-center flex justify-center px-4"
                    : "bg-white text-xl rounded-lg font-semibold text-black items-center text-center flex justify-center px-4"
                }
              >
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                  >
                    To-Do-List
                  </a>
                </li>
              </NavLink>
            </ul>
          </div>
        </header>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
