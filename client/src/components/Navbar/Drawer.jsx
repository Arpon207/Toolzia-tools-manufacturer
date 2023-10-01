import { Link } from "react-router-dom";
import NavIcon from "../../assets/Icons/tools.png";
import { AiFillHome } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { SiMicrodotblog } from "react-icons/si";
import { MdContactSupport } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { useEffect, useState } from "react";

const Drawer = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    if (isChecked) {
      setIsChecked(false);
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isChecked ? "hidden" : "auto";
  }, [isChecked]);

  return (
    <>
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle "
        checked={isChecked}
      />
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <Link className="btn btn-ghost normal-case text-xl">
            {" "}
            <img src={NavIcon} alt="" width={25} />
            ToolZia
          </Link>
          <div className="divider"></div>
          <div>
            <ul className="menu bg-base-200 w-56 rounded-box text-base">
              <li onClick={handleClick}>
                <Link to={"/"}>
                  <AiFillHome /> Home
                </Link>
              </li>
              <li>
                <details close>
                  <summary>
                    <FaTools /> Tools
                  </summary>
                  <ul>
                    <li onClick={handleClick}>
                      <Link to={"/"}>All Tools</Link>
                    </li>
                    <li onClick={handleClick}>
                      <Link to={"/"}>Hand Tools</Link>
                    </li>
                    <li onClick={handleClick}>
                      <Link to={"/"}>Power Tools</Link>
                    </li>
                    <li onClick={handleClick}>
                      <Link to={"/"}>Accessories</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li onClick={handleClick}>
                <Link to={"/blogs"}>
                  <SiMicrodotblog /> Blogs
                </Link>
              </li>
              <li onClick={handleClick}>
                <Link to={"/contact"}>
                  <MdContactSupport /> Contact Us
                </Link>
              </li>
              <li onClick={handleClick}>
                <Link to={"/about"}>
                  <FcAbout /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
