import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";
import { useEffect, useState } from "react";

const SearchTools = ({ set_search_params }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const search = searchParams.get("search");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      setSearchParams({ search: searchInput });
      set_search_params(searchParams);
    } else {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }, [searchInput]);

  const { data: { data } = {}, isLoading } = useQuery({
    queryKey: ["searchedTools", search],
    queryFn: () => {
      return makeRequest.get(`/tools/all?search=${search}`);
    },
  });

  return (
    <div>
      <div>
        <form action="" className="flex gap-1">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="input input-sm input-bordered w-full max-w-xs"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <input
            className="btn btn-sm btn-neutral"
            type="submit"
            value={"Search"}
          />
        </form>
        <div className="relative">
          <div className="absolute top-2 bg-white w-full shadow-md p-3 ">
            {data?.tools?.slice(0, 3).map((tool) => (
              <div className="flex gap-3 cursor-pointer mt-3 group">
                <img src={tool.image.url} alt="" width={70} />
                <div>
                  <p className="text-sm group-hover:text-[#FF6666]">
                    {tool.title.length > 20
                      ? tool.title.slice(0, 20) + "..."
                      : tool.title}
                  </p>
                  <p>Price: $ {tool.price}</p>
                </div>
              </div>
            ))}
            <button
              className="btn btn-link block my-0 mx-auto"
              onClick={() => {
                navigate("/tools/search", {
                  state: { data },
                });
                searchParams.set("search", search);
                setSearchParams(searchParams);
              }}
            >
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTools;
