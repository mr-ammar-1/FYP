"use client";
import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Trending Topics" },
    { id: 2, text: "Login" },
    { id: 3, text: "Register Now" },
    
  ];
  return (
    <nav className="flex items-center justify-between w-full h-[100px] bg-white px-8 py-10">
      <div className="flex items-center gap-3">
        <img className="w-[40px]" src="./new logo.png" alt="" />
        <h1 className="text-3xl font-semibold">
         LOGO
        </h1>
      </div>
      <div className="">
        <ul className="lg:flex lg:gap-10 hidden font-medium items-center">
          
          <li className="hover:text-violet-600">
            <a href="">Trending Topics</a>
          </li>
          <li className="hover:text-violet-600">
            <a href="" className="flex items-center">
              <IoMdLock className="mr-1" /> Login
            </a>
          </li>
          <button className="text-white bg-violet-600 px-5 py-3 rounded-md">
            Register Now
          </button>
        </ul>

        {/* <div className='lg:hidden visible text-2xl'><a href=""><IoMenuSharp /></a></div> */}
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="lg:hidden visible">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="text-3xl font-semibold  p-2 mb-5">
           LOGO
          </h1>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-primary duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
