import { useState } from "react";
import { Helmet } from "react-helmet";
import useDoctors from "../../../hooks/useDoctors";

const Doctors = () => {
  const [doctors, refetch] = useDoctors();
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? doctors.length : 4;
  return (
    <div>
      <Helmet>
        <title>Doctor's - Doc House</title>
      </Helmet>
      <div className="w-full bg-emerald-800  h-[350px] flex justify-center items-center ">
        <h1 className="text-5xl text-white font-bold border-l-8 border-[#F7A582] p-3">
          Doctor's
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-fit lg:grid-cols-3 gap-8 gap-y-20 m-5 md:m-8 place-items-center">
        {doctors.slice(0, itemsToShow).map((doctor) => (
          <div
            key={doctor._id}
            className="card md:w-96 bg-base-100 h-fit shadow-xl"
          >
            <figure>
              <img className="w-full h-64" src={doctor.image} alt="Shoes" />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{doctor.name}</h2>
              <p>{doctor.description}</p>
              <p className="border-2 border-gray-400 w-fit text-center p-2 px-4 mb-4 md:mb-0 rounded-lg ">
                {doctor.speciality}
              </p>
            </div>
          </div>
        ))}
      </div>
      {doctors.length > 4 && (
        <div className="flex justify-center m-16">
          <button
            onClick={() => {
              setShowAll(!showAll);
            }}
            className="btn hover:bg-[#f8804c] md:w-1/3 text-lg bg-[#F7A582]"
          >
            {" "}
            {showAll ? "Show Less" : "Show All Doctor"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Doctors;
