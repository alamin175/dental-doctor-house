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
  console.log(appoinments);

  return (
    <div>
      <h1 className="text-4xl m-9 font-bold">
        My Appoinments: {appoinments.length}
      </h1>
      <div className="flex justify-center w-11/12 md:w-9/12 mx-auto bg-white  overflow-x-auto my-16">
        <table className="table-md md:m-10">
          {/* head */}
          <thead className="bg-slate-300">
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
