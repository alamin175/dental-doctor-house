import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useManageDoctors from "../../../hooks/useManageDoctors";

const ManageDoctors = () => {
  const axiosSecure = useAxiosSecure();
  const [doctors, refetch] = useManageDoctors();

  const deleteDoctor = async (id, user) => {
    Swal.fire({
      title: `Are you sure to delete this doctor - ${user}`,
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.delete(`doctor/${id}`);
        // console.log(result);
        if (result.data.deletedCount) {
          refetch();
          Swal.fire({
            title: "Doctor Deleted Successfully",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl border-l-8 border-[#F7A582] p-3 m-9 font-bold">
        Manage Doctor's: {doctors.length}
      </h1>
      <div className="overflow-x-auto bg-white md:p-10 rounded-lg m-4 md:m-10">
        <table className="table bg-white">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      //   className="rounded-full "
                      src={doctor.image}
                      alt=""
                    />
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.speciality}</td>
                <td>
                  <button
                    onClick={() => deleteDoctor(doctor._id, doctor.name)}
                    className="btn bg-red-700 text-white  hover:bg-red-600"
                  >
                    Delete Doctor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
