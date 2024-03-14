import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useManageDoctors = () => {
  const axiosSecure = useAxiosSecure();

  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const doctor = await axiosSecure.get("doctors");
      return doctor.data;
    },
  });

  return [doctors, refetch];
};

export default useManageDoctors;
