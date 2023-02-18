import React from "react";

const MiddleForm = () => {
  return (
    <div className="bg-white min-h-96 w-96 flex flex-col justify-center items-center p-4 rounded-md">
      <input
        type="text"
        className="bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md outline-green-500"
        placeholder="title" />
        <textarea className="bg-gray-200  w-full px-4 py-2 my-1 rounded-md  outline-green-500" placeholder="description" />
      <textarea
        className="bg-gray-200 h-64 w-full px-4 py-2 my-1 rounded-md  outline-green-500"
        placeholder="content" />
      <label
        htmlFor="images"
        className="bg-white ring-green-500 ring-1 text-green-500 h-10 w-full px-4 py-2 my-1 rounded-md "
      >
        Upload Images
      </label>
      <input type="file" id="images" className="hidden" />

      <button className="bg-green-500 h-10 w-full px-4 py-2 my-1 rounded-md text-white">
        Submit
      </button>
    </div>
  );
};

export default MiddleForm;