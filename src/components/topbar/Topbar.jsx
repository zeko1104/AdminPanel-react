import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    // topbar
    <div className="w-full h-[50px] bg-white sticky top-0 z-[999]">
      {/* topbarWrapper */}
      <div className="h-full py-0 px-5 flex items-center justify-between">
        {/* topLeft */}
        <div className="">
          {/* logo */}
          <Link to='/'><span className="font-bold text-3xl text-blue-800">zekoadmin</span></Link>
        </div>
        {/* topRight */}
        <div className="flex items-center">
          {/* topbarIconContainer */}
          <div className="relative cursor-pointer  mr-[10px] text-[#555]">
            <NotificationsNoneIcon />
            {/* topIconBadge */}
            <span
              className="w-4 h-4 flex items-center justify-center text-[10px]
             absolute top-[-5px] right-0 bg-red-500 text-white rounded-[50%]"
            >
              2
            </span>
          </div>
          {/* topbarIconContainer */}
          <div className="relative cursor-pointer mr-[10px] text-[#555]">
            <LanguageIcon />
            {/* topIconBadge */}
            <span
              className="w-4 h-4 flex items-center justify-center text-[10px]
             absolute top-[-5px] right-0 bg-red-500 text-white rounded-[50%]"
            >
              2
            </span>
          </div>
          {/* topbarIconContainer */}
          <div className="relative cursor-pointer mr-[10px] text-[#555]">
            <SettingsIcon />
          </div>
          {/* topAvatar */}
          <img className="w-10 h-10 rounded-[50%] object-cover cursor-pointer" src="https://picsum.photos/id/64/200/300" alt="" />
        </div>
      </div>
    </div>
  );
}
