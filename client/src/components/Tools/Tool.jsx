const Tool = ({ tool }) => {
  return (
    <div className="bg-[#ffffff1a] text-base-200 rounded  p-8 ">
      <div className=" flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-p">
        <div className="flex-[3] flex flex-col gap-3 order-2 lg:order-1">
          <h3 className="text-xl">{tool.title}</h3>
          <p className="text-sm  text-gray-300">{tool.desc.slice(0, 50)}</p>
          <h5 className="text-md">Price: $ {tool.price}</h5>
          <h5 className="text-md">Min. Order: 20 piece</h5>
          <h5 className="text-md">Available Quantity: 50 piece</h5>
          <div className="flex flex-col lg:flex-row  gap-2 mt-5">
            <button className="btn btn-sm bg-[#FF6666] lg:mr-5 hover:bg-[#e25555] border-none text-white duration-200">
              Request Sample
            </button>
            <button className="btn btn-sm bg-[#FF6666] lg:mr-5 hover:bg-[#e25555] border-none text-white duration-200">
              Place Order
            </button>
          </div>
        </div>
        <div className="flex-[2] order-1 lg:order-2">
          <img className="w-full rounded" src={tool.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tool;
