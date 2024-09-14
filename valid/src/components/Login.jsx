import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import axios from "axios";

export default function Login() {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: loginUser,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
  });

  async function loginUser() {
    console.log("Submitting form", formik.values);
    // TODO: axios sends API request
    // https://ecommerce-node4.onrender.com/auth/signup
    const { data } = await axios.post("url", formik.values);
  }

  return (
    <div className="mt-5">
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger"> {formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger"> {formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="mt-2 btn btn-outline-success">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
