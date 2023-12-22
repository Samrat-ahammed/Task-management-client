import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mt-14">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/pWX5DyM/7673026.jpg" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <Link className="mb-5 text-5xl font-bold">Welcome</Link>
            <p className="mb-5">
              Effortlessly manage your tasks with our intuitive task management
              platform. Streamline your workflow and boost productivity with our
              comprehensive task management solution. Stay organized and on top
              of your to-do list with our user-friendly task management website.
            </p>
            {!user && (
              <Link to={"/login"} className="btn btn-accent">
                Let’s Explore
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
