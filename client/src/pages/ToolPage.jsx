import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeRequest } from "../axios";
import Tabs from "../components/Product/Tabs";
import Counter from "../components/Product/Counter";
import Product_details from "../components/Product/Tool_details";
import Footer from "../components/Footer/Footer";
import { useQuery } from "react-query";
import Loading from "../components/Loading/Loading";

const ToolPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("tools_description");
  const minimum_order_quantity = 20;
  const [count, setCount] = useState(minimum_order_quantity);

  const { data, isLoading } = useQuery({
    queryKey: ["tool", id],
    queryFn: () => {
      return makeRequest.get(`/tools/${id}`);
    },
  });

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  const { available_quantity, image, title, price, type } = data?.data;

  return (
    <>
      <div className="w-4/5 mx-auto">
        <div className=" grid grid-cols-[1.5fr_2fr_1fr] gap-10 mt-20">
          <div>
            <img src={image?.url} alt="" />
          </div>
          <div className="[&>*]:font-medium">
            <h2 className="text-2xl ">{title} </h2>
            <p className="text-sm">Type: {type}</p>
            <div className="divider"></div>
            <h3 className="">
              Price: {price}$/ <small>piece</small>
            </h3>
            <p>
              Shipping Cost: <strong>Depends</strong>
            </p>
            <p>Available Quantity: {data?.data?.available_quantity}</p>
            <p>Minimum Order Quantity: {minimum_order_quantity}</p>
            <div className="divider"></div>
            <p>
              Samples: US:200$/ <small>piece</small> (1 piece minimum)
            </p>

            <p>Customization: Available </p>
            <div className="divider"></div>

            <div className="flex items-center gap-5">
              <button className="btn btn-wide btn-sm btn-neutral">
                Order Sample
              </button>
              <button className="btn btn-wide btn-sm btn-neutral">
                Request For Customization
              </button>
            </div>
            <div className="divider"></div>
          </div>
          <div className="bg-[#FF6666] border text-neutral p-8 h-fit rounded-md">
            <p className=" font-medium text-base-300">
              *From payment to delivery, we protect your trading.
            </p>
            <p className=" font-medium mt-3 text-base-300">Order Quantity:</p>
            <Counter
              minimum_order_quantity={minimum_order_quantity}
              available_quantity={available_quantity}
              count={count}
              setCount={setCount}
            />
            <button
              className="btn btn-block btn-sm mt-3 btn-neutral"
              disabled={
                count < minimum_order_quantity ||
                count > available_quantity ||
                isNaN(count)
              }
            >
              Start Order
            </button>
            <button className="btn btn-block btn-sm mt-3 btn-outline text-neutral">
              Contact Now
            </button>
            <button className="btn btn-block btn-sm mt-3">
              Leave a message
            </button>
          </div>
        </div>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Product_details activeTab={activeTab} toolDetails={data?.data} />
      </div>
      <Footer />
    </>
  );
};

export default ToolPage;
