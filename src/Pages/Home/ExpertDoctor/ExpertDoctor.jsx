import { useQuery } from "@tanstack/react-query";
import { FaCalendarCheck, FaDollarSign, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ExpertDoctor = () => {
  const axiosPublic = useAxiosPublic();

  const { data: expertDoctor = [] } = useQuery({
    queryKey: ["expertDoctors"],
    queryFn: async () => {
      const result = await axiosPublic.get("expertDoctors");
      return result.data;
    },
  });

  return (
    <div className="my-16">
      <h3 className="mb-4 text-center text-2xl md:text-5xl font-bold">
        Our Expert Doctor's
      </h3>
      <div className="grid grid-cols-1 gap-4 m-4 md:grid-cols-2 lg:grid-cols-3  place-items-center">
        {expertDoctor.map((doctor) => (
          <div
            key={doctor.name}
            className="card md:w-96 bg-base-100 shadow-xl "
          >
            <figure className="px-4 pt-10">
              <img
                src={doctor.image}
                alt="Shoes"
                className="rounded-xl h-64  w-full"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{doctor.name}</h2>
              <p>{doctor.title}</p>
              <p className="flex text-xl text-orange-600 mb-6 items-center">
                {Array.from({ length: doctor.rating }, (_, index) => (
                  <FaStar key={index} />
                ))}
              </p>
              <div className="flex items-center gap-3">
                <FaLocationDot></FaLocationDot>
                <p>{doctor.location}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCalendarCheck></FaCalendarCheck>
                <p>Available on {doctor.available}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaDollarSign></FaDollarSign>
                <p>${doctor.price}</p>
              </div>
              <div className="card-actions">
                <Link className="w-full" to={`/doctor/${doctor._id}`}>
                  <button className="btn btn-outline border-orange-500 mt-6 hover:border-orange-500 hover:bg-orange-500 w-full ">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertDoctor;
