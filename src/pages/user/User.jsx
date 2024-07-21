import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

export default function User() {
  return (
    // user
    <div className="flex-[4] p-5">
      {/* userTitleCon */}
      <div className="flex  justify-between items-center">
        {/* userTitle */}
        <h1 className="font-bold text-3xl">Edit User</h1>
        {/* userAbbButton */}
        <Link to="/newUser">
          <button className="w-20 border-none p-[5px] bg-[teal] rounded-[5px] text-white text-base">
            Create
          </button>
        </Link>
      </div>
      {/* userCon */}
      <div className="flex mt-5">
        {/* userShow */}
        <div
          className="flex-[1] p-5 
        shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
        >
          {/* userShowTop */}
          <div className="flex items-center">
            {/* userShowTopImg */}
            <img
              src="https://picsum.photos/id/338/200/300"
              alt=""
              className="w-10 h-10 rounded-[50%] object-cover"
            />
            {/* userShowTopTitle */}
            <div className="flex flex-col ml-5">
              {/* userShowUsername */}
              <span className="font-semibold">Jhon Snow</span>
              {/* userShowtitle */}
              <span className="font-light">Software Engineer</span>
            </div>
          </div>
          {/* userShowBottom */}
          <div className="mt-5">
            {/* userShowTitle */}
            <span className="text-[14px] font-semibold text-gray-500">
              Account Details
            </span>
            {/* userShowInfo */}
            <div className="flex items-center my-5 mx-0 text-[#444]">
              {/* userShowIcon */}
              <PermIdentityIcon className="!text-base" />
              {/* userShowInfoTitle */}
              <span className="ml-[10px]">jhonsnow44</span>
            </div>
            <div className="flex items-center my-5 mx-0 text-[#444]">
              {/* userShowIcon */}
              <CalendarTodayIcon className="!text-base" />
              {/* userShowInfoTitle */}
              <span className="ml-[10px]">11.04.2000</span>
            </div>
            <span className="text-[14px] font-semibold text-gray-500">
              Contact Details
            </span>
            <div className="flex items-center my-5 mx-0 text-[#444]">
              {/* userShowIcon */}
              <PhoneAndroidIcon className="!text-base" />
              {/* userShowInfoTitle */}
              <span className="ml-[10px]">+1 234 567 890</span>
            </div>
            <div className="flex items-center my-5 mx-0 text-[#444]">
              {/* userShowIcon */}
              <AlternateEmailIcon className="!text-base" />
              {/* userShowInfoTitle */}
              <span className="ml-[10px]">jon@gmail.com</span>
            </div>
            <div className="flex items-center my-5 mx-0 text-[#444]">
              {/* userShowIcon */}
              <LocationSearchingIcon className="!text-base" />
              {/* userShowInfoTitle */}
              <span className="ml-[10px]">London | UK</span>
            </div>
          </div>
        </div>
        {/* userUpdate */}
        <div
          className="flex-[2] p-5 
        shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] ml-5"
        >
          {/*userUpdateTitle  */}
          <span className="text-2xl font-semibold">Edit</span>
          {/* userUpdateForm */}
          <form className="flex justify-between mt-5">
            {/* userUpdateLeft*/}
            <div className="">
              {/* userUpdateItem */}
              <div className="flex flex-col mt-[10px]">
                <label className="mb-[5px] text-sm">Username</label>
                {/* userUpdateInput */}
                <input
                  type="text"
                  placeholder="jhonsnow44"
                  className="h-[30px] border-solid w-[250px] border-b-[1px] border-gray-600"
                />
              </div>
              <div className="flex flex-col mt-[10px]">
                <label className="mb-[5px] text-sm">Full Name</label>
                {/* userUpdateInput */}
                <input
                  type="text"
                  placeholder="Jhon Snow"
                  className="h-[30px] border-solid w-[250px] border-b-[1px] border-gray-600"
                />
              </div>
              <div className="flex flex-col mt-[10px]">
                <label className="mb-[5px] text-sm">Email</label>
                {/* userUpdateInput */}
                <input
                  type="email"
                  placeholder="jon@gmail.com"
                  className="h-[30px] border-solid w-[250px] border-b-[1px] border-gray-600"
                />
              </div>
              <div className="flex flex-col mt-[10px]">
                <label className="mb-[5px] text-sm">Phone</label>
                {/* userUpdateInput */}
                <input
                  type="text"
                  placeholder="+1 234 567 890"
                  className="h-[30px] border-solid w-[250px] border-b-[1px] border-gray-600"
                />
              </div>
              <div className="flex flex-col mt-[10px]">
                <label className="mb-[5px] text-sm">Address</label>
                {/* userUpdateInput */}
                <input
                  type="text"
                  placeholder="London | UK"
                  className="h-[30px] border-solid w-[250px] border-b-[1px] border-gray-600"
                />
              </div>
            </div>
            {/* userUpdateRight*/}
            <div className="flex flex-col justify-between">
              {/* userUpdateupload */}
              <div className="flex items-center">
                {/* userUpdateImg */}
                <img
                  src="https://picsum.photos/id/338/200/300"
                  alt=""
                  className="w-[100px] h-[100px] 
                    rounded-[10px] object-cover mr-5"
                />
                {/* userUpdateUpload */}
                <label htmlFor="file" className="">
                  {/* userUpdateIcon */}
                  <PublishIcon className="cursor-pointer" />
                </label>
                <input type="file" id="file" className="hidden" />
              </div>
              {/* userUpdateButton */}
              <button className="border-none rounded-md p-[5px] bg-[darkblue] text-white font-semibold">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
