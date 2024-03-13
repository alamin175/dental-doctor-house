import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://dental-doctor-house-server.onrender.com/",
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
