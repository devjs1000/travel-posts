"use client";
import React from "react";
import { SelectColor } from "./SelectColor";
import { FormProps } from "./page";

export function LeftForm({ values, handleChange }: FormProps) {
  return (
    <div className="bg-white min-h-96 w-96 flex flex-col justify-center items-center p-4 rounded-md">
      <input
        type="url"
        className="bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md outline-green-500 "
        placeholder="Source Link"
        onChange={handleChange('source')}
        value={values.source} />

      <details className="bg-white select-none  h-full w-full   rounded-md block">
        <summary className="bg-white ring-green-500 ring-1 transition-all text-green-500 h-10 w-full px-4 py-2 my-1 rounded-md block">
          Customize - UI
        </summary>
        <SelectColor
          title={"background"}
          value={values.background}
          handleChange={handleChange} />
        <SelectColor
          title={"text"}
          value={values.text}
          handleChange={handleChange} />
        <SelectColor
          title={"button"}
          value={values.button}
          handleChange={handleChange} />
        <SelectColor
          title={"button text"}
          value={values.buttonText}
          handleChange={handleChange} />
      </details>
    </div>
  );
};
