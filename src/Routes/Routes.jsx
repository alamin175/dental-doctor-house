import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main/Main";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllAppoinment from "../Pages/Dashboard/AllAppoinment/AllAppoinment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppoinments from "../Pages/Dashboard/MyAppoinments/MyAppoinments";
import MyHistory from "../Pages/Dashboard/MyHistory/MyHistory";
import MyReviews from "../Pages/Dashboard/MyReviews/MyReviews";
import Statistics from "../Pages/Dashboard/Statistics/Statistics";
import About from "../Pages/Home/About/About";
import Appoinment from "../Pages/Home/Appoinment/Appoinment";
import DoctorDetails from "../Pages/Home/DoctorDetails/DoctorDetails";
import Doctors from "../Pages/Home/Doctors/Doctors";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute";
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
        // loader: () => fetch("/expert.json"),
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
        path: "/doctors",
        element: <Doctors></Doctors>,
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
        path: "myHistory",
        element: <MyHistory></MyHistory>,
      },
      {
        path: "myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addDoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "manageDoctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "statistics",
        element: (
          <AdminRoute>
            <Statistics></Statistics>
          </AdminRoute>
        ),
      },
      {
        path: "allAppoinment",
        element: (
          <AdminRoute>
            <AllAppoinment></AllAppoinment>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
