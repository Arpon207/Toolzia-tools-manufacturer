import React from "react";

const Product_details = ({ activeTab, specifications, desc }) => {
  return (
    <div className="py-10">
      {activeTab === "tools_description" && (
        <div className="[&_li]:text-sm">
          <p>{desc}</p>
          <p className="font-medium mt-5">Specifications</p>
          <ul className="mt-2 ml-16">
            {specifications?.map((specification) => (
              <li className=" list-disc">{specification}</li>
            ))}
          </ul>
          <p className="font-medium mt-5">Packaging & Delivery</p>
          <ul className="mt-2 ml-16">
            <li className=" list-disc">Package Size: 59.00*39.00*28.00(cm)</li>
            <li className=" list-disc">
              Package Gross Weight: 42kg (Depends on your order quantity.)
            </li>
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
