import React from "react";


export const SelectColor = ({ title }: { title: string; }) => {
  return (
    <div className=" min-h-96 flex  gap-4 justify-between my-2 px-4 items-center py-2 ring-green-500 rounded-md bg-white ring-1">
      <label htmlFor={`${title}-color`} className="text-gray-500">
        {title} Color
      </label>
      <input type="color" id={`${title}-color`} className="bg-white" />
    </div>
  );
};
