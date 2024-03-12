import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from "../../../Context/AuthContext";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MyAppoinments = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(UserContext);

  const { data: appoinments = [] } = useQuery({
    queryKey: ["appoinments"],
    queryFn: async () => {
      const result = await axiosPublic.get(`myAppoinments?email=${user.email}`);
      return result.data;
    },
  });
  // console.log(appoinments);

  return (
    <div>
      <h1 className="text-4xl m-9 border-l-8 border-[#F7A582] p-3 font-bold">
        My Appoinments: {appoinments.length}
      </h1>
      <div className="overflow-x-auto bg-white md:p-10 rounded-lg m-4 md:m-10">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-300">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Service Name</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appoinments.map((appoinment, index) => (
              <tr key={appoinment._id}>
                <td>{index + 1}</td>
                <td>{appoinment.name}</td>
                <td>{appoinment.date}</td>
                <td>{appoinment.service}</td>
                <td>
                  <button className="btn btn-sm">Pay Now</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinments;
