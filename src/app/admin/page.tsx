"use client";

import React from "react";
import MiddleForm from "./MiddleForm";
import { RightForm } from "./RightForm";
import withAuth from "../../HOC/withAuth";
import { Form, Formik, useFormik } from "formik";
import { LeftForm } from "./LeftForm";
import { createPost, uploadToFirestore } from "../../helpers/fire";

const Admin = () => {
  const { values, resetForm, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues: {
        source: "",
        background: "#ffffff",
        text: "#000000",
        button: "#ffffff",
        buttonText: "#000000",
        title: "",
        description: "",
        content: "",
        images: "",
        sku: "",
        country: "",
        state: "",
        city: "",
        isAvailable: true,
        ticket: false,
        fare: 0,
        fromDate: "",
        toDate: "",
        fromTime: "",
        toTime: "",
      },
      onSubmit: async (values) => {
        createPost(values.sku, values);
        resetForm();
      },
      enableReinitialize: true,
    });
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold text-green-900 text-center py-6 ">
        Create a new <span className="text-green-700">Post</span>
      </h1>

      <div className="bg-gray-100 h-screen w-screen flex justify-center items-start p-4 gap-4">
        <LeftForm {...{ values, handleChange, setFieldValue }} />
        <MiddleForm
          {...{ values, handleChange, setFieldValue, handleSubmit }}
        />
        <RightForm {...{ values, handleChange, setFieldValue }} />
      </div>
    </form>
  );
};

export default withAuth(Admin);

export interface FormProps {
  handleChange: any;
  values: any;
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
  handleSubmit?: any;
}
