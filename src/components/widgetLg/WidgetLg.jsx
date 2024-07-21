import React from "react";

export default function WidgetLg() {
  const Button = ({ type }) => {
    // widgetLgButton
    return (
      <button
        className={
          "py-[5px] px-[7px] border-none rounded-[10px] bg-[#ebf1fe] " + type
        }
      >
        {type}
      </button>
    );
  };
  return (
    // widgetLg
    <div
      className="flex-[2] 
   shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] p-5"
    >
      {/* widgetLgTitle */}
      <h3 className="text-[22px] font-semibold">Latest transactions</h3>
      {/* widgetLgTable */}
      <table className="w-full h-[350px] border-spacing-5">
        {/* widgetLgTr */}
        <tr className="">
          {/* widgetLgth */}
          <th className="text-left">Customer</th>
          <th className="text-left">Date</th>
          <th className="text-left">Amount</th>
          <th className="text-left">Status</th>
        </tr>
        {/* widgetLgTr */}
        <tr className="">
          {/* widgetLgUser */}
          <td className="flex items-center font-semibold">
            {/* widgetLgImg */}
            <img
              className="w-10 h-10 rounded-[50%] object-cover mr-[10px]"
              src="https://picsum.photos/id/349/200/300"
              alt=""
            />
            {/* widgetLgName */}
            <span className="">Lorem Ipsum</span>
          </td>
          {/* widgetLgDate */}
          <td className="font-light">13 Jul 2024</td>
          {/* widgetLgAmount */}
          <td className="font-light">$ 20.00</td>
          {/* widgetLgStatus */}
          <td className="text-[#28c76f]">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="">
          {/* widgetLgUser */}
          <td className="flex items-center font-semibold">
            {/* widgetLgImg */}
            <img
              className="w-10 h-10 rounded-[50%] object-cover mr-[10px]"
              src="https://picsum.photos/id/349/200/300"
              alt=""
            />
            {/* widgetLgName */}
            <span className="">Lorem Ipsum</span>
          </td>
          {/* widgetLgDate */}
          <td className="font-light">13 Jul 2024</td>
          {/* widgetLgAmount */}
          <td className="font-light">$ 65.00</td>
          {/* widgetLgStatus */}
          <td className="text-red-600">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="">
          {/* widgetLgUser */}
          <td className="flex items-center font-semibold">
            {/* widgetLgImg */}
            <img
              className="w-10 h-10 rounded-[50%] object-cover mr-[10px]"
              src="https://picsum.photos/id/349/200/300"
              alt=""
            />
            {/* widgetLgName */}
            <span className="">Lorem Ipsum</span>
          </td>
          {/* widgetLgDate */}
          <td className="font-light">13 Jul 2024</td>
          {/* widgetLgAmount */}
          <td className="font-light">$ 133.00</td>
          {/* widgetLgStatus */}
          <td className="text-yellow-500">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="">
          {/* widgetLgUser */}
          <td className="flex items-center font-semibold">
            {/* widgetLgImg */}
            <img
              className="w-10 h-10 rounded-[50%] object-cover mr-[10px]"
              src="https://picsum.photos/id/349/200/300"
              alt=""
            />
            {/* widgetLgName */}
            <span className="">Lorem Ipsum</span>
          </td>
          {/* widgetLgDate */}
          <td className="font-light">13 Jul 2024</td>
          {/* widgetLgAmount */}
          <td className="font-light">$ 79.99</td>
          {/* widgetLgStatus */}
          <td className="text-[#28c76f]">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="">
          {/* widgetLgUser */}
          <td className="flex items-center font-semibold">
            {/* widgetLgImg */}
            <img
              className="w-10 h-10 rounded-[50%] object-cover mr-[10px]"
              src="https://picsum.photos/id/349/200/300"
              alt=""
            />
            {/* widgetLgName */}
            <span className="">Lorem Ipsum</span>
          </td>
          {/* widgetLgDate */}
          <td className="font-light">13 Jul 2024</td>
          {/* widgetLgAmount */}
          <td className="font-light">$ 149.99</td>
          {/* widgetLgStatus */}
          <td className="text-[#28c76f]">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
