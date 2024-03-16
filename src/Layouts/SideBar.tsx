import { cn } from "@/lib/utils";
import {
  GalleryHorizontal,
  Home,
  // LayoutDashboard,
  LogOut,
  PlusSquare,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import img from "../assets/large-removebg-preview.png";

const SideBar = () => {
  return (
    <aside className="bg-light-gray col-span-3 h-screen sticky top-0 left-0 overflow-auto p-5">
      <nav className="flex flex-col gap-2">
        <img className="mb-10 w-48 mx-auto" src={img} alt="" />
{/* 
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            cn(
              "p-2   border-2 border-primary text-white  hover:bg-primary text-primary hover:text-black italic-regular transition-all flex justify-center gap-2",
              { "bg-primary text-black": isActive }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink> */}
        <hr className="border border-slate-500 my-3" />
        <NavLink
          to="/dashboard/winter-clothes"
          className={({ isActive }) =>
            cn(
              "p-2   border-2 border-primary text-white  hover:bg-primary text-primary hover:text-black italic-regular transition-all flex justify-center gap-2",
              { "bg-primary text-black": isActive }
            )
          }
        >
          <GalleryHorizontal className="shrink-0" />
          <span className="truncate">All Winter Clothes</span>
        </NavLink>

        <NavLink
          to="/dashboard/create-winter-clothes"
          className={({ isActive }) =>
            cn(
              "p-2   border-2 border-primary text-white  hover:bg-primary text-primary hover:text-black italic-regular transition-all flex justify-center gap-2 mt-3",
              { "bg-primary text-black": isActive }
            )
          }
        >
          <PlusSquare className="shrink-0" />
          <span className="truncate">Create Winter Clothes</span>
        </NavLink>

        <hr className=" border border-slate-500 my-3" />
      </nav>
      <div className="mt-32">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "p-2  hover:bg-primary pb-3 hover:text-black  transition-all flex items-center gap-2 ",
              { "bg-primary text-black": isActive }
            )
          }
        >
          <Home className="shrink-0" />
          <span className="truncate">Home</span>
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            cn(
              " p-2    hover:bg-primary  hover:text-black  transition-all flex items-center gap-2 ",
              { "bg-primary text-black": isActive }
            )
          }
        >
          <LogOut className="shrink-0" />
          <span className="truncate">Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default SideBar;
