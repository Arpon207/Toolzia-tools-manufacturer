import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { title, price, image, _id, category } = tool;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${category}/${_id}`);
  };

  return (
    <div className="bg-[#ffffff1a] text-base-200 rounded  p-8 ">
      <img src={image.url} alt="" className="aspect-square rounded-md" />
      <div className="mt-5">
        <h3
          onClick={handleNavigate}
          className=" h-14 hover:text-[#FF6666] duration-300 cursor-pointer"
        >
          {title}
        </h3>
        <p>
          Price: <span className="text-[#FF6666]">$ {price}.00</span>/
          <small>piece</small>
        </p>
        <p>Minimum Order: 20 pieces</p>
        <button
          onClick={handleNavigate}
          className="w-full mt-5 border bordser-spacing-1
         rounded py-1 hover:border-[#FF6666] duration-300 hover:text-[#FF6666]"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Tool;
