import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../CustomHooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location?.state : "/");
        const userInfo = {
          name: result.user.displayName,
          photoURL: result.user.photoURL,
          email: result.user.email,
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
          }
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="btn btn-outline btn-primary"
    >
      <div className="text-center items-center flex justify-center text-black font-semibold">
        <FcGoogle className="mr-3" /> Google
      </div>
    </button>
  );
};
export default SocialLogin;
