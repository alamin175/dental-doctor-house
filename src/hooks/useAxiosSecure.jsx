import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/AuthContext";

const axiosSecure = axios.create({
  baseURL: "https://doc-house-server-eta.vercel.app",
});

const useAxiosSecure = () => {
  const { user, logOut, loading } = useContext(UserContext);
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        loading(true);
        console.error("Access token is missing. Redirect to Login");
        navigate("/login");
        return Promise.reject("Access Token is missing");
      }

      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
