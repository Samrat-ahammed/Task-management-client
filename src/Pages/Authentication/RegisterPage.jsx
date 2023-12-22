import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="w-full">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/4Nxsm4N/6794635.jpg" }}
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo-URL"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <h4 className="mx-auto text-center">
              Already Have Account ?{" "}
              <Link to={"/login"} className="text-blue-600 font-semibold">
                Login
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
