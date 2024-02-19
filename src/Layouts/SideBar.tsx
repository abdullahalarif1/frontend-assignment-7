import { cn } from "@/lib/utils";
import { GalleryHorizontal, PlusSquare } from "lucide-react";
import { NavLink } from "react-router-dom";
import img from "../assets/large-removebg-preview.png";

const SideBar = () => {
  return (
    <aside className="bg-light-gray col-span-3 h-screen sticky top-0 left-0 overflow-auto p-5">
      <nav className="flex flex-col gap-2">
        <img className="mb-10 w-48 mx-auto" src={img} alt="" />
        <hr className="border border-slate-500 my-3" />
        <NavLink
          to="/dashboard/winter-clothes"
          className={({ isActive }) =>
            cn(
              "p-3   border-2 border-primary text-white  hover:bg-primary text-primary hover:text-black italic-regular transition-all flex justify-center gap-2",
              { "bg-primary text-black": isActive }
            )
          }
        >
          <GalleryHorizontal className="shrink-0" />
          <span className="truncate">All Winter Clothes</span>
        </NavLink>

        <NavLink
          to="/admin/add-events-item"
          className={({ isActive }) =>
            cn(
              "p-3   border-2 border-primary text-white  hover:bg-primary text-primary hover:text-black italic-regular transition-all flex justify-center gap-2 mt-3",
              { "bg-slate-800 text-white": isActive }
            )
          }
        >
          <PlusSquare className="shrink-0" />
          <span className="truncate">Create Winter Clothes</span>
        </NavLink>

        <hr className=" border border-slate-500 my-3" />
      </nav>
    </aside>
  );
};

export default SideBar;
