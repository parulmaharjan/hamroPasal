import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { changePassword, clearError } from "../../../redux/features/authSlice";
const ChangePassword = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [changePasswordValue, setChangePasswordValue] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [changePasswordErr, setChangePasswordErr] = useState({});
  const { oldPassword, newPassword, confirmPassword } = changePasswordValue;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setChangePasswordValue({ ...changePasswordValue, [name]: value });
  };
  const validatedForm = () => {
    let newErrors = {};
    if (!oldPassword) {
      newErrors.oldPassword = "oldPassword is required!";
    }
    if (!newPassword) {
      newErrors.newPassword = "newPassword is required!";
    } else if (newPassword.length < 8) {
      newErrors.newPassword = "newPassword must be 8 digits";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "confirmPassword is required";
    } else if (confirmPassword.length < 8) {
      newErrors.confirmPassword = "confirmPassword must be 8 digits";
    }
    setChangePasswordErr(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatedForm()) {
      dispatch(changePassword({ changePasswordValue, toast, navigate }));
    } else {
      return toast.warning("invalid input");
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError);
    }
  }, [dispatch, error]);
  return (
    //changepassword.jsx                                                                                                                                                                                 import React from 'react'
    <>
      <div className="bg-[#F5F5F5] py-2 my-4">
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="oldPassword"
                className="block text-sm font-medium text-gray-700"
              >
                oldPassword
              </label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                value={oldPassword}
                onChange={handleChange}
              />
              {changePasswordErr && (
                <span className=" text-red-600 text-sm">
                  {changePasswordErr.oldPassword}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700"
              >
                NewPassword
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                value={newPassword}
                onChange={handleChange}
              />
              {changePasswordErr && (
                <span className=" text-red-600 text-sm">
                  {changePasswordErr.newPassword}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                confirmPassword
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                value={confirmPassword}
                onChange={handleChange}
              />
              {changePasswordErr && (
                <span className=" text-red-600 text-sm">
                  {changePasswordErr.confirmPassword}
                </span>
              )}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {loading && <Spinner animation="border" size="sm" />}Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ChangePassword;
