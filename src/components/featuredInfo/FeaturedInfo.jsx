import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function FeaturedInfo() {
  return (
    // featured
    <div className="w-full flex justify-between">
      {/* featuredItem */}
      <div className="flex-[1] my-0 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        {/* featuredTitle */}
        <span className="text-xl">Revanue</span>
        {/* featuredMoneyCon */}
        <div className="my-[10px] mx-0 flex items-center">
          {/* featuredMoney */}
          <span className="text-3xl font-semibold">$2,415</span>
          {/* featuredMoneyRate */}
          <span className="flex items-center ml-5">
            -11.49%
            <ArrowDownwardIcon className="text-sm ml-[5px] negative" />
          </span>
        </div>
        {/* featuredSub */}
        <span className="text-[15px] text-gray-500">Compared to last month</span>
      </div>
      {/* featuredItem */}
      <div className="flex-[1] my-0 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        {/* featuredTitle */}
        <span className="text-xl">Sales</span>
        {/* featuredMoneyCon */}
        <div className="my-[10px] mx-0 flex items-center">
          {/* featuredMoney */}
          <span className="text-3xl font-semibold">$5,415</span>
          {/* featuredMoneyRate */}
          <span className="flex items-center ml-5">
            -1.32%
            <ArrowDownwardIcon className="text-sm ml-[5px] negative" />
          </span>
        </div>
        {/* featuredSub */}
        <span className="text-[15px] text-gray-500">Compared to last month</span>
      </div>
      {/* featuredItem */}
      <div className="flex-[1] my-0 mx-5 p-[30px] rounded-[10px] cursor-pointer shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        {/* featuredTitle */}
        <span className="text-xl">Cost</span>
        {/* featuredMoneyCon */}
        <div className="my-[10px] mx-0 flex items-center">
          {/* featuredMoney */}
          <span className="text-3xl font-semibold">$2,115</span>
          {/* featuredMoneyRate */}
          <span className="flex items-center ml-5">
            +2.24%
            <ArrowUpwardIcon className="text-sm ml-[5px] text-green-500" />
          </span>
        </div>
        {/* featuredSub */}
        <span className="text-[15px] text-gray-500">Compared to last month</span>
      </div>
    </div>
  );
}
