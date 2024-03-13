import { useEffect, useState } from "react";
import useUsers from "./useUsers";

const useAdmin = () => {
  const [users] = useUsers();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Use find to check if any user has the role 'admin'
    const isAdminUser = users.find((user) => user.role === "admin");
    setIsAdmin(!!isAdminUser); // Set isAdmin to true if an admin user is found
  }, [users]);

  return [isAdmin];
};

export default useAdmin;
