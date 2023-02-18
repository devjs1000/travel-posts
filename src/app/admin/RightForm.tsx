import React from "react";

export const RightForm = () => {
  return (
    <div className="bg-white min-h-96 w-96 flex flex-col justify-center items-center p-4 rounded-md accent-green-500">
      <input
        type="text"
        className=" outline-green-500 bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="sku"
      />
      <input
        type="text"
        className=" outline-green-500 bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="country"
      />

      <input
        type="text"
        className=" outline-green-500 bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="state"
      />

      <input
        type="text"
        className=" outline-green-500 bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="city"
      />
      <label className="bg-white ring-green-500 ring-1 text-green-500 h-10 w-full select-none px-4 flex gap-4  py-2 my-1 rounded-md ">
        <input type="checkbox" id="isAvailable" className="outline-green-500" />
        Is Available?
      </label>
      <label className="bg-white ring-green-500 ring-1 text-green-500 h-10 w-full select-none px-4 flex gap-4  py-2 my-1 rounded-md ">
        <input type="checkbox" id="isAvailable" className="outline-green-500 " />
        Ticket?
      </label>
      <input
        type="number"
        className="bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md outline-green-500"
        placeholder="fare"
      />

      <div className="bg-white  ring-green-500 h-10 w-full px-4 py-2 my-1 select-none rounded-md flex gap-4 ring-1">
        From:{" "}
        <input type="date" className="outline-green-500 bg-white px-4 py-2" />
        To:{" "}
        <input type="date" className="outline-green-500 bg-white px-4 py-2" />
      </div>
      <div className="bg-white ring-green-500 h-10 w-full px-4 py-2 my-1 select-none rounded-md flex gap-4 ring-1">
        From:{" "}
        <input type="time" className=" outline-green-500 bg-white px-4 py-2 accent-green-500" />
        To:{" "}
        <input type="time" className=" outline-green-500 bg-white px-4 py-2" />
      </div>
    </div>
  );
};
