import React from "react";
import { staffData } from "../../dummyData";

export default function Manage() {
  return (
    <div className="flex-[4] p-5">
      <div className="flex items-center mb-5">
        <h1 className="text-3xl font-bold">Management</h1>
      </div>
      <div className="flex flex-wrap mt-5 gap-5 p-5 rounded-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        {staffData.map((staffData) => {
          return (
            <div
              key={staffData.id}
              className="w-56 h-56 rounded-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] cursor-pointer"
            >
              <div className="flex items-center justify-center m-5">
                <img
                  src={staffData.img}
                  alt="img"
                  className="w-24 h-24 rounded-[50%] object-cover"
                />
              </div>
              <div className="text-center m-5">
                <h1 className="text-xl font-bold">{staffData.name}</h1>
                <p className="text-sm">{staffData.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
