import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Sign_in from "./pages/Sign_in";

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
    ],
  },
  {
    path: "/signin",
    element: <Sign_in />,
  },
  ,
]);
