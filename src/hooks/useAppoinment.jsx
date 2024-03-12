import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAppoinment = () => {
  const axiosPublic = useAxiosPublic();

  const { data: appoinment = [] } = useQuery({
    queryKey: ["appoinment"],
    queryFn: async () => {
      const result = await axiosPublic.get("allAppoinment");
      return result.data;
    },
  });

  return [appoinment];
};

export default useAppoinment;
