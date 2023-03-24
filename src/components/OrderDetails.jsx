import React, { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import OrderItem from "./OrderItem";
import NoFound from "../img/NotFound.svg";

const OrderData = () => {
  const [orderId, setOrderId] = useState("23498234792384");
  const [{ orderItems }, dispatch] = useStateValue();
  return (
    <>
      <div className="h-auto min-h-screen flex flex-col items-start left-0 top-0 my-2 w-full ">
        <div className="w-full flex gap-2">
          {orderItems && orderItems.length > 0 ? (
            <div className="flex gap-3">
              <p className="text-2xl font-semibold relative capitalize text-textColor">
                Order ID:
              </p>
              <p className="text-2xl font-semibold relative capitalize text-textColor">
                {orderId}
              </p>
            </div>
          ) : (
            <div></div>
          )}
          
        </div>
        <div className="w-full mt-2 text-textColor bg-textColor h-[1px]">
            
            </div>
        {orderItems && orderItems.length > 0 ? (
          <div className="w-full">
            <div
              className="w-full md:w-[700px] mx-[400px] items-center justify-center
                   h-full bg-gradient-bl from-pink-200 to-pink-600 shadow-xl flex flex-col"
            >
              <div className="w-full h-400 md:h-600 py-10 flex flex-col gap-3 overflow-y-scroll">
                {orderItems &&
                  orderItems.map((item) => (
                    <OrderItem key={item.id} item={item} flag={false} />
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <img
              src={NoFound}
              className="w-full max-h-[400px] flex items-center justify-center"
              alt=""
            />
            <div className="w-full flex items-center justify-center">
              <p className="text-lg font-semibold text-textColor">
                No any ordered items...Please try some new products!
              </p>
            </div>
          </div>
        )}
        <div className="w-full mt-2 text-textColor bg-textColor h-[1px]">
            
        </div>
        <div className="w-full flex  items-between">
          <div className="flex flex-col gap-2">
            <p className="font-semibold mt-10">Payment</p>
            <p className="text-sm text-textColor">Cash On Delivery</p>
          </div>
          <div className="flex flex-col items-center justify-between ml-auto gap-2">
            <div className="flex">
              <p className="text-lg font-semibold mt-10 mr-[500px]">Delivery</p>
            </div>
            <div className="flex gap-2">
              <p className="text-textColor mr-[500px] mt-3">Address</p>
            </div>
            <div className="flex gap-2">
              <p className="text-textColor mr-[500px] mt-3">Kasturbadham,Rk univeristy</p>
            </div>
            <div className="flex gap-2">
              <p className="text-textColor mr-[500px] mt-3">pinCode-360020</p>
            </div>
            <div className="flex gap-2">
              <p className="text-textColor mr-[500px] mt-3">Gadhka road,boys hostel-Rk universt=ity</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default OrderData;
