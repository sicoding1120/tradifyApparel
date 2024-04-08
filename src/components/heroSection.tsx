import React from "react";
import { FaStar } from "react-icons/fa";

const star = [
  { star: <FaStar className="fill-yellow-500" /> },
  { star: <FaStar className="fill-color-secondary" /> },
  { star: <FaStar className="fill-color-secondary" /> },
  { star: <FaStar className="fill-color-secondary" /> },
  { star: <FaStar className="" /> },
];
const heroSection = () => {
  return (
    <section className="w-full uppercase flex flex-col md:flex-row justify-between md:px-14 px-4">
      <SecSatu />
      <SecDua />
    </section>
  );
};

const SecDua = () => {
  return (
    <div className="md:w-2/3 w-full flex flex-col">
      <div className="w-full md:px-14 flex flex-col md:flex-row gap-2 md:mt-8">
        <div className="md:w-1/2 w-full h-full flex md:flex-col gap-6 mt-12 px-4 py-2">
          <h3 className=" md:w-full w-1/2 flex flex-col items-center md:items-start md:text-4xl text-lg font-semibold md:gap-2">
            check in <span>our new</span> <span>collection</span>
            <span>for sport &</span> <span>activity</span>
          </h3>
          <div className="md:w-full w-1/2 flex flex-col md:flex-row gap-4 text-center md:text-start">
            <div className="flex flex-col gap-2 items-center">
              <div className="flex gap-2">{star.map((item) => item.star)}</div>
              <h5 className="md:text-5xl text-3xl font-semibold">500+</h5>
            </div>
            <div className="flex flex-col ">
              <h6>5-star</h6>
              <h6>costumer</h6>
              <h6>review</h6>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:h-full h-[40vh] p-4">
          <div className="w-full h-full flex flex-col justify-between">
            <div id="circle" className="w-16 h-16 rounded-full bg-gray-300"></div>
            <div className="w-full h-2/3 rounded-3xl bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SecSatu = () => {
  return (
    <div className="md:w-1/3 w-full md:mt-10 mt-6">
      <div className="flex flex-col md:gap-2 gap-4 md:items-start justify-center items-center">
        <p className="md:text-md text-sm w-full flex md:justify-start justify-center items-center gap-6 text-gray-400">
          <span className="flex gap-2">
            est <span>2023</span>
          </span>
          <span className="md:block hidden w-1/4 bg-gray-400 h-[2px]"></span>
        </p>
        <h1 className="flex flex-col md:text-9xl text-8xl font-bold gap-0 text-color-text2">
          space <span className=" text-color-text">shirt</span>
        </h1>
        <p className="flex flex-col text-sm items-center md:items-start">
          comfortable products orea ted by highly skilled
          <span>craftsman in each of our products</span>
        </p>
        <div className="flex gap-2 mt-4">
          <button className="btn rounded-full px-8 min-h-2 h-10 uppercase bg-color-secondary hover:bg-color-text hover:text-color-primary">
            best sellers
          </button>
          <button className="btn btn-outline rounded-full px-4 min-h-2 h-10 border-color-text text-color-text hover:bg-color-text hover:text-color-primary hover:border-color-text uppercase">
            Default
          </button>
        </div>
      </div>
    </div>
  );
};
export default heroSection;
