import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosPublic.get("allUsers");
      return result.data;
    },
  });
  return [users, refetch];
};

export default useUsers;
