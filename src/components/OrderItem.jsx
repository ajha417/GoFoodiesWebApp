import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { motion } from "framer-motion";

const OrderItem = ({ item }) => {
  const [items, setItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [{ orderItems }, dispatch] = useStateValue();
  return (
    <>
      <div
        key={item.id}
        className="w-full p-1 px-2 shadow-2xl rounded-lg bg-gradient-to-bl from-cartInitial to-cartFinal flex items-center gap-2"
      >
        <img
          src={item?.imageURL}
          alt="cartItems"
          className="w-20 h-20 max-w-[60px rounded-full object-contain"
        />
        {/* name section */}
        <div className="flex flex-col gap-2">
          <p className="text-base text-gray-700">{item?.title}</p>
        </div>
        <div className="flex flex-col items-center justify-between ml-auto gap-2">
          <div className="flex gap-2">
            <p className="text-sm flex text-textColor">Price:</p>
            <p className="text-sm block -mt-1 text-gray-900 font-semibold">
              <span className="text-lg text-red-600">&#8377; </span>
              {parseFloat(item?.price) * qty}
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm font-semibold">Qty:</p>
            <p className="text-textColor">{qty}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
