import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  return (
    // product
    <div className="flex-[4] p-5">
      {/* productTitleCon */}
      <div className="flex items-center justify-between">
        {/* productTitle */}
        <h1 className="text-3xl font-bold">Product</h1>
        {/* productAddbtn */}
        <Link to="/newproduct">
          <button
            className="w-20 border-none 
            p-[5px] bg-[teal] text-white rounded-[5px] text-base "
          >
            Create
          </button>
        </Link>
      </div>
      <div className="flex">
        <div className="flex-1">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="flex-1 p-5 m-5 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-10 h-10 rounded-full object-cover mr-5"
            />
            <span className="font-semibold">Apple Airpods</span>
          </div>
          <div className="mt-2">
            <div className="flex justify-between w-40">
              <span className="font-light">id:</span>
              <span className="font-light">123</span>
            </div>
            <div className="flex justify-between w-40">
              <span className="font-light">sales:</span>
              <span className="font-light">5123</span>
            </div>
            <div className="flex justify-between w-40">
              <span className="font-light">active:</span>
              <span className="font-light">yes</span>
            </div>
            <div className="flex justify-between w-40">
              <span className="font-light">in stock:</span>
              <span className="font-light">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 m-5 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        <form className="flex justify-between">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-500">Product Name</label>
            <input
              type="text"
              placeholder="Apple AirPod"
              className="mb-2 p-1 border-b border-gray-500 outline-none"
            />
            <label className="mb-2 text-gray-500">In Stock</label>
            <select
              name="inStock"
              id="idStock"
              className="mb-2 p-1 border-gray-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label className="mb-2 text-gray-500">Active</label>
            <select
              name="active"
              id="active"
              className="mb-2 p-1 border-gray-500"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="flex flex-col justify-around">
            <div className="flex items-center">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="w-24 h-24 rounded-md object-cover mr-5"
              />
              <label htmlFor="file" className="cursor-pointer">
                <PublishIcon />
              </label>
              <input type="file" id="file" className="hidden" />
            </div>
            <button className="border-none p-2 rounded-md bg-blue-800 text-white font-semibold cursor-pointer">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
