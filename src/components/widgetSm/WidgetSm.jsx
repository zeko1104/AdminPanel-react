import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    // widgetSm
    <div
      className="flex-[1] 
    shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-5 mr-5"
    >
      {/* widgetSmTitle */}
      <span className="text-[22px] font-semibold">New Join Members</span>
      {/* widgetSmList */}
      <ul className="m-0 p-0">
        {/* widgetSmListItem */}
        <li className="flex items-center justify-between my-5 mx-0">
            {/* widgetSmImg */}
            <img src="https://picsum.photos/id/338/200/300" alt="" className="w-10 h-10 rounded-[50%] object-cover"/>
            {/* widgetSmUser */}
            <div className="flex flex-col">
                {/* widgetSmUserName */}
                <span className="font-semibold">John Doe</span>
                {/* widgetSmUserTitle */}
                <span className="font-light">Software Engineer</span>
            </div>
            {/* widgetSmButton */}
            <button className="flex items-center border-none rounded-[10px] py-[7px]
             px-[10px] bg-[#eeeef7] text-[#555]">
                {/* widgetSmIcon */}
                <VisibilityIcon className="text-base mr-[5px]"/>
                Display
            </button>
        </li>
        <li className="flex items-center justify-between my-5 mx-0">
            {/* widgetSmImg */}
            <img src="https://picsum.photos/id/338/200/300" alt="" className="w-10 h-10 rounded-[50%] object-cover"/>
            {/* widgetSmUser */}
            <div className="flex flex-col">
                {/* widgetSmUserName */}
                <span className="font-semibold">John Doe</span>
                {/* widgetSmUserTitle */}
                <span className="font-light">Software Engineer</span>
            </div>
            {/* widgetSmButton */}
            <button className="flex items-center border-none rounded-[10px] py-[7px]
             px-[10px] bg-[#eeeef7] text-[#555]">
                {/* widgetSmIcon */}
                <VisibilityIcon className="text-base mr-[5px]"/>
                Display
            </button>
        </li>
        <li className="flex items-center justify-between my-5 mx-0">
            {/* widgetSmImg */}
            <img src="https://picsum.photos/id/338/200/300" alt="" className="w-10 h-10 rounded-[50%] object-cover"/>
            {/* widgetSmUser */}
            <div className="flex flex-col">
                {/* widgetSmUserName */}
                <span className="font-semibold">John Doe</span>
                {/* widgetSmUserTitle */}
                <span className="font-light">Software Engineer</span>
            </div>
            {/* widgetSmButton */}
            <button className="flex items-center border-none rounded-[10px] py-[7px]
             px-[10px] bg-[#eeeef7] text-[#555]">
                {/* widgetSmIcon */}
                <VisibilityIcon className="text-base mr-[5px]"/>
                Display
            </button>
        </li>
        <li className="flex items-center justify-between my-5 mx-0">
            {/* widgetSmImg */}
            <img src="https://picsum.photos/id/338/200/300" alt="" className="w-10 h-10 rounded-[50%] object-cover"/>
            {/* widgetSmUser */}
            <div className="flex flex-col">
                {/* widgetSmUserName */}
                <span className="font-semibold">John Doe</span>
                {/* widgetSmUserTitle */}
                <span className="font-light">Software Engineer</span>
            </div>
            {/* widgetSmButton */}
            <button className="flex items-center border-none rounded-[10px] py-[7px]
             px-[10px] bg-[#eeeef7] text-[#555]">
                {/* widgetSmIcon */}
                <VisibilityIcon className="text-base mr-[5px]"/>
                Display
            </button>
        </li>
        <li className="flex items-center justify-between my-5 mx-0">
            {/* widgetSmImg */}
            <img src="https://picsum.photos/id/338/200/300" alt="" className="w-10 h-10 rounded-[50%] object-cover"/>
            {/* widgetSmUser */}
            <div className="flex flex-col">
                {/* widgetSmUserName */}
                <span className="font-semibold">John Doe</span>
                {/* widgetSmUserTitle */}
                <span className="font-light">Software Engineer</span>
            </div>
            {/* widgetSmButton */}
            <button className="flex items-center border-none rounded-[10px] py-[7px]
             px-[10px] bg-[#eeeef7] text-[#555]">
                {/* widgetSmIcon */}
                <VisibilityIcon className="text-base mr-[5px]"/>
                Display
            </button>
        </li>
      </ul>
    </div>
  );
}
