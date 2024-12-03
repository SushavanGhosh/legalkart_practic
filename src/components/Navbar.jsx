import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUser } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar fixed w-full bg-white z-10">
        <div className="container py-2 flex justify-between">
          <Link to="/">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <img className="max-w-[200px]" src="/images/logo.png" alt="Logo" />
          </Link>
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={togglePopup}
            >
              <img
                src="/images/img.jpg"
                alt="Profile"
                className="w-8 rounded-full"
              />
              <h4 className="text-m text-black">User Name</h4>
              <MdKeyboardArrowDown className="text-2xl" />
            </div>
            {isOpen && (
              <div className={`content ${isOpen ? "open" : "closed"}`}>
                <div className="border shadow-xl rounded-lg absolute top-10 right-0 bg-white py-3 w-56">
                  <Link
                    className="px-4 py-2 hover:bg-gray-100 text-lg text-gray-500 font-normal flex items-center gap-2"
                    to="#"
                  >
                    <RxDashboard className="text-2xl" /> Dashboard
                  </Link>
                  <Link
                    className="px-4 py-2 hover:bg-gray-100 text-lg text-gray-500 font-normal flex items-center gap-2"
                    to="#"
                  >
                    <HiOutlineUser className="text-2xl" /> Profile
                  </Link>
                  <Link
                    className="px-4 py-2 hover:bg-gray-100 text-lg text-gray-500 font-normal flex items-center gap-2"
                    to="#"
                  >
                    <IoMdLogOut className="text-2xl" /> Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <ul className="w-full bg-blue-700 text-white md:flex items-center justify-center h-12 gap-[20px] ">
          <li className="text-[15px]">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="text-[15px]">
            <Link to="/TalkToLawyer">Talk to lawyer</Link>
          </li>
          <li className="text-[15px]">
            <Link to="/Product">Product</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
