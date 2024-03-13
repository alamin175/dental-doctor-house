import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDoctors = () => {
  const axiosPublic = useAxiosPublic();

  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const doctor = await axiosPublic.get("doctors");
      return doctor.data;
    },
  });

  return [doctors, refetch];
};

export default useDoctors;
