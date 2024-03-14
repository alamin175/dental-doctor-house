import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const DoctorDetails = () => {
  const axiosPublic = useAxiosPublic();

  const { id } = useParams();
  // console.log(id);
  // const doctors = useLoaderData();
  // const idInt = parseInt(id);
  // const details = doctors.find((doctor) => doctor.id === idInt);
  // console.log(details);

  const { data: details = [] } = useQuery({
    queryKey: ["details"],
    queryFn: async () => {
      const result = await axiosPublic.get(`doctorDetails/${id}`);

      return result.data;
    },
  });

  return (
    <div>
      <div className="w-full bg-emerald-800  h-[350px] flex justify-center items-center ">
        <h1 className="text-5xl text-white font-bold border-l-8 border-[#F7A582] p-3">
          Doctor Profile
        </h1>
      </div>
      <section className="bg-[#E6E6E6] p-4 md:p-10">
        <div className="md:flex p-6 bg-white md:w-10/12 items-center gap-16 mx-auto m-10">
          <div>
            <img className="md:w-56 " src={details.image} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl mt-4 md:mt-0 ">{details.name}</h1>
            <p>{details.post}</p>
            <p className="flex text-orange-500">
              {Array.from({ length: details.rating }, (_, index) => (
                <FaStar key={index} />
              ))}
            </p>
            <p className="flex items-center gap-2">
              <FaLocationDot /> {details.location}
            </p>

            <div className="md:flex gap-3">
              {details.specialization?.slice(0, 2).map((special, index) => (
                <p
                  key={index}
                  className="border-2 border-gray-400 p-2 mb-4 md:mb-0 rounded-lg "
                >
                  {special}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto md:w-10/12 bg-white justify-center">
          <div className="w-11/12 mt-6 mx-auto">
            <ul className="menu menu-horizontal font-bold w-full flex justify-between bg-orange-400 rounded-box">
              <li>
                <a
                  className="tooltip"
                  data-tip="
                Overview"
                >
                  Overview
                </a>
              </li>
              <li>
                <a className="tooltip" data-tip="Locations">
                  Locations
                </a>
              </li>
              <li>
                <a className="tooltip" data-tip={`${details.rating} star`}>
                  Reviews
                </a>
              </li>
              <li>
                <a className="tooltip" data-tip="6pm - 11pm">
                  Business Hours
                </a>
              </li>
            </ul>
          </div>
          <div className="m-8">
            <h2 className="mb-3 font-bold">About Me</h2>
            <p className="text-gray-500"> {details.details}</p>
            <div className="md:flex">
              <div className="w-full">
                <div>
                  <h2 className="my-5 font-bold text-xl">Education</h2>
                  <li className="font-bold mb-3 ml-3"> {details.varsity1}</li>
                  <div className="text-gray-500 ml-10 mb-4">
                    <p>{details.graduate1}</p>
                    <p>{details.passed1}</p>
                  </div>
                  <li className="font-bold mb-3 ml-3"> {details.varsity2}</li>
                  <div className="text-gray-500 ml-10 ">
                    <p>{details.graduate2}</p>
                    <p>{details.passed2}</p>
                  </div>
                </div>

                <div>
                  <h2 className="my-5 mt-8 font-bold text-xl">
                    Work & Experience
                  </h2>

                  {details.experience?.map((experience) => (
                    <div key={experience.name} className="mb-4">
                      <li className="font-bold ml-3"> {experience.name}</li>
                      <p className="text-gray-500 ml-8">{experience.years}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h2 className="my-5 mt-8 font-bold text-xl">Services</h2>

                  {details.services?.map((service) => (
                    <li className="ml-3 text-gray-500" key={service}>
                      {service}
                    </li>
                  ))}
                </div>
              </div>
              <div>
                <div>
                  <h2 className="my-5 mt-6 font-bold text-xl">Awards</h2>
                  {details.awards?.map((award) => (
                    <div key={award.name} className="ml-3 md:ml-8 mb-6">
                      <li>{award.year}</li>
                      <p className="font-bold ml-5 my-3 ">{award.name}</p>
                      <p className="ml-5 text-gray-500">{award.details}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h2 className="my-5 mt-6 font-bold text-xl">
                    Specializations
                  </h2>
                  {details.specialization?.map((special) => (
                    <li className="text-gray-500 ml-3 md:ml-8" key={special}>
                      {special}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorDetails;
