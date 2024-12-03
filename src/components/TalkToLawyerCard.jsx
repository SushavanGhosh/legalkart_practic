import React from "react";
import { FaStar } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";
import { SlCalender } from "react-icons/sl";

const TalkToLawyerCard = ({ item }) => {
  return (
    <div className="w-full bg-white shadow-common-shadow p-[15px] rounded-[10px]">
      <figure className="flex justify-between flex-wrap">
        <div className="w-[19%]">
          <img
            src={item.profile_image}
            alt={`${item.name}'s profile`}
            className="w-[65px] h-[65px] rounded-[6px]"
          />
        </div>
        <div className="w-[60%] pl-[5px]">
          <h3 className="text-[18px] font-semibold text-black mb-2 leading-[15px]">
            {item.name}
          </h3>
          <p className="text-[13px] font-[400]">{item.description}</p>
          <div className="py-3 min-h-32">
            <span className="text-green-600 text-xs font-semibold italic">
              {item.availability}
            </span>
            <p className="text-sm text-black">{item.location}</p>
            <p className="text-sm text-black py-1">
              Practicing since {item.practicing_since}
            </p>
            <p className="text-sm text-gray-500">{item.languages}</p>
          </div>
        </div>
        <div className="w-[19%] flex flex-col items-end">
          <button className="w-[32px] h-[32px] rounded-[50%] border border-[#d9d9d9] flex items-center justify-center mb-[20px]">
            <GoThumbsup />
          </button>
          <span className="bg-[#3ca745] text-white text-[14px] font-[600] rounded-[5px] w-[60px] h-[22px] flex gap-1 items-center justify-center">
            {item.rating} <FaStar className="text-[12px]" />{" "}
          </span>
          <p className="text-[11px] mt-[5px]">{item.reviews} Reviews</p>
        </div>
      </figure>
      <figure className="flex justify-between">
        <h4 className="text-base text-black font-semibold">
          Practice areas & skills :
        </h4>
        <button className="flex items-center gap-1 bg-gray-500 text-sm text-white py-1.5 px-4 rounded-md hover:bg-black transition-">
          <SlCalender /> Schedule call
        </button>
      </figure>
    </div>
  );
};

export default TalkToLawyerCard;
