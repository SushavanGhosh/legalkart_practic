import React, { useState } from "react";
import cardArray from "../demo_api/card";
import TalkToLawyerCard from "../components/TalkToLawyerCard";
import filterArray from "../demo_api/filter";
import FilterComp from "../components/FilterComp";
import { IoLocationOutline } from "react-icons/io5";

const TalkToLawyer = () => {
  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-black font-semibold">Talk to Lawyer</h2>
        <figure className="flex items-center">
          <p className="text-xl text-[#637381]">
            LKC Balance: <span className="text-[#000] font-bold">₹1220</span>
          </p>
          <button className="ml-[5em] bg-[#13c296] text-white font-semibold text-lg h-10 px-[18px] rounded-full">
            Add LKC
          </button>
        </figure>
      </div>
      <div className="grid md:grid-cols-4 gap-2">
        <div className="rounded-[10px] shadow-common-shadow bg-white hidden md:block">
          <div className="">
            <figure className="py-2 flex flex-col justify-center border-b border-gray-200 p-4">
              <h3 className="text-lg font-semibold">Filter by</h3>
            </figure>
            <figure className="py-6 flex flex-col justify-center border-b border-gray-200 px-4">
              <h5 className="text-sm font-semibold pb-3">Location</h5>
              <div className="w-full h-10 relative">
                <IoLocationOutline className="absolute top-0 bottom-0 left-3 m-auto text-lg text-gray-600" />
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full h-full outline hover:outline-1 hover:outline-blue-900 hover:shadow-sm hover:border-none focus:border-none focus-visible:border-none rounded-md pl-8 focus:outline-1 focus:outline-blue-900 border-none outline-1"
                />
              </div>
            </figure>
            <figure className="py-6 flex flex-col justify-center px-4">
              <h5 className="text-sm font-semibold pb-3">Problem type</h5>
              <ul className="w-full flex flex-col gap-3">
                {filterArray
                  .slice(0, showMore ? filterArray.length : 5)
                  .map((filter_item) => (
                    <FilterComp item={filter_item} key={filter_item.id} />
                  ))}
              </ul>
              <button
                onClick={handleToggle}
                className="text-blue-700 font-semibold capitalize text-left text-m mt-2"
              >
                {showMore ? "-show less" : "+show more"}
              </button>
            </figure>
          </div>
        </div>
        <div className="grid md:col-span-3 md:grid-cols-2 gap-2">
          {cardArray.map((item) => (
            <TalkToLawyerCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalkToLawyer;
