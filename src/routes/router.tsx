import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllWinterClothes from "@/pages/AllWinterClothes/AllWinterClothes";
import Login from "@/pages/Shared/Login";
// import ProtectedRoute from "@/Layouts/ProtectedRoute";
import Register from "@/pages/Shared/Register";
import WinterClothesDetail from "@/pages/AllWinterClothes/WinterClothesDetail";
import DashboardLayout from "@/Layouts/DashboardLayout";
import PieChart2 from "@/pages/dashboard/PieChart2";
import DashAllWinterClothes from "@/pages/dashboard/AllWinterClothes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "winter-clothes",
        element: <AllWinterClothes />,
      },
      {
        path: "winter-clothes/:id",
        element: <WinterClothesDetail />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <PieChart2 />,
      },
      {
        path: 'winter-clothes' ,
        element: <DashAllWinterClothes/>,
      },
    ],
  },
]);

export default router;
