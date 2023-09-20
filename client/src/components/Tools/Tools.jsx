import { useState, useEffect } from "react";
import { tabs } from "../../constants/tabs";
import { makeRequest } from "../../axios";
import Tool from "./Tool";

const Tools = () => {
  const [tabActive, setTabActive] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    makeRequest
      .get(`/tools/all?category=${tabActive}&currentPage=${currentPage}`)
      .then((response) => {
        setTools(response.data);
      });
  }, [tabActive, currentPage]);

  const totalpage = Array.from(
    { length: Math.ceil(tools?.count / 6) },
    (_, i) => i + 1
  );

  return (
    <div className="bg-[url('/src/assets/curve_overlay_big.png')] bg-[#1A191D] h-fit pb-10">
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

      <div className="mt-20">
        <div>
          <div className="tabs tabs-boxed bg-[#ffffff1a] w-3/4 lg:w-fit mx-auto p-2 lg:p-5  [&_.tab]:text-white [&_.tab-open]:bg-[#FF6666] mb-10">
            {tabs.map(({ name, value }, i) => (
              <a
                key={i}
                onClick={() => {
                  setTabActive(value);
                  setCurrentPage(1);
                }}
                className={`tab tab-sm lg:tab text-xs ${
                  tabActive === value && "tab-open"
                }`}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* tools */}
      <div className="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
        {tools?.tools?.map((tool, i) => (
          <Tool key={i} tool={tool} />
        ))}
      </div>
      <div className="flex lg:gap-2 justify-center lg:justify-end w-3/4 mx-auto mt-6 [&>button]:text-white [&>button]:px-3 [&>button]:py-1 items-center ">
        <p className="text-xs lg:text-sm text-base-200">
          showing 6 out of {tools.count} items
        </p>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="pagination-btn"
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {totalpage.map((number, i) => (
          <button
            key={i}
            className={`pagination-btn p-3 lg:p-5 rounded-full ${
              currentPage === number && "bg-[#FF6666]"
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={totalpage.length === currentPage}
          className={totalpage.length === currentPage && "text-black"}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Tools;
