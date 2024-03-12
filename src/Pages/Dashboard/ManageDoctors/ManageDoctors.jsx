import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ManageDoctors = () => {
  const axiosPublic = useAxiosPublic();

  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const doctor = await axiosPublic.get("doctors");
      return doctor.data;
    },
  });

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
        const result = await axiosPublic.delete(`doctor/${id}`);
        console.log(result);
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
      <h1 className="text-4xl m-9 font-bold">
        Manage Doctor's: {doctors.length}
      </h1>
      <div className="overflow-x-auto bg-white p-10 rounded-lg m-10">
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
                <td>{doctor.special}</td>
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
