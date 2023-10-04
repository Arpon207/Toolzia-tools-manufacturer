import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Sign_in from "./pages/Sign_in";
import Sign_up from "./pages/Sign_up";
import Forget_Password from "./pages/Forget_password";
import Product from "./pages/Product";

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
        element: "about",
      },
      {
        path: "/:category/:id",
        element: <Product />,
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
