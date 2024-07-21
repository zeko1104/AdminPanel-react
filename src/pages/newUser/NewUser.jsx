import React from "react";

export default function NewUser() {
  return (
    // newUser
    <div className="flex-[4]">
      {/* newUserTitle */}
      <h1 className="">New User</h1>
      {/* newUserForm */}
      <form className="flex flex-wrap">
        {/* newUserItem */}
        <div className="w-[400px] flex flex-col mt-[10px] mr-5">
          <label className="mb-[10px] text-sm font-semibold text-gray-500">Username</label>
          <input className="h-10 p-[10px] border border-solid rounded-[5px]" type="text" placeholder="johnsnow44" />
        </div>
        <div className="w-[400px] flex flex-col mt-[10px] mr-5">
          <label className="mb-[10px] text-sm font-semibold text-gray-500">Full Name</label>
          <input className="h-10 p-[10px] border border-solid rounded-[5px]" type="text" placeholder="John Snow" />
        </div>
        <div className="w-[400px] flex flex-col mt-[10px] mr-5">
          <label className="mb-[10px] text-sm font-semibold text-gray-500">Email</label>
          <input className="h-10 p-[10px] border border-solid rounded-[5px]" type="email" placeholder="jon@gmail.com" />
        </div>
        <div className="w-[400px] flex flex-col mt-[10px] mr-5">
          <label className="mb-[10px] text-sm font-semibold text-gray-500">Password</label>
          <input className="h-10 p-[10px] border border-solid rounded-[5px]" type="password" placeholder="Password" />
        </div>
        <div className="w-[400px] flex flex-col mt-[10px] mr-5">
          <label className="mb-[10px] text-sm font-semibold text-gray-500">Phone</label>
          <input className="h-10 p-[10px] border border-solid rounded-[5px]"type="text" placeholder="+1 234 567 890" />
        </div>
        <div className="w-[400px] flex flex-col mt-[10px] mr-5">
          <label className="mb-[10px] text-sm font-semibold text-gray-500">Address</label>
          <input className="h-10 p-[10px] border border-solid rounded-[5px]" type="text" placeholder="London | UK" />
        </div>
        <div className="w-[400px] flex flex-col mt-[10px] mr-5">
          <label className="mb-[10px] text-sm font-semibold text-gray-500">Gender</label>
          {/* newUserGender */}
          <div className="">
            <input
              className="mt-[15px]"
              type="radio"
              name="gender"
              id="male"
              value="male"
            />
            <label className="m-[10px] text-lg text-[#555]" for="male">Male</label>
            <input
              className="mt-[15px]"
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <label className="m-[10px] text-lg text-[#555]" for="female">Female</label>
            <input
              className="mt-[15px]"
              type="radio"
              name="gender"
              id="other"
              value="other"
            />
            <label className="m-[10px] text-lg text-[#555]" for="other">Other</label>
          </div>
        </div>
        {/* newUserItem */}
        <div className="w-[400px] flex flex-col mt-[10px] mr-5">
          <label className="">Active</label>
          {/* newUserSelect */}
          <select className="h-10 rounded-[5px] border border-solid outline-none" name="active" id="active">
            <option className="" value="yes">Yes</option>
            <option className="" value="no">No</option>
          </select>
        </div>
        {/* newUserButton */}
        <button className="w-[200px] h-10 border-none bg-[darkblue]
         text-white rounded-[10px] font-semibold mt-[30px]">Create</button>
      </form>
    </div>
  );
}
