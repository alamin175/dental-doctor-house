import { useQuery } from "@tanstack/react-query";
import { format, isBefore } from "date-fns";
import { useContext, useState } from "react";
import { DayPicker } from "react-day-picker";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import img from "../../../assets/images/Other Image/appointment.jpg";
import { UserContext } from "../../../Context/AuthContext";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Appoinment = () => {
  const today = new Date();
  const { user } = useContext(UserContext);
  const [selectedDate, setDate] = useState(null);
  const [selectService, setSelectService] = useState(null);
  const axiosPublic = useAxiosPublic();
  //   console.log(selectedDate);
  // console.log(selectService);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

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
      return;
    }
    setDate(date);
  };

  const onSubmit = async (data) => {
    const appoinmentDetails = {
      service: selectService,
      date: format(selectedDate, "PP"),
      email: user?.email,
      phoneNumber: data.number,
      name: data.name,
    };

    const confirmBooking = await axiosPublic.post(
      "/appoinment",
      appoinmentDetails
    );
    if (confirmBooking.data.insertedId) {
      reset();
      toast.success("Your Appoinment Booking Successful.");
      document.getElementById("my_modal_3").close();
    }
  };
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
                <button className=" bg-emerald-800 text-white btn-sm btn-circle  absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center m-6">
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Service Name</span>
                    </div>
                    <input
                      readOnly
                      value={selectService}
                      placeholder="Your Password"
                      className="input bg-slate-300 input-bordered input-success w-full max-w-xs"
                    />
                  </label>
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Date</span>
                    </div>
                    <input
                      value={selectedDate ? format(selectedDate, "PP") : ""}
                      readOnly
                      className="input bg-slate-300 input-bordered input-success w-full max-w-xs"
                    />
                  </label>{" "}
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Email</span>
                    </div>
                    <input
                      value={user?.email}
                      readOnly
                      className="input bg-slate-300 input-bordered input-success w-full max-w-xs"
                    />
                  </label>
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Name</span>
                    </div>
                    <input
                      {...register("name", { required: "Name field required" })}
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered input-success w-full max-w-xs"
                    />
                  </label>
                  {errors.name && (
                    <span className="text-red-600">{errors.name.message}</span>
                  )}
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Phone Number</span>
                    </div>
                    <input
                      {...register("number", {
                        required: "Your phone number must  need",
                      })}
                      type="number"
                      placeholder="Your Phone Number"
                      className="input input-bordered input-success w-full max-w-xs"
                    />
                  </label>
                  {errors.number && (
                    <span className="text-red-600">
                      {errors.number.message}
                    </span>
                  )}
                </div>

                {errors.exampleRequired && <span>This field is required</span>}

                <input className="btn" type="submit" value="Booking Confirm" />
              </form>
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
