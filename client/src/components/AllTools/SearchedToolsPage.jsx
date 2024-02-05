import { useLocation } from "react-router-dom";

const SearchedToolsPage = () => {
  const location = useLocation();

  const data = location.state?.data;

  return <div>SearchedTools</div>;
};

export default SearchedToolsPage;
