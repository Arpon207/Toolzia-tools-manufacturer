import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Sign_in from "./pages/Sign_in";
import Sign_up from "./pages/Sign_up";
import Forget_Password from "./pages/Forget_password";
import About from "./pages/About";
import ToolPage from "./pages/ToolPage";
import AllTools from "./pages/AllTools";
import CategorizedTools from "./components/AllTools/CategorizedTools";
import SearchedToolsPage from "./components/AllTools/SearchedToolsPage";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: "blogs",
      },
      {
        path: "/contact",
        element: "contact",
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/:category/:id",
        element: <ToolPage />,
      },
      {
        path: "/tools",
        element: <AllTools />,
        children: [
          {
            path: "/tools",
            element: <CategorizedTools />,
          },
          {
            path: "/tools/:category",
            element: <CategorizedTools />,
          },
          {
            path: "/tools/search",
            element: <SearchedToolsPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/signin",
    element: <Sign_in />,
  },
  {
    path: "/signup",
    element: <Sign_up />,
  },
  {
    path: "/password_reset",
    element: <Forget_Password />,
  },
]);
