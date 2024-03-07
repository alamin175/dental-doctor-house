import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import DoctorDetails from "../Pages/Home/DoctorDetails/DoctorDetails";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/doctor/:id",
        element: <DoctorDetails></DoctorDetails>,
      },
    ],
  },
]);
