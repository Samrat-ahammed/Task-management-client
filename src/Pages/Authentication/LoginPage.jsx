import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="w-full">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/grJRhd2/6794619.jpg" }}
      >
        <div className="flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left mt-10 mb-10">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="shrink-0 w-[500px] rounded-md max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <h4 className="mx-auto text-center">
              New Here? Please
              <Link to={"/register"} className="text-blue-600 font-semibold">
                {" "}
                Register
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
