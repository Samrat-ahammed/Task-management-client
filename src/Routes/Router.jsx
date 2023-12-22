import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import HomePage from "../Pages/HomePage/HomePage";
import AllTask from "../Pages/AllTask";
import LoginPage from "../Pages/Authentication/LoginPage";
import RegisterPage from "../Pages/Authentication/RegisterPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddTask from "../Pages/Dashboard/AddTask";
import UpdateTask from "../Pages/Dashboard/UpdateTask";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/allTask",
        element: <AllTask />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },

  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      { path: "addTask", element: <AddTask></AddTask> },
      { path: "updateTask", element: <UpdateTask></UpdateTask> },
    ],
  },
]);
