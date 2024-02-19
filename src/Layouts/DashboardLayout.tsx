import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <SideBar />
      <div className="col-span-9 h-full p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
