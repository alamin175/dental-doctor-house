import img2 from "../../../assets/images/doctor-img/doctor2.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="w-full bg-emerald-800 h-screen flex "
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)",
        // backgroundColor: "#84CC16",
      }}
    >
      <div className="hero md:flex mx-auto lg:mx-32 lg:-mt-32">
        <div className="text-white text-center md:text-left -mt-80 md:mt-0">
          <h1 className="text-2xl md:text-6xl  font-bold ">
            Your Best Medical <br />
            Help Center
          </h1>
          <p className="md:w-8/12 mx-6 md:mx-0 mt-4">
            Your Dental solution is now on your hand. You can easily use us to
            live long with your fresh teeth. Finding us is so easy for everyone.
          </p>
          <button className="btn bg-orange-400 mt-2 hover:bg-orange-500">
            All Services <FaArrowAltCircleRight></FaArrowAltCircleRight>
          </button>
        </div>
        <div className="relative ">
          <div className="absolute top-16 -left-20 lg:-left-48">
            <img
              className="w-32 md:w-36 lg:w-40"
              src={"https://i.ibb.co/55MpXZR/doctor1.jpg"}
              alt=""
            />
          </div>
          <div className="absolute top-40 -ml-2 lg:-ml-20">
            <img
              className="w-32 md:w-36 lg:w-40 h-44 lg:h-52"
              src={img2}
              alt=""
            />
          </div>
          <div className="relative top-8 left-20 lg:left-8">
            <img
              className="w-32 md:w-36 lg:w-40"
              src={"https://i.ibb.co/g77xQjd/doctor3.jpg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
