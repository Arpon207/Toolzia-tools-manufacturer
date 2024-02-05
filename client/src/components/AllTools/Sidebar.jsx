import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ unique_categories }) => {
  const location = useLocation();
  return (
    <div className="bg-[#FF6666] rounded p-5">
      <h3 className="text-xl font-medium text-base-200 mb-3">
        Tools Categories
      </h3>
      <div className="flex flex-col ">
        <NavLink
          className={`font-medium text-base-200 hover:bg-[rgba(0,0,0,0.2)] 
        p-3 rounded ${
          location.pathname === "/tools" && "bg-[rgba(0,0,0,0.2)]"
        }`}
          to={`/tools`}
        >
          All Tools
        </NavLink>
        {unique_categories.map((category) => (
          <NavLink
            className={({
              isActive,
            }) => `font-medium text-base-200 hover:bg-[rgba(0,0,0,0.2)] 
        p-3 rounded ${isActive && "bg-[rgba(0,0,0,0.2)]"}`}
            to={`/tools/${category.replaceAll(" ", "-")}`}
          >
            {category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
