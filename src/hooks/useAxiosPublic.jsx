import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://dental-doctor-house-server.onrender.com",
  baseURL: "http://localhost:5000/",
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
