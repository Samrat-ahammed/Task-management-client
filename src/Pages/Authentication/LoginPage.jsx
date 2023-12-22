import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const LoginPage = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Login Successfully",
          text: "",
          footer: "",
        });
        navigate(form, { replace: true });
        console.log(result.user);
      })
      .catch((err) => console.error(err));
  };

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
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
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
                  name="password"
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
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
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
