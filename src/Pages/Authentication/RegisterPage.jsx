import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../CustomHooks/useAxios";
import SocialLogin from "./SocialLogin";

const RegisterPage = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        updateUserProfile(data.name, data.photoURL).then(() => {
          console.log("user profile info updated");
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user add in database");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(form, { replace: true });
            }
          });
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <SocialLogin></SocialLogin>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
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
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
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
                  {...register("password", { required: true })}
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
                  {...register("photoURL", { required: true })}
                  type="url"
                  placeholder="Photo-URL"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary"
                />
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
