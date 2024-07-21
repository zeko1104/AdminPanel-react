import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    // sidebar
    <div className="flex-1 h-[calc(100vh-50px)] bg-white sticky top-[50px] overflow-scroll">
      {/* sidebarWrapper */}
      <div className="p-5 text-[#555] border">
        {/* sidebarMenu */}
        <div className="mb-[10px]">
          {/* sidebartitle */}
          <h3 className="text-[13px] text-slate-600 font-bold ">Dashboard</h3>
          {/* sidebarList */}
          <ul className="p-[5px]">
            {/* sidebarListItem */}
            <li
              className="p-[5px] cursor-pointer flex 
            items-center rounded-[10px] hover:bg-[rgb(240,240,255)] active"
            >
              {/* sidebarIcon */}
              <LineStyleIcon className="mr-[5px] !text-xl"/>
              <Link to='/'><span>Home</span></Link>
            </li>
            {/* sidebarListItem */}
            <li
              className="p-[5px] cursor-pointer flex 
            items-center rounded-[10px] hover:bg-[rgb(240,240,255)]"
            >
              {/* sidebarIcon */}
              <TimelineIcon className="mr-[5px] !text-xl"/>
              <span>Analytics</span>
            </li>
            {/* sidebarListItem */}
            <li
              className="p-[5px] cursor-pointer 
             items-center rounded-[10px] hover:bg-[rgb(240,240,255)]"
            >
              {/* sidebarIcon */}
              <TrendingUpIcon className="mr-[5px] !text-xl"/>
              <span>Sales</span>
            </li>
          </ul>
        </div>
         {/* sidebarMenu */}
         <div className="mb-[10px]">
          {/* sidebartitle */}
          <h3 className="text-[13px] text-slate-600 font-bold ">Quick Menu</h3>
          {/* sidebarList */}
          <ul className="p-[5px]">
            {/* sidebarListItem */}
            <li
              className="p-[5px] cursor-pointer flex 
            items-center rounded-[10px] hover:bg-[rgb(240,240,255)]"
            >
              {/* sidebarIcon */}
              <PermIdentityIcon className="mr-[5px] !text-xl"/>
             <Link to='/users'> <span>Users</span></Link>
            </li>
            {/* sidebarListItem */}
            <li
              className="p-[5px] cursor-pointer flex 
            items-center rounded-[10px] hover:bg-[rgb(240,240,255)]"
            >
              {/* sidebarIcon */}
              <StorefrontIcon className="mr-[5px] !text-xl"/>
              <Link to='/products'><span>Products</span></Link>
            </li>
            {/* sidebarListItem */}
            <li
              className="p-[5px] cursor-pointer 
             items-center rounded-[10px] hover:bg-[rgb(240,240,255)]"
            >
              {/* sidebarIcon */}
              <AttachMoneyIcon className="mr-[5px] !text-xl"/>
              <span>Transactions</span>
            </li>
             {/* sidebarListItem */}
             <li
              className="p-[5px] cursor-pointer 
             items-center rounded-[10px] hover:bg-[rgb(240,240,255)]"
            >
              {/* sidebarIcon */}
              <BarChartIcon className="mr-[5px] !text-xl"/>
              <span>Reports</span>
            </li>
          </ul>
        </div>
         {/* sidebarMenu */}
         <div className="mb-[10px]">
          {/* sidebartitle */}
          <h3 className="text-[13px] text-slate-600 font-bold ">Notifications</h3>
          {/* sidebarList */}
          <ul className="p-[5px]">
            {/* sidebarListItem */}
            <li
              className="p-[5px] cursor-pointer flex 
            items-center rounded-[10px] hover:bg-[rgb(240,240,255)] "
            >
              {/* sidebarIcon */}
              <MailOutlineIcon className="mr-[5px] !text-xl"/>
              <span>Mail</span>
            </li>
            {/* sidebarListItem */}
            <li
              className="p-[5px] cursor-pointer flex 
            items-center rounded-[10px] hover:bg-[rgb(240,240,255)]"
            >
              {/* sidebarIcon */}
              <DynamicFeedIcon className="mr-[5px] !text-xl"/>
              <span>Feedback</span>
            </li>
            {/* sidebarListItem */}
            <li
              className="p-[5px] cursor-pointer 
             items-center rounded-[10px] hover:bg-[rgb(240,240,255)]"
            >
              {/* sidebarIcon */}
              <ChatBubbleOutlineIcon className="mr-[5px] !text-xl"/>
              <Link to='/messages'><span>Messages</span></Link>
            </li>
          </ul>
        </div>
         {/* sidebarMenu */}
         <div className="mb-[10px]">
          {/* sidebartitle */}
          <h3 className="text-[13px] text-slate-600 font-bold ">Staff</h3>
          {/* sidebarList */}
          <ul className="p-[5px]">
            {/* sidebarListItem */}
            <li
              className="p-[5px] cursor-pointer flex 
            items-center rounded-[10px] hover:bg-[rgb(240,240,255)] "
            >
              {/* sidebarIcon */}
              <WorkOutlineIcon className="mr-[5px] !text-xl"/>
              <Link to='/manage'><span>Manage</span></Link>
            </li>
            {/* sidebarListItem */}
            <li
              className="p-[5px] cursor-pointer flex 
            items-center rounded-[10px] hover:bg-[rgb(240,240,255)]"
            >
              {/* sidebarIcon */}
              <TimelineIcon className="mr-[5px] !text-xl"/>
              <span>Analytics</span>
            </li>
            {/* sidebarListItem */}
            <li
              className="p-[5px] cursor-pointer 
             items-center rounded-[10px] hover:bg-[rgb(240,240,255)]"
            >
              {/* sidebarIcon */}
              <ReportIcon className="mr-[5px] !text-xl"/>
              <span>Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
