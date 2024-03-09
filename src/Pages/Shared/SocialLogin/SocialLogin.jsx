import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../../Context/AuthContext";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useContext(UserContext);
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  const handleSignIn = () => {
    googleSignIn().then((result) => {
      if (result.user) {
        toast.success("User Login Successfully");
        axiosPublic.post("/users", {
          name: result.user.displayName,
          email: result.user.email,
        });
        navigate("/");
      }
    });
  };
  return (
    <div>
      <div className="divider divider-success">OR</div>
      <button
        onClick={handleSignIn}
        className="btn outline w-full bg-transparent outline-[#F7A582] hover:bg-stone-200"
      >
        <FcGoogle className="text-2xl"></FcGoogle> Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;
