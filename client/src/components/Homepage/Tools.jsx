import { useState, useEffect } from "react";
import { makeRequest } from "../../axios";
import Tool from "./Tool";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const Tools = () => {
  const navigate = useNavigate();
  const { data: { data } = {}, isLoading } = useQuery({
    queryKey: ["featuredTools"],
    queryFn: () => {
      return makeRequest.get(`/tools/all?featured=${true}`);
    },
  });

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <div
      id="featured_tools"
      className="bg-[url('/src/assets/curve_overlay_big.png')] bg-[#1A191D] h-fit pb-10"
    >
      <div className=" bg-[#FF6666] w-[90%] lg:w-3/4 left-0 right-0 mx-auto px-10 py-8 text-base-200 rounded">
        <h1 className="text-center text-2xl lg:text-3xl font-semibold mb-3">
          Precision Tools From Toolzia
        </h1>
        <h3 className="text-sm lg:text-md text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ea
          eius eligendi voluptate vel cupiditate ut accusamus iusto possimus
          culpa. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          corrupti eveniet voluptates obcaecati necessitatibus quas aspernatur
        </h3>
      </div>

      {/* tools */}
      <div className="w-4/5 mx-auto my-10 grid grid-cols-4 gap-10">
        {data?.tools.map((tool, i) => (
          <Tool key={i} tool={tool} />
        ))}
      </div>
      <div className="text-center ">
        <button
          className="mt-5 border bordser-spacing-1
         rounded py-1 px-10 text-base-200 hover:border-[#FF6666] duration-300
          hover:text-[#FF6666] "
          onClick={() => navigate(`/tools`)}
        >
          View All Tools
        </button>
      </div>
    </div>
  );
};

export default Tools;
