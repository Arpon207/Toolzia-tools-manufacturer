import { Link, NavLink } from "react-router-dom";
import NavIcon from "../../assets/Icons/tools.png";
import MenuIcon from "../../assets/Icons/menu.png";
import { navlinks } from "../../constants/navlinks";
import { TiThMenu } from "react-icons/ti";
import Drawer from "./Drawer";
import { useState } from "react";
import sign_in_icon from "../../assets/Icons/refer.png";

const Navbar = () => {
  const [user, setUser] = useState(false);
  return (
    <div className="sticky top-0 w-full z-50 bg-base-200">
      <div className="navbar w-[90%] mx-auto h-[80px]">
        <div className="navbar-start">
          <ul className="flex lg:gap-0 xl:gap-2 font-medium hidden lg:flex">
            {navlinks.map((pages, i) => (
              <NavLink
                className={({ isActive }) =>
                  `btn btn-ghost normal-case text-base lg:ps-2 lg:pe-2 xl:ps-4 xl:pe-4 ${
                    isActive && "bg-[#FF6666] text-base-200"
                  }`
                }
                key={i}
                to={pages.path}
              >
                {pages.name}
              </NavLink>
            ))}
          </ul>

          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
              <img src={MenuIcon} alt="" width={25} />
            </label>
          </div>
          <Drawer />
        </div>

        <div className="navbar-center">
          <Link className="btn btn-ghost normal-case text-3xl">
            {" "}
            <img src={NavIcon} alt="" width={25} />
            Tool<span className="text-[#FF6666]">Zia</span>
          </Link>
        </div>

        <div className="navbar-end ">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="avatar placeholder btn btn-ghost btn-circle"
              >
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <span>R</span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 p-5 shadow menu menu-sm dropdown-content bg-base-100 rounded-box text-black"
              >
                <li>
                  <Link className="text-base" to={"my-profile"}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="text-base" to={"dashboard"}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="text-base" to={"settings"}>
                    Settings
                  </Link>
                </li>
                <button className="btn btn-xs btn-neutral mt-2">Logout</button>
              </ul>
            </div>
          ) : (
            <div>
              <NavLink
                className={({ isActive }) =>
                  `btn btn-sm md:btn-md  btn-neutral text-base border-none ${
                    isActive && "bg-[#FF6666] text-base-200 hover:bg-[#FF6666]"
                  }`
                }
                to={"/signin"}
              >
                <img className="w-4 icon_white" src={sign_in_icon} alt="" />
                <h3 className="hidden md:block">Signin</h3>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
