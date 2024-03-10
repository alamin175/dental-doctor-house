import { useEffect } from "react";
import { useState } from "react";
import { FaCalendarCheck, FaDollarSign, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ExpertDoctor = () => {
  const [expertDoctor, setExpertDoctor] = useState([]);

  useEffect(() => {
    fetch("expert.json")
      .then((res) => res.json())
      .then((data) => setExpertDoctor(data));
  }, []);
  // console.log(expertDoctor);

  return (
    <div className="my-16">
      <h3 className="mb-4 text-center text-2xl md:text-5xl font-bold">
        Our Expert Doctor's
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
        {expertDoctor.map((doctor) => (
          <div key={doctor.name} className="card w-96 bg-base-100 shadow-xl ">
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
                <Link className="w-full" to={`/doctor/${doctor.id}`}>
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
