
import React from "react";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const newsest = () => {
  return (
    <section className="w-full h-screen px-14 py-10">
      <div className="w-full h-full flex justify-center items-center gap-14 px-8">
        <FirstTopic />
        <div className="w-1/3 h-full bg-yellow-400"></div>
        <div className="w-1/3 h-full bg-green-400"></div>
      </div>
    </section>
  );
};

const FirstTopic = () => {
  return (
    <div className="flex flex-col w-1/3 h-full justify-between items-center  gap-10 py-14">
      <div className="w-full h-2/5 flex ">
        <h2 className="text-5xl uppercase font-semibold">
          our newest <span>product</span>
        </h2>
      </div>
      <div className="w-full h-4/6 relative flex justify-center items-center">
        <Image
          src={"/tshirt-content.jpeg"}
          alt={"aslhijskgfedgrdh"}
          className="absolute bg-slate-300 rounded-3xl w-full h-full bg-cover"
          width={600}
          height={800}
        />
        <div className="flex justify-between items-center w-full px-4">
          <div className="rounded-full p-4 w-[60px] h-[60px] bg-white flex justify-center items-center cursor-pointer relative hover:scale-125 bottom-[120px]">
            <FiShoppingCart size={18} className="" />
          </div>
          <div className="relative flex justify-center items-center px-5 py-4 rounded-xl bg-white w-[150px] top-[170px]">
            <p className="uppercase font-semibold text-md">t-shirt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newsest;
