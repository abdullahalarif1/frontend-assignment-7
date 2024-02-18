import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllWinterClothes from "@/pages/AllWinterClothes/AllWinterClothes";
import Login from "@/pages/Shared/Login";
import ProtectedRoute from "@/Layouts/ProtectedRoute";
import Register from "@/pages/Shared/Register";

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
        element: (
          <ProtectedRoute>
            <AllWinterClothes />,
          </ProtectedRoute>
        ),
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
]);

export default router;
