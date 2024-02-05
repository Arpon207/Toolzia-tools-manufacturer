import React from "react";
import { useOutletContext } from "react-router-dom";

const PowerTools = () => {
  const data = useOutletContext();
  console.log(data);
  return <div>PowerTools</div>;
};

export default PowerTools;
