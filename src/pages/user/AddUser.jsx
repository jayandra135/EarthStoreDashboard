import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useFormik } from "formik";
import { actions } from "react-table";
import { userSchema } from "../../schema";
import MasterServices from "../../ApiServices/MasterServices";
import { toast } from "react-toastify";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const AddUser = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const user = {
    userid: _id,
    type: "edit",
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    contact: null,
    dob: "",
  };
  const [formData, setFormData] = useState(initialValues);
  const gender = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
  ];

  const getSingleUserData = async () => {
    if (user.userid) {
      const response = await MasterServices.getSingleUser(user?.userid);
      if (response.status === 200) {
        setFormData({
          firstName: response?.data?.data?.firstName,
          lastName: response?.data?.data?.lastName,
          email: response?.data?.data?.email,
          password: response?.data?.data?.password,
          gender: response?.data?.data?.gender,
          contact: response?.data?.data?.contact,
          dob: response?.data?.data?.dob,
        });
      }
    }
  };

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      enableReinitialize: true,
      initialValues: formData,
      validationSchema: user?.userid ? "" : userSchema,
      onSubmit: async (values, { resetForm }) => {
        resetForm({ values: initialValues });
        if (user?.userid) {
          const response = await MasterServices.updateUserData(
            user.userid,
            values
          );

          if (response?.data?.message === "updated") {
            toast.success("Data update Successfully");
            setTimeout(() => {
              navigate("/user");
            }, 0);
          } else {
            toast.error("something wrong happen");
          }
        } else {
          const response = await MasterServices.postUserData(values);

          if (response?.data?.message === "Success") {
            toast.success("Data submitted Successfully");
          } else {
            toast.error("something wrong happen");
          }
        }
      },
    });

  useEffect(() => {
    getSingleUserData();
  }, []);

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="flex">
            <h1 className="text-lg font-semibold">
              {user.userid ? "Edit User" : "Add User"}
            </h1>
          </div>
          <form className="flex mt-5" onSubmit={handleSubmit}>
            <div className="flex flex-col p-2 w-full gap-5">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter FirstName"
                    onChange={handleChange}
                    value={values?.firstName}
                    onBlur={handleBlur}
                    className=" rounded-lg sm:text-sm shadow border border-gray-400 sm:max-w-sm w-full max-w-full"
                  />
                  {errors.firstName && touched.firstName ? (
                    <p className="text-red-500 sm:text-sm m-1">
                      {errors.firstName}
                    </p>
                  ) : null}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter LastName"
                    onChange={handleChange}
                    value={values?.lastName}
                    onBlur={handleBlur}
                    className=" rounded-lg sm:text-sm shadow border border-gray-400 sm:max-w-sm w-full max-w-full"
                  />
                  {errors.lastName && touched.lastName ? (
                    <p className="text-red-500 sm:text-sm m-1">
                      {errors.lastName}
                    </p>
                  ) : null}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    value={values?.email}
                    onBlur={handleBlur}
                    className=" rounded-lg sm:text-sm shadow border border-gray-400 sm:max-w-sm w-full max-w-full"
                  />
                  {errors.email && touched.email ? (
                    <p className="text-red-500 sm:text-sm m-1">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    value={values?.password}
                    onBlur={handleBlur}
                    className=" rounded-lg sm:text-sm shadow border border-gray-400 sm:max-w-sm w-full max-w-full"
                  />
                  {errors.password && touched.password ? (
                    <p className="text-red-500 sm:text-sm m-1">
                      {errors.password}
                    </p>
                  ) : null}
                </div>
                <div>
                  <input
                    type="number"
                    name="contact"
                    placeholder="Enter Phone Number"
                    onChange={handleChange}
                    value={
                      values?.contact !== null ? String(values.contact) : ""
                    }
                    onBlur={handleBlur}
                    className=" rounded-lg sm:text-sm shadow border border-gray-400 sm:max-w-sm w-full max-w-full"
                  />
                  {errors.contact && touched.contact ? (
                    <p className="text-red-500 sm:text-sm m-1">
                      {errors.contact}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Select
                    className="basic-single rounded-lg sm:text-sm shadow border border-gray-400 sm:max-w-sm w-full max-w-full"
                    classNamePrefix="select"
                    placeholder="Select Gender"
                    value={gender.find(
                      (option) => option.value === values.gender
                    )}
                    onBlur={handleBlur}
                    name="gender"
                    options={gender}
                    onChange={(selectedOption) => {
                      setFormData({ ...values, gender: selectedOption.value });
                    }}
                  />
                  {errors.gender && touched.gender ? (
                    <p className="text-red-500 sm:text-sm m-1">
                      {errors.gender}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
                <div className="flex gap-x-2 items-center">
                  <label className="whitespace-nowrap bg-white p-2 sm:text-sm rounded-lg">
                    Select DOB
                  </label>
                  <input
                    type="date"
                    placeholder="DOB"
                    onChange={handleChange}
                    name="dob"
                    value={values?.dob}
                    onBlur={handleBlur}
                    className=" rounded-lg sm:text-sm shadow border border-gray-400 sm:max-w-sm w-full max-w-full"
                  />
                  {errors.dob && touched.dob ? (
                    <p className="text-red-500 sm:text-sm m-1">{errors.dob}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-end">
                <div>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {user?.userid ? "Update" : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUser;
