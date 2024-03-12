import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddDoctor = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const imageAPI = import.meta.env.VITE_IMAGE_API_KEY;
  const imageURL = `https://api.imgbb.com/1/upload?key=${imageAPI}`;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    const imageHost = await axiosPublic.post(imageURL, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(imageHost);
    if (imageHost?.data.success) {
      const details = {
        name: data.name,
        email: data.email,
        speciality: data.speciality,
        image: imageHost?.data.data.url,
      };

      const doctor = await axiosPublic.post("doctor", details);
      console.log(doctor);
      if (doctor.data.insertedId) {
        reset();
        toast.success("Doctor Added Successfully Completed");
        navigate("/dashboard/manageDoctors");
      }
    }
  };

  return (
    <div>
      <h1 className="text-4xl m-9 font-bold border-l-8 border-[#F7A582] p-3">
        Add A Doctor
      </h1>
      <div className="bg-white m-5 rounded-lg md:m-10 p-10 md:w-1/2 flex items-center ">
        <form
          className="flex flex-col w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="form-control ">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              {...register("name", { required: "Enter Doctor's Name" })}
              type="text"
              placeholder="Doctor's Name"
              className="input input-bordered "
            />
          </label>
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
          <label className="form-control ">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              {...register("email", { required: "Enter Doctor's Email" })}
              type="text"
              placeholder="Doctor's Email"
              className="input input-bordered "
            />
          </label>
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Select Speciality</span>
            </div>
            <select
              defaultValue={""}
              {...register("speciality", {
                required: "Select doctor's speciality",
              })}
              className="select select-bordered"
            >
              <option disabled value="">
                Doctor's Speciality
              </option>
              <option>Cavity Protection</option>
              <option>Pediatric Dental</option>
              <option>Teeth Cleaning</option>
              <option>Cosmetic Dentisty</option>
              <option>Teeth Orthodentics</option>
              <option>Oral Surgery</option>
            </select>
          </label>
          {errors.speciality && (
            <span className="text-red-600">{errors.speciality.message}</span>
          )}

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Image</span>
            </div>
            <input
              {...register("image", {
                required: "Doctor's image not selected",
              })}
              type="file"
              className="file-input file-input-bordered w-full "
            />
          </label>
          {errors.image && (
            <span className="text-red-600">{errors.image.message}</span>
          )}

          <input
            className="btn block bg-emerald-800 hover:bg-emerald-700 text-white my-5 mt-10"
            type="submit"
            value="Add Doctor"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
