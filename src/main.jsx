import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto bg-[#E6F7FF]">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
