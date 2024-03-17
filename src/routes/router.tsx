import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllWinterClothes from "@/pages/AllWinterClothes/AllWinterClothes";
import Login from "@/pages/Shared/Login";
import ProtectedRoute from "@/Layouts/ProtectedRoute";
import Register from "@/pages/Shared/Register";
import WinterClothesDetail from "@/pages/AllWinterClothes/WinterClothesDetail";
import DashboardLayout from "@/Layouts/DashboardLayout";
import PieChart2 from "@/pages/dashboard/PieChart2";
import DashAllWinterClothes from "@/pages/dashboard/DashAllWinterClothes";
import CreateWinterClothes from "@/pages/dashboard/CreateWinterClothes";
import LeaderBoard from "@/pages/DonorsLeaderboard/LeaderBoard";
import CommunityGratitudeWall from "@/pages/CommunityGrattitude/Community";
import CreateTestimonial from "@/pages/dashboard/CreateTestimonial";
import VolunteerForm from "@/pages/Volunteer/VolunteerForm";
import OurVolunteers from "@/pages/AboutUs/OurVolunteers";
import ErrorPage from "@/pages/Shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "community",
        element: <CommunityGratitudeWall />,
      },
      {
        path: "volunteer",
        element: (
          <ProtectedRoute>
            <VolunteerForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "about-us",
        element: <OurVolunteers />,
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
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <PieChart2 />,
      },
      {
        path: "winter-clothes",
        element: <DashAllWinterClothes />,
      },
      {
        path: "create-winter-clothes",
        element: <CreateWinterClothes />,
      },
      {
        path: "create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
]);

export default router;
