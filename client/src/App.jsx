import { RouterProvider } from "react-router";
import "./app.css";
import { router } from "./Router";
import go_to_top from "../src/assets/Icons/top.png";
import { useEffect, useState } from "react";

export function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-base-200">
      <div
        onClick={scrolltoTop}
        className={`fixed  right-5  bottom-5 w-14 h-14 lg:w-20 lg:h-20 bg-[#FF6666] rounded-full z-50 cursor-pointer duration-300 ${
          scrollY > 500 ? "" : "bottom-[-100%]"
        }  `}
      >
        <img src={go_to_top} alt="" />
      </div>
      <RouterProvider router={router} />
    </div>
  );
}
