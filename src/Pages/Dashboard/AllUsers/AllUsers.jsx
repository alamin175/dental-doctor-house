import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUsers from "../../../hooks/useUsers";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const [users, refetch] = useUsers();

  const makeAdmin = async (email) => {
    Swal.fire({
      title: `Want to make admin - ${email}`,
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.patch(`makeAdmin/${email}`);
        console.log(result);
        if (result.data.modifiedCount) {
          refetch();
          Swal.fire({
            title: `${email} is now Admin`,
            text: "",
            icon: "success",
          });
        }
      }
    });
  };

  const deleteUser = async (id, email) => {
    Swal.fire({
      title: `Are you sure? want to delete user- ${email}`,
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await axiosSecure.delete(`user/${id}`);
        // console.log(result);
        if (result.data.deletedCount) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl m-9 font-bold border-l-8 border-[#F7A582] p-3">
        All Users: {users.length}
      </h1>
      <div className="overflow-x-auto bg-white md:p-10 rounded-lg m-4 md:m-10">
        <table className="table bg-white">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <p className="font-bold text-green-700">Admin</p>
                  ) : (
                    <button
                      onClick={() => makeAdmin(user.email)}
                      className="btn bg-emerald-800 hover:bg-emerald-600 text-white"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => deleteUser(user._id, user.email)}
                    className="btn bg-red-700 text-white  hover:bg-red-600"
                  >
                    Delete User
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

export default AllUsers;
