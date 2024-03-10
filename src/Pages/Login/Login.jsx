import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";
import { toast, Bounce } from "react-toastify";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { signIn } = useContext(UserContext);

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email);
    signIn(email, password)
      .then((currentUser) => {
        console.log(currentUser.user);
        if (currentUser.user) {
          toast.success("User Logged in Successfully!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          reset();
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <div className="md:flex">
        <div className="flex items-center bg-emerald-800 md:w-1/2 md:h-screen">
          <img src="https://i.ibb.co/dG1Wt6q/Mobile-login-pana.png" alt="" />
        </div>
        <div className="flex mx-auto my-10 justify-center  items-center">
          <div className="border-2 border-gray-300 p-8">
            <h1 className="text-4xl">Please Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </label>
              {errors.email && <span>This field is required</span>}

              <label className="form-control">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </label>
              {errors.password && <span>This field is required</span>}
              <br />
              <input
                className="btn bg-[#F7A582] w-full hover:bg-[#fa8c5c]"
                type="submit"
                value="Login"
              />
            </form>
            <p className="mt-5">
              Don't have an account?{" "}
              <span className="text-[#F7A582]">
                <Link to="/register">Register</Link>
              </span>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
