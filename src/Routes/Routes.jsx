import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main/Main";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppoinments from "../Pages/Dashboard/MyAppoinments/MyAppoinments";
import About from "../Pages/Home/About/About";
import Appoinment from "../Pages/Home/Appoinment/Appoinment";
import DoctorDetails from "../Pages/Home/DoctorDetails/DoctorDetails";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Appoinment></Appoinment>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myAppoinments",
        element: <MyAppoinments></MyAppoinments>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addDoctor",
        element: <AddDoctor></AddDoctor>,
      },
      {
        path: "manageDoctors",
        element: <ManageDoctors></ManageDoctors>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
