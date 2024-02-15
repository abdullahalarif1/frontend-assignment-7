import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllWinterClothes from "@/pages/AllWinterClothes/AllWinterClothes";
import Login from "@/pages/Shared/Login";

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
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
