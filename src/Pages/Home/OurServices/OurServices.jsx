import img from "../../../assets/images/Other Image/woman-with-stethoscope-holding-clipboard.jpg";
import img1 from "../../../assets/images/Other Image/teeth.png";
import { FaRegClock } from "react-icons/fa";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
const OurServices = () => {
  return (
    <div>
      <div className="md:flex w-10/12 mx-auto my-20">
        <img className="md:w-1/2 mr-10" src={img} alt="" />
        <div>
          <h1 className=" font-bold text-5xl mt-5">Our Services</h1>
          <p className="my-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <ul className="menu menu-horizontal font-bold w-full flex justify-between bg-orange-400 rounded-box">
            <li>
              <a className="tooltip" data-tip="Home">
                Cavity Protection
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Details">
                Cosmetic Density
              </a>
            </li>
            <li>
              <a className="tooltip" data-tip="Stats">
                Oral Sergery
              </a>
            </li>
          </ul>
          <img className="my-7" src={img1} alt="" />
          <h1 className=" font-bold text-4xl">Electro Gastrology Therapy</h1>
          <p className="my-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error. Sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
          <button className="btn outline outline-2 outline-orange-400 my-5 bg-transparent hover:bg-orange-400">
            More Details
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-10 w-10/12 my-16 mx-auto">
        <div className="flex bg-emerald-700 rounded-xl p-4">
          <FaRegClock className="text-4xl my-auto m-3"></FaRegClock>
          <div>
            <h3 className="text-3xl font-bold">Opening Hours</h3>
            <p>Open 9.00 am to 5.00 pm Everyday</p>
          </div>
        </div>
        <div className="flex bg-orange-400 rounded-xl p-4">
          <FaLocationDot className="text-4xl my-auto m-3"></FaLocationDot>
          <div>
            <h3 className="text-3xl font-bold">Our Location</h3>
            <p>Gulshan, Dhaka-1212, Bangladesh. </p>
          </div>
        </div>
        <div className="flex bg-emerald-700 rounded-xl p-4">
          <FaPhoneVolume className="text-4xl my-auto m-3"></FaPhoneVolume>
          <div>
            <h3 className="text-3xl font-bold">Contact Us</h3>
            <p>+88 01586075605</p>
            <p>+88 01970929745</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
