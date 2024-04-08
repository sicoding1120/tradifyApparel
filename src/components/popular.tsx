/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Star = [
  { star: <FaStar className="fill-color-secondary" /> },
  { star: <FaStar className="fill-color-secondary" /> },
  { star: <FaStar className="fill-color-secondary" /> },
  { star: <FaStar className="fill-color-secondary" /> },
  { star: <FaStar className="fill-color-secondary" /> },
];


const TShirtComponents = [
  {
    data: {
      tShirt: [
        {
          id: 1,
          name: "T-Shirt 1",
          price: 10000,
          img: "/T-Shirt1.png",
        },
        {
          id: 2,
          name: "T-Shirt 1",
          price: 10000,
          img: "/T-Shirt1.png",
        },
        {
          id: 3,
          name: "T-Shirt 1",
          price: 10000,
          img: "/T-Shirt1.png",
        },
        {
          id: 4,
          name: "T-Shirt 1",
          price: 10000,
          img: "/T-Shirt1.png",
        },
      ],
    },
  },
];
const popular = () => {
  return (
    <section className="w-full md:h-screen flex flex-col bg-bgContent px-14">
      <div className="w-full h-1/4 flex justify-around items-center">
        <div>
          <p className="font-semibold uppercase text-2xl">t-shirts</p>
        </div>
        <div>
          <p className="font-semibold uppercase text-2xl">pants</p>
        </div>
      </div>
      <div className="w-full h-2/4 flex flex-col md:flex-row justify-between items-center">
        {TShirtComponents.map((item,index) => {
          return item.data.tShirt.map((item) => (
            <div key={index} className=" bg-opacity-20 bg-white bg-blur-md backdrop-blur-md backdrop-filter p-8 rounded-3xl hover:shadow-lg hover:scale-110 transition-all w-[300px] h-[400px] shadow-sm border-2 border-white/20 flex flex-col justify-between items-center">
              <Image src={item.img} alt={""} width={300} height={400} />
              <div className="flex justify-between items-center gap-4">
                <p>RP.{item.price}</p>
                <div className="flex items-center justify-center">
                  {Star.map((item) => item.star)}
                </div>
              </div>
              <div className="flex justify-between items-center gap-4">
                <div className="rounded-full p-4 bg-color-secondary flex justify-center items-center cursor-pointer">
                  <FiShoppingCart size={18} />
                </div>
                <div className="w-full py-3 px-8 bg-white rounded-full uppercase cursor-default">{item.name}</div>
              </div>
            </div>
        ))})}
        </div>
      <div className="w-full h-1/4 flex justify-center items-center">
        <Pagination />
      </div>
    </section>
  );
};

const Pagination = () => {
  const [count, setCount] = useState(0);
  const handlerPlus = () => {
    setCount(count + 1);
  };
  const handlerMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="join">
      <button type="button" className="join-item btn" onClick={handlerMinus}>
        «
      </button>
      <button type="button" className="join-item btn">
        {" "}
        page of {count}
      </button>
      <button type="button" className="join-item btn" onClick={handlerPlus}>
        »
      </button>
    </div>
  );
};

export default popular;
