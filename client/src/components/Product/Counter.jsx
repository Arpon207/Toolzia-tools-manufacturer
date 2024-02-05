import { useState } from "react";

const Counter = ({
  minimum_order_quantity,
  available_quantity,
  count,
  setCount,
}) => {
  const handleCount = (props) => {
    if (props === "increment") {
      setCount((prev) => prev + 1);
    }
    if (props === "decrement") {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div>
      <div className="flex gap-2 mt-3">
        <button
          className="btn btn-square btn-sm btn-neutral"
          onClick={() => handleCount("decrement")}
          disabled={count <= minimum_order_quantity || isNaN(count)}
        >
          -{" "}
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
          className="bg-gray-200 input  input-sm w-2/4 max-w-xs text-black text-center"
        />{" "}
        <button
          className="btn btn-square btn-sm btn-neutral"
          onClick={() => handleCount("increment")}
          disabled={count >= available_quantity}
        >
          {" "}
          +{" "}
        </button>
      </div>
      {count < minimum_order_quantity && (
        <p className="text-base-300 text-sm mt-3">
          *Order quantity cannot be less than minimum order quantity
        </p>
      )}
      {count > available_quantity && (
        <p className="text-base-300 text-sm mt-3">
          *Order quantity cannot be more than available order quantity
        </p>
      )}
    </div>
  );
};

export default Counter;
