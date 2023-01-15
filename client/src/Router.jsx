import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
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
        path: "/login",
        element: "login",
      },
    ],
  },
]);
