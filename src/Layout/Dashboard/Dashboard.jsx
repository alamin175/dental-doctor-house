import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
  // const [isAdmin] = useAdmin();
  const isAdmin = true;
  return (
    <div>
      <div className="bg-emerald-700">
        <Navbar isFixed={false}></Navbar>
      </div>

      <div>
        <div className="drawer bg-slate-200 lg:drawer-open">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              title="Dashboard Element"
              className="btn flex text-[#F7A582] hover:bg-transparent justify-end bg-slate-200 text-4xl font-bold lg:hidden"
            >
              <GiHamburgerMenu></GiHamburgerMenu>
            </label>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
              {/* Sidebar content here */}
              {isAdmin ? (
                <div className="text-2xl">
                  <li>
                    <NavLink
                      className="text-xl text-gray-500 font-bold"
                      to="/dashboard/allUsers"
                    >
                      All Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-xl text-gray-500 font-bold"
                      to="/dashboard/addDoctor"
                    >
                      Add A Doctor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-xl text-gray-500 font-bold"
                      to="/dashboard/manageDoctors"
                    >
                      Manage Doctor's
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-xl text-gray-500 font-bold"
                      to="/dashboard/allAppoinment"
                    >
                      All Appoinment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-xl text-gray-500 font-bold"
                      to="/dashboard/statistics"
                    >
                      Statistics
                    </NavLink>
                  </li>
                </div>
              ) : (
                <div className="text-2xl">
                  <li>
                    <NavLink
                      className="text-xl text-gray-500 font-bold"
                      to="/dashboard/myAppoinments"
                    >
                      My Appoinments
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-xl text-gray-500 font-bold"
                      to="/dashboard/myHistory"
                    >
                      My History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-xl text-gray-500 font-bold"
                      to="/dashboard/myReviews"
                    >
                      My Reviews
                    </NavLink>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
