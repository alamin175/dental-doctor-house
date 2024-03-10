import { useQuery } from "@tanstack/react-query";
import { format, isBefore } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import img from "../../../assets/images/Other Image/appointment.jpg";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Appoinment = () => {
  const today = new Date();
  const [selectedDate, setDate] = useState(null);
  const [selectService, setSelectService] = useState(null);
  const axiosPublic = useAxiosPublic();
  //   console.log(selectedDate);
  console.log(selectService);

  const styles = {
    active: {
      backgroundColor: "black",
      text: "white",
    },
  };

  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("/services");
      return res.data;
    },
  });

  const handleSelectService = (title) => {
    return setSelectService(title);
  };

  let footer = <p className="text-green-700">Please pick a date</p>;
  if (selectedDate) {
    footer = (
      <p className="text-green-700">You picked {format(selectedDate, "PP")}.</p>
    );
  }

  /* optional~~ can't select the previous day */
  const handleDateSelect = (date) => {
    if (isBefore(date, today)) {
      alert("Cannot select a previous day");
      //   console.log("Cannot select today or previous day");

      return;
    }
    setDate(date);
  };

  //   const alertItem = () => {
  //     if (!selectService && selectedDate) {
  //       alert("select date");
  //     }
  //   };

  return (
    <div>
      <div className="w-full bg-emerald-800  h-[350px] flex justify-center items-center ">
        <h1 className="text-5xl border-l-8 border-[#F7A582] items-center p-2 text-white font-bold ">
          Appoinment
        </h1>
      </div>
      <div className="flex gap-10 mx-auto justify-center  items-center">
        <div className="m-9 ">
          <DayPicker
            mode="single"
            onDayClick={handleDateSelect}
            selected={selectedDate}
            disabledDays={{ before: today }}
            footer={footer}
          />
        </div>
        <div className="w-1/2">
          <img className="" src={img} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-[#F7A582] text-5xl text-center m-10">
          Please select a service
        </h1>
        <div className="grid grid-cols-3 m-4 gap-10">
          {services.map((service) => (
            <div
              key={service._id}
              onClick={() => handleSelectService(service.title)}
              className={`link no-underline flex shadow-lg m-4 p-4 gap-4 ${
                selectService === service.title ? "bg-blue-500 text-white" : ""
              }`}
            >
              <img className="w-20" src={service.image} alt="" />
              <h3 className="text-3xl place my-auto font-semibold">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="text-center m-10">
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click on ✕ button to close
              </p>
            </div>
          </dialog>
          <button
            onClick={() => {
              if (!selectService || !selectedDate) {
                alert("Please select a service and a date.");
              } else {
                document.getElementById("my_modal_3").showModal();
              }
            }}
            // id="booking"
            className="btn text-lg bg-[#f7A582] w-1/4 hover:bg-[#f39770]"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
