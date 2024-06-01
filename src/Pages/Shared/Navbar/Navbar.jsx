import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContext';
import img from '../../../assets/images/Other Image/image-removebg-preview.png';
import './Navbar.css';

const Navbar = ({ isFixed }) => {
	const { user, logOut } = useContext(UserContext);
	const handleLogOut = () => {
		logOut().then(() => {
			//user logout
		});
	};

	const navOption = (
		<>
			<li>
				<NavLink to="/" activeClassName="active-link">
					<a>Home</a>
				</NavLink>
			</li>

			<li>
				<NavLink to="/about" activeClassName="active-link">
					<a>About</a>
				</NavLink>
			</li>
			<li>
				<NavLink to="/appoinment" activeClassName="active-link">
					<a>Appoinment</a>
				</NavLink>
			</li>
			<li>
				<NavLink to="/doctors" activeClassName="active-link">
					<a>Doctor's</a>
				</NavLink>
			</li>
			<li>
				<NavLink to="/dashboard" activeClassName="active-link">
					<a>Dashboard</a>
				</NavLink>
			</li>
			{user ? (
				<button
					className="btn bg-[#F7A582] md:ml-2 hover:bg-[#ec8b61] text-white"
					onClick={handleLogOut}
				>
					LogOut
				</button>
			) : (
				<NavLink to="/login">
					<button
						className="btn  w-full bg-[#F7A582] md:ml-2 hover:bg-[#ec8b61] text-white"
						onClick={handleLogOut}
					>
						Login
					</button>
				</NavLink>
			)}
		</>
	);
	return (
		<div
			className={`navbar mx-auto  bg-black bg-opacity-30 text-white max-w-screen-2xl z-10 ${
				isFixed ? 'fixed' : ''
			} `}
		>
			<div className="navbar-start ">
				<div className="dropdown ">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content  text-xl font-bold bg-[#F7A582] mt-3 z-[1] p-2 shadow  rounded-box w-52"
					>
						{navOption}
					</ul>
				</div>
				<NavLink to="/">
					<img src={img} className="md:w-1/2" />
				</NavLink>
			</div>
			<div className="navbar-end  hidden lg:flex ">
				<ul className="menu menu-horizontal text-[#F7A582] px-1 items-center">
					{navOption}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
