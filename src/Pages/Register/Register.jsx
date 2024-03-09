import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";
import { toast, Bounce, ToastContainer } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(UserContext);

  const onSubmit = (data) => {
    const { name, email, password } = data;

    createUser(email, password)
      .then((currentUser) => {
        console.log(currentUser.user);
        if (currentUser.user) {
          toast.success("User Created in Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          axiosPublic.post("users", {
            name: name,
            email: email,
          });
          reset();
          navigate("/");
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <div className="flex flex-row-reverse">
        <div className="flex items-center bg-emerald-800 w-1/2 h-screen">
          <img src="https://i.ibb.co/dG1Wt6q/Mobile-login-pana.png" alt="" />
        </div>
        <div className="flex mx-auto justify-center  items-center">
          <div className="border-2 border-gray-300 p-8">
            <h1 className="text-4xl">Please Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered input-success w-full max-w-xs"
                />
              </label>
              {errors.name && <span>This field is required</span>}
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
                value="Register"
              />
            </form>
            <p className="mt-5">
              Already have an account?{" "}
              <span className="text-[#F7A582] ">
                <Link to="/login">Login</Link>
              </span>
            </p>

            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
