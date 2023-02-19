"use client";

import React from "react";
import { useFormik } from "formik";
import { loginUser } from "../../helpers/fire";
import { withNoAuth } from "../../HOC/withNoAuth";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      loading: false,
    },
    onSubmit: async (values) => {
      formik.setFieldValue("loading", true);
      const usr = await loginUser(values.email, values.password);
      formik.setFieldValue("loading", false);
    },
  });

  return (
    <div className="bg-gray-100 h-screen w-screen flex justify-center items-center">
      <div className="grid place-items-center bg-white h-[300px] w-[300px] rounded-lg p-4 shadow-md">
        <input
          type="email"
          placeholder="Email"
          className="h-10 w-full px-4 py-2 my-1 rounded-md  ring-1 ring-gray-100 bg-gray-50 outline-green-500 "
          onChange={formik.handleChange("email")}
          value={formik.values.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="h-10 w-full px-4 py-2 my-1 rounded-md  ring-1 ring-gray-100 bg-gray-50 outline-green-500 "
          onChange={formik.handleChange("password")}
          value={formik.values.password}
        />
        <button
          disabled={!formik.isValid || formik.values.loading}
          className="bg-green-500 h-10 w-full px-4 py-2 my-1 rounded-md text-white"
          onClick={() => formik.handleSubmit()}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default withNoAuth(Login);
