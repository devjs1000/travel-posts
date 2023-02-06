import React from "react";
import Select from "react-select";
import MiddleForm from "./MiddleForm";
import { RightForm } from "./RightForm";

const Admin = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen flex justify-center items-start p-4 gap-4">
      <div className="bg-white min-h-96 w-96 flex flex-col justify-center items-center p-4 rounded-md">
        <input
          type="url"
          className="bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
          placeholder="Source Link"
        />

        <details className="bg-white select-none  h-full w-full   rounded-md block">
          <summary className="bg-white ring-1 transition-all text-blue-500 h-10 w-full px-4 py-2 my-1 rounded-md block">
            Customize - UI
          </summary>
          <SelectColor title={"background"} />
          <SelectColor title={"text"} />
          <SelectColor title={"button"} />
          <SelectColor title={"button text"} />
        </details>
      </div>
      <MiddleForm />
      <RightForm />
    </div>
  );
};

export default Admin;

export const SelectColor = ({ title }: { title: string }) => {
  return (
    <div className=" min-h-96 flex  gap-4 justify-between my-2 px-4 items-center py-2 rounded-md bg-white ring-1">
      <label htmlFor={`${title}-color`} className="text-blue-500">
        {title} Color
      </label>
      <input type="color" id={`${title}-color`} className="bg-white" />
    </div>
  );
};
