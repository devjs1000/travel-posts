import React from "react";
import { FormProps } from "./page";

export function RightForm({ values, handleChange }: FormProps) {
  return (
    <div className="bg-white min-h-96 w-96 flex flex-col justify-center items-center p-4 rounded-md accent-green-500">
      <input
        type="text"
        className=" outline-green-500 bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="sku"
        onChange={handleChange("sku")}
        value={values.sku}
      />
      <input
        type="text"
        className=" outline-green-500 bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="country"
        onChange={handleChange("country")}
        value={values.country}
      />

      <input
        type="text"
        className=" outline-green-500 bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="state"
        onChange={handleChange("state")}
        value={values.state}
      />

      <input
        type="text"
        className=" outline-green-500 bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md"
        placeholder="city"
        onChange={handleChange("city")}
        value={values.city}
      />
      <label className="bg-white ring-green-500 ring-1 text-green-500 h-10 w-full select-none px-4 flex gap-4  py-2 my-1 rounded-md ">
        <input
          type="checkbox"
          id="isAvailable"
          className="outline-green-500"
          onChange={handleChange("isAvailable")}
          checked={values.isAvailable}
        />
        Is Available?
      </label>
      <label className="bg-white ring-green-500 ring-1 text-green-500 h-10 w-full select-none px-4 flex gap-4  py-2 my-1 rounded-md ">
        <input
          type="checkbox"
          id="ticket"
          className="outline-green-500 "
          onChange={handleChange("ticket")}
          checked={values.ticket}
        />
        Ticket?
      </label>
      <input
        type="number"
        className="bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md outline-green-500"
        placeholder="fare"
        onChange={handleChange("fare")}
        value={values.fare}
      />

      <div className="bg-white  ring-green-500 h-10 w-full px-4 py-2 my-1 select-none rounded-md flex gap-4 ring-1">
        From:{" "}
        <input
          type="date"
          className="outline-green-500 bg-white px-4 py-2"
          onChange={handleChange("fromDate")}
          value={values.fromDate}
        />
        To:{" "}
        <input
          type="date"
          className="outline-green-500 bg-white px-4 py-2"
          onChange={handleChange("toDate")}
          value={values.toDate}
        />
      </div>
      <div className="bg-white ring-green-500 h-10 w-full px-4 py-2 my-1 select-none rounded-md flex gap-4 ring-1">
        From:{" "}
        <input
          type="time"
          className=" outline-green-500 bg-white px-4 py-2 accent-green-500"
          onChange={handleChange("fromTime")}
          value={values.fromTime}
        />
        To:{" "}
        <input
          type="time"
          className=" outline-green-500 bg-white px-4 py-2"
          onChange={handleChange("toTime")}
          value={values.toTime}
        />
      </div>
    </div>
  );
}
