import React from "react";


export const RightForm = () => {
  return (
    <div className="bg-white min-h-96 w-96 flex flex-col justify-center items-center p-4 rounded-md">
      <input
        type="text"
        className="bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="sku" />
      <input
        type="text"
        className="bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="country" />

      <input
        type="text"
        className="bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="state" />

      <input
        type="text"
        className="bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="city" />
      <label className="bg-white ring-1 text-blue-500 h-10 w-full select-none px-4 flex gap-4  py-2 my-1 rounded-md ">
        <input type="checkbox" id="isAvailable" />
        Is Available?
      </label>
      <label className="bg-white ring-1 text-blue-500 h-10 w-full select-none px-4 flex gap-4  py-2 my-1 rounded-md ">
        <input type="checkbox" id="isAvailable" />
        Ticket?
      </label>
      <input
        type="number"
        className="bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="fare" />

      <div className="bg-white h-10 w-full px-4 py-2 my-1 select-none rounded-md flex gap-4 ring-1">
        From: <input type="date" className="bg-white px-4 py-2" />
        To: <input type="date" className="bg-white px-4 py-2" />
      </div>
      <div className="bg-white h-10 w-full px-4 py-2 my-1 select-none rounded-md flex gap-4 ring-1">
        From: <input type="time" className="bg-white px-4 py-2" />
        To: <input type="time" className="bg-white px-4 py-2" />
      </div>
    </div>
  );
};
