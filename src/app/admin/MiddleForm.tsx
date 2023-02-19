import React from "react";
import { FormProps } from "./page";
import { uploadImageToFirebase } from "../../helpers/fire";

const MiddleForm = ({
  handleChange,
  values,
  handleSubmit,
  setFieldValue,
}: FormProps) => {
  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const file = files && files[0];
    if (file) {
      const res = await uploadImageToFirebase(file);
      setFieldValue?.("images", res?.url || "");
    }
  };

  return (
    <div className="bg-white min-h-96 w-96 flex flex-col justify-center items-center p-4 rounded-md">
      <input
        type="text"
        className="bg-gray-200 h-10 w-full px-4 py-2 my-1 rounded-md outline-green-500"
        placeholder="title"
        onChange={handleChange("title")}
        value={values.title}
      />
      <textarea
        className="bg-gray-200  w-full px-4 py-2 my-1 rounded-md  outline-green-500"
        placeholder="description"
        onChange={handleChange("description")}
        value={values.description}
      />
      <textarea
        className="bg-gray-200 h-64 w-full px-4 py-2 my-1 rounded-md  outline-green-500"
        placeholder="content"
        onChange={handleChange("content")}
        value={values.content}
      />
      <label
        htmlFor="images"
        className="bg-white ring-green-500 ring-1 text-green-500 h-auto w-full px-4 py-2 my-1 rounded-md  flex justify-around items-center"
      >
        Upload Images{" "}
        {values.images && (
          <img src={values.images} alt="" className="w-10 h-10 rounded-full" />
        )}
      </label>
      <input
        type="file"
        id="images"
        className="hidden"
        onChange={handleImage}
      />

      <button
        type={"submit"}
        className="bg-green-500 h-10 w-full px-4 py-2 my-1 rounded-md text-white"
      >
        Submit
      </button>
    </div>
  );
};

export default MiddleForm;
