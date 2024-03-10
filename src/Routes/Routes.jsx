import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Appoinment from "../Pages/Home/Appoinment/Appoinment";
import DoctorDetails from "../Pages/Home/DoctorDetails/DoctorDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";

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
        loader: () => fetch("/expert.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/appoinment",
        element: <Appoinment></Appoinment>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
