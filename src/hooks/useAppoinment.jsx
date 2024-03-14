import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAppoinment = () => {
  const axiosSecure = useAxiosSecure();

  const { data: appoinment = [] } = useQuery({
    queryKey: ["appoinment"],
    queryFn: async () => {
      const result = await axiosSecure.get("allAppoinment");
      return result.data;
    },
  });

  return [appoinment];
};

export default useAppoinment;
