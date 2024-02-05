import { Outlet } from "react-router-dom";
import Sidebar from "../components/AllTools/Sidebar";
import { useQuery } from "react-query";
import { makeRequest } from "../axios";
import Loading from "../components/Loading/Loading";
const AllTools = () => {
  const { data: { data } = {}, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return makeRequest.get(`/tools/all/categories`);
    },
  });

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  return (
    <div className="grid w-[80%] mx-auto grid-cols-[20%_80%] mt-10 min-h-screen">
      <div>
        <Sidebar unique_categories={data} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AllTools;
