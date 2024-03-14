import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from "../Context/AuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useContext(UserContext);
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`admin/${user?.email}`);
      return result.data.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
