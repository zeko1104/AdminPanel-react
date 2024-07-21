import React from 'react'

export default function NewProduct() {
  return (
    <div className="flex-[4]">
    <h1 className="text-3xl font-semibold">New Product</h1>
    <form className="mt-2">
      <div className="flex flex-col w-64 mb-2">
        <label className="text-gray-500 font-semibold mb-2">Image</label>
        <input type="file" id="file" className="p-2 border border-gray-300 rounded"/>
      </div>
      <div className="flex flex-col w-64 mb-2">
        <label className="text-gray-500 font-semibold mb-2">Name</label>
        <input type="text" placeholder="Apple Airpods" className="p-2 border border-gray-300 rounded"/>
      </div>
      <div className="flex flex-col w-64 mb-2">
        <label className="text-gray-500 font-semibold mb-2">Stock</label>
        <input type="text" placeholder="123" className="p-2 border border-gray-300 rounded"/>
      </div>
      <div className="flex flex-col w-64 mb-2">
        <label className="text-gray-500 font-semibold mb-2">Active</label>
        <select name="active" id="active" className="p-2 border border-gray-300 rounded">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <button className="mt-2 px-4 py-2 rounded bg-blue-800 text-white font-semibold cursor-pointer">Create</button>
    </form>
  </div>
  
  )
}
