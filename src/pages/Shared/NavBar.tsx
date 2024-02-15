import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import { NavLink } from "react-router-dom";
import navTitle from "../../assets/large-removebg-preview.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 w-full z-50 shadow-md">
      <nav className="flex justify-between items-center px-2 md:px-0  w-full max-w-[1300px] mx-auto h-full">
        <div className="flex items-center gap-3">
          {/* <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary flex items-center">
            Urban <span className="text-primary">Winter Clothes </span>{" "}
            <Snowflake className="ml-2 h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
          </h2> */}
          <img className="h-14 md:h-16" src={navTitle} alt="" />
        </div>

        <div className="hidden sm:flex space-x-5 text-sm lg:text-base text-secondary">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/admin">Dashboard</NavLink>
        </div>

        <div className="flex items-center gap-2">
          <CircleUserRound className="h-7 w-7 sm:h-8 sm:w-8 text-secondary" />
          <Button className=" rounded-none font-bold px-4 sm:px-6">
            Logout
          </Button>
        </div>

        {/* Toggle Menu */}
        <div className="sm:hidden flex items-center ">
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Responsive Menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 w-full bg-primary font-semibold shadow-md">
          <ul className="py-2 text-sm text-gray-700">
            <li className="py-2 px-4 hover:bg-gray-100  border-b border-green-400">
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100  border-b border-green-400">
              <NavLink to="/about" onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 border-b border-green-400">
              <NavLink to="/contact" onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 border-b border-green-400">
              <NavLink to="/admin" onClick={toggleMenu}>
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
