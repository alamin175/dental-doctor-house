import { useQuery } from "@tanstack/react-query";
import { format, isBefore } from "date-fns";
import { useContext, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import img from "../../../assets/images/Other Image/appointment.jpg";
import { UserContext } from "../../../Context/AuthContext";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Appoinment = () => {
  const today = new Date();
  const { user } = useContext(UserContext);
  const [selectedDate, setDate] = useState(null);
  const [selectService, setSelectService] = useState(null);
  const axiosSecure = useAxiosSecure();
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
      const res = await axiosSecure.get("/services");
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Cannot Select today or previous day",
      });
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

    const confirmBooking = await axiosSecure.post(
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
      <Helmet>
        <title>Appoinment - Doc House</title>
      </Helmet>
      <div className="w-full bg-emerald-800  h-[350px] flex justify-center items-center ">
        <h1 className="text-5xl border-l-8 border-[#F7A582] p-3 items-center text-white font-bold ">
          Appoinment
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-10 justify-center items-center">
        <div className="m-9 mx-auto">
          <DayPicker
            mode="single"
            onDayClick={handleDateSelect}
            selected={selectedDate}
            disabledDays={{ before: today }}
            footer={footer}
          />
        </div>
        <div className="mx-auto p-4 md:w-1/2">
          <img className="" src={img} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-[#F7A582] text-3xl md:text-5xl text-center m-10">
          Please select a service
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 m-4 gap-10">
          {services.map((service) => (
            <div
              key={service._id}
              onClick={() => handleSelectService(service.title)}
              className={`link no-underline flex shadow-lg m-4 p-4 gap-4 ${
                selectService === service.title ? "bg-blue-500 text-white" : ""
              }`}
            >
              <img className="w-20" src={service.image} alt="" />
              <h3 className="text-2xl md:text-3xl place my-auto font-semibold">
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
                <div className="flex flex-col justify-center items-center m-6">
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Service Name</span>
                    </div>
                    <input
                      readOnly
                      value={selectService ? selectService : ""}
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
                      value={user?.email ? user.email : ""}
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

                <input
                  className="btn bg-emerald-800 hover:bg-emerald-900 text-white w-1/2"
                  type="submit"
                  value="Booking Confirm"
                />
              </form>
            </div>
          </dialog>

          <button
            onClick={() => {
              if (!selectedDate) {
                Swal.fire({
                  icon: "error",
                  title: "Please Select an appoinment date",
                });
              } else if (!selectService) {
                Swal.fire({
                  title: "Please select a service",
                  icon: "error",
                });
              } else {
                document.getElementById("my_modal_3").showModal();
              }
            }}
            // id="booking"
            className="btn text-lg bg-[#f7A582] w-full md:w-1/4 hover:bg-[#f39770]"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
