import { PieChart } from "@mui/x-charts";
import React from "react";
import useAppoinment from "../../../hooks/useAppoinment";
import useDoctors from "../../../hooks/useDoctors";
import useUsers from "../../../hooks/useUsers";

const Statistics = () => {
  const [doctors] = useDoctors();
  const [appoinment] = useAppoinment();
  const [users] = useUsers();

  return (
    <div>
      <h1 className="text-4xl m-9 font-bold border-l-8 border-[#F7A582] p-3">
        Statistics
      </h1>
      <div className="bg-white w-11/12 flex md:w-1/2 md:p-10 my-10 rounded-lg mx-auto">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: appoinment.length, label: "Appoinment" },
                { id: 1, value: users.length, label: "Patient" },
                { id: 2, value: doctors.length, label: "Doctor's" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
    </div>
  );
};

export default Statistics;
