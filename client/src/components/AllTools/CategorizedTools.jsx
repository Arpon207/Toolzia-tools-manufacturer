import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { makeRequest } from "../../axios";
import Loading from "../Loading/Loading";
import Pagination from "./Pagination";
import SearchTools from "./SearchTools";
import ToolsCard from "./ToolsCard";

const CategorizedTools = () => {
  const { category } = useParams();
  const [filter, setFilter] = useState("");
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const [search_Params, set_search_params] = useState(null);

  const { data: { data } = {}, isLoading } = useQuery({
    queryKey: ["tools", filter, currentPage],
    queryFn: () => {
      return makeRequest.get(
        `/tools/all?category=${filter}&currentPage=${currentPage}`
      );
    },
  });

  console.log(search_Params);

  useEffect(() => {
    if (location.pathname === "/tools") {
      setFilter("");
    }
    if (category) {
      setFilter(category.replaceAll("-", " "));
    }

    if (search_Params?.URLSearchParams?.size === 0 && location.pathname) {
      setCurrentPage(1);
    }
  }, [category, location]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-5">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-lg">
            {filter === "" ? "All Tools" : filter}
          </h1>
          <p className="text-gray-500 text-sm">
            showing total {data.count} tools
          </p>
        </div>
        <SearchTools set_search_params={set_search_params} />
      </div>
      <div className="min-h-[70vh]">
        <div className="grid grid-cols-4 gap-5 mx-auto">
          {data.tools.map((tool) => (
            <ToolsCard tool={tool} />
          ))}
        </div>
      </div>
      <Pagination
        count={data.count}
        currentPage={{ currentPage, setCurrentPage }}
      />
    </div>
  );
};

export default CategorizedTools;
