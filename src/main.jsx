import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Router";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto bg-[#E6F7FF]">
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </div>
);
