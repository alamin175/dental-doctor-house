import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-emerald-700">
        <Navbar isFixed={false}></Navbar>
      </div>

      <div>
        <div className="drawer bg-slate-200 lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Page content here */}
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
              {/* Sidebar content here */}
              <Link
                className="text-xl text-gray-500 font-bold"
                to="/dashboard/myAppoinments"
              >
                <li>
                  <a>My Appoinments</a>
                </li>
              </Link>
              <Link
                className="text-xl text-gray-500 font-bold"
                to="/dashboard/myAppoinments"
              >
                <li>
                  <a>My History</a>
                </li>
              </Link>
              <Link
                className="text-xl text-gray-500 font-bold"
                to="/dashboard/myAppoinments"
              >
                <li>
                  <a>My Reviews</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
