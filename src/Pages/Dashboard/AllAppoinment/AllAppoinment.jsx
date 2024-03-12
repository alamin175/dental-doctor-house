import useAppoinment from "../../../hooks/useAppoinment";

const AllAppoinment = () => {
  const [appoinment] = useAppoinment();
  return (
    <div>
      <h1 className="text-4xl border-l-8 border-[#F7A582] p-3 m-9 font-bold">
        All Appoinment: {appoinment.length}
      </h1>
      <div className="overflow-x-auto bg-white md:p-10 rounded-lg m-4 md:m-10">
        <table className="table bg-white">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>#</th>
              <th>Name</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {appoinment.map((appoinment, index) => (
              <tr key={appoinment._id}>
                <td>{index + 1}</td>
                <td>{appoinment.name}</td>
                <td>{appoinment.service}</td>
                <td>{appoinment.date}</td>
                <td>{appoinment.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAppoinment;
