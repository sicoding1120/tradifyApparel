import Link from "next/link";
import React from "react";
import { FiMenu, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="w-full md:px-14 px-8 md:py-6 py-4">
      <div className="w-full flex justify-between items-center ">
        <div className="md:hidden block">
          <FiMenu size={30}/>
        </div>
        <nav className="hidden md:flex justify-start gap-8 uppercase w-1/3">
          {menuNavbar.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="text-color-text hover:text-color-text2"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="w-1/3"></div>
        <div className="w-1/3 flex justify-end items-center">
          <div className="rounded-full p-4 bg-color-secondary flex justify-center items-center cursor-pointer">
            <FiShoppingCart size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

const menuNavbar = [
  { name: "Home", link: "/" },
  { name: "Product", link: "/" },
  { name: "Profile Product", link: "/" },
];
export default Navbar;
