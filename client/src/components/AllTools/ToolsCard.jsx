import { useNavigate } from "react-router-dom";

const ToolsCard = ({ tool }) => {
  const navigate = useNavigate();

  const handleNavigate = (id, category) => {
    navigate(`/${category}/${id}`);
  };
  return (
    <div className="p-5 shadow-lg rounded-md">
      <div
        className="overflow-hidden"
        onClick={() => handleNavigate(tool._id, tool.category)}
      >
        <img
          className="aspect-square cursor-pointer hover:scale-105 duration-300"
          src={tool.image.url}
          alt=""
        />
      </div>
      <p
        className="min-h-[3rem] text-md font-medium hover:text-[#FF6666] duration-300 cursor-pointer"
        onClick={() => handleNavigate(tool._id, tool.category)}
      >
        {tool.title.length > 50 ? tool.title.slice(0, 40) + "..." : tool.title}
      </p>
      <p>
        Price: <span className="text-[#FF6666]">$ {tool.price}.00</span>/
        <small>piece</small>
      </p>
      <p>
        Min. Order: <span className="text-[#FF6666]">20</span>/
        <small>piece</small>
      </p>
    </div>
  );
};

export default ToolsCard;
