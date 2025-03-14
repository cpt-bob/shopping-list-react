import { NavLink } from "react-router-dom";
import logo from "../assets/images/react.svg";

interface LinkProps {
  isActive: boolean;
}

const Navbar = () => {
  const loginClass = ({ isActive }: LinkProps): string =>
    isActive
      ? "text-white hover:text-red-500 px-3 py-2"
      : "text-white hover:text-red-500 px-2 py-2";

  const linkClass = ({ isActive }: LinkProps): string =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 rounded-md px-2 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Family Website
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/calendar" className={linkClass}>
                  Calendar
                </NavLink>
                <NavLink to="/shopping-list" className={linkClass}>
                  Shopping
                </NavLink>
                <NavLink to="/meal-prep" className={linkClass}>
                  Meal Prep
                </NavLink>
                <NavLink to="/login" className={loginClass}>
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
