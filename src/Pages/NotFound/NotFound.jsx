import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import notFoundImg from "../../assets/images/Other Image/404 Error with a cute animal-bro.png";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Helmet>
        <title>Not Found - Doc House</title>
      </Helmet>
      <div>
        <img
          className=" text-center mx-auto md:w-1/2"
          src={notFoundImg}
          alt=""
        />
      </div>

      <Link
        to="/"
        className=" p-4 bg-red-400 text-black font-bold text-lg mx-auto flex justify-center place-items-center md:w-2/6 rounded-lg"
      >
        <h3>Back to Homepage</h3>
      </Link>
    </div>
  );
};

export default NotFound;
