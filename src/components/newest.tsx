import React from "react";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const newsest = () => {
  return (
    <section className="w-full md:h-screen h-full md:px-14 md:py-10 py-8">
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center md:gap-14 gap-24 px-8">
        <FirstTopic />
        <SecondTopic />
        <ThirdtyTopic />
      </div>
    </section>
  );
};

const ThirdtyTopic = () => {
  return (
    <div className="md:w-1/3 w-full md:h-full h-[400px] md:py-24">
      <div className="w-full md:h-2/3 h-full flex justify-center items-center relative">
        <Image
          src={"/ba-2.jpeg"}
          alt={""}
          width={300}
          height={300}
          className="w-full h-full absolute rounded-3xl"
        />
        <div className="flex flex-row-reverse justify-start items-center w-full px-4">
          <div className="rounded-full p-4 w-[60px] h-[60px] bg-white flex justify-center items-center transition-all cursor-pointer relative hover:scale-125 md:top-[120px] top-[160px]">
            <FiShoppingCart size={18} className="" />
          </div>
          <div className="relative flex justify-center items-center px-5 py-4 rounded-xl bg-white right-24 md:top-[165px] top-[190px] md:right-0">
            <p className="uppercase font-semibold text-md">t-shirt</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const SecondTopic = () => {
  return (
    <div className="md:w-1/3 w-full md:h-full h-[500px] md:py-24 md:mt-0">
      <div className="w-full h-full relative flex justify-center items-center">
        <Image
          src={"/ba-1.jpeg"}
          alt={""}
          width={300}
          height={300}
          className="w-full h-full absolute rounded-3xl"
        />
        <div className="flex justify-between items-center w-full px-4">
          <div className="rounded-full p-4 w-[60px] h-[60px] bg-white flex justify-center items-center transition-all cursor-pointer relative hover:scale-125 md:bottom-[210px] bottom-[200px] md:left-0 left-2">
            <FiShoppingCart size={18} className="" />
          </div>
          <div className="relative flex justify-center items-center px-5 py-4 rounded-xl bg-white rotate-90 md:left-[65px] left-[50px]">
            <p className="uppercase font-semibold text-md">t-shirt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
const FirstTopic = () => {
  return (
    <div className="flex flex-col md:w-1/3 w-full md:h-full h-[500px] justify-between items-center md:gap-10 gap-4 md:py-14 md:mb-0 mb-14">
      <div className="w-full md:h-2/5 h-full flex">
        <h2 className="text-5xl uppercase font-semibold md:text-start text-center">
          our newest <span>product</span>
        </h2>
      </div>
      <div className="w-full h-full md:h-4/6 relative flex justify-center items-center">
        <Image
          src={"/tshirt-content.jpeg"}
          alt={"aslhijskgfedgrdh"}
          className="absolute bg-slate-300 rounded-3xl w-full md:h-full h-[300px] bg-cover"
          width={600}
          height={800}
        />
        <div className="flex justify-between items-center w-full px-4">
          <div className="rounded-full p-4 w-[60px] h-[60px] bg-white flex justify-center items-center cursor-pointer transition-all relative hover:scale-125 md:bottom-[120px] bottom-[105px]">
            <FiShoppingCart size={18} className="" />
          </div>
          <div className="relative flex justify-center items-center px-5 py-4 rounded-xl bg-white w-[150px] md:top-[170px] top-[155px]">
            <p className="uppercase font-semibold text-md">t-shirt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default newsest;
