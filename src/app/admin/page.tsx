"use client"

import React from "react";
import Select from "react-select";
import MiddleForm from "./MiddleForm";
import { RightForm } from "./RightForm";
import withAuth from "../../HOC/withAuth";
import { SelectColor } from "./SelectColor";

const Admin = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-green-900 text-center py-6 ">
        Create a new <span className="text-green-700">Post</span>
      </h1>

      <div className="bg-gray-100 h-screen w-screen flex justify-center items-start p-4 gap-4">
        <div className="bg-white min-h-96 w-96 flex flex-col justify-center items-center p-4 rounded-md">
          <input
            type="url"
            className="bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md outline-green-500 "
            placeholder="Source Link"
          />

          <details className="bg-white select-none  h-full w-full   rounded-md block">
            <summary className="bg-white ring-green-500 ring-1 transition-all text-green-500 h-10 w-full px-4 py-2 my-1 rounded-md block">
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
    </div>
  );
};

export default withAuth(Admin);
