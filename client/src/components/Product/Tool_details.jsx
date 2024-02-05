import BasicInfo from "./BasicInfo";

const Product_details = ({ activeTab, toolDetails }) => {
  const { title, specifications, basicInfo, packagingAndDelivery } =
    toolDetails;
  return (
    <div className="py-10">
      {activeTab === "tools_description" && (
        <div className="[&_li]:text-sm">
          <p className="font-medium mt-5">{title}</p>
          <ul className="mt-2 ml-16">
            {specifications?.map((specification) => (
              <li className=" list-disc">{specification}</li>
            ))}
          </ul>
          <BasicInfo basicInfo={basicInfo} />
          <p className="font-medium mt-5">Packaging & Delivery</p>
          <ul className="mt-2 ml-16">
            {Object.entries(packagingAndDelivery).map(([key, value]) => (
              <li className="list-disc">
                {" "}
                {key} : {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === "reviews" && (
        <div className="h-64">
          <p>There is no reviews to show</p>
        </div>
      )}
    </div>
  );
};

export default Product_details;
