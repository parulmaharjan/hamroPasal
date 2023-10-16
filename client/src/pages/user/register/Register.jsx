import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearError, register } from "../../../redux/features/authSlice";
import Spinner from "react-bootstrap/esm/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerValue, setRegisterValue] = useState({
    fullName: "",
    email: "",
    mobile_No: "",
    password: "",
    confirmPassword: "",
  });
  const [registerErr, setRegisterErr] = useState({});
  const { fullName, email, mobile_No, password, confirmPassword } =
    registerValue;
  const validatedForm = () => {
    let newErrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!fullName) {
      newErrors.fullName = "FullName is required";
    }

    if (!email) {
      newErrors.email = "email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "invalid email";
    }
    if (!mobile_No) {
      newErrors.mobile_No = "mobile number is required";
    } else if (mobile_No.length !== 10) {
      newErrors.mobile_No = "mobileNo must be of 10 digit";
    }
    if (!password) {
      newErrors.password = "password is required";
    } else if (password.length < 8) {
      newErrors.password = "password must be of 8 characters";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "confirm password is required field";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "password should match.please be careful!";
    }
    setRegisterErr(newErrors);
    return Object.keys(newErrors).length === 0; //returns boolean values
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegisterValue({ ...registerValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatedForm()) {
      dispatch(register({ registerValue, toast, navigate }));
    } else {
      return toast.warning("Invalid Input!");
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);
  return (
    <div className="bg">
      <div className="max-w-md mx-auto mt-8 p-4 bg-gray-200 mb-3 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              value={fullName}
              onChange={handleChange}
            />
            {registerErr && (
              <span className="text-sm text-red-500 px-2 py-2">
                {registerErr.fullName}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              value={email}
              onChange={handleChange}
            />

            {registerErr && (
              <span className="text-sm text-red-500 px-2 py-2">
                {registerErr.email}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile_No"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="mobile_No"
              name="mobile_No"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              value={mobile_No}
              onChange={handleChange}
            />
            {registerErr && (
              <span className="text-sm text-red-500 px-2 py-2">
                {registerErr.mobile_No}
              </span>
            )}{" "}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={handleChange}
            />
            {registerErr && (
              <span className="text-sm text-red-500 px-2 py-2">
                {registerErr.password}
              </span>
            )}{" "}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              value={confirmPassword}
              onChange={handleChange}
            />
            {registerErr && (
              <span className="text-sm text-red-500 px-2 py-2">
                {registerErr.confirmPassword}
              </span>
            )}{" "}
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-600 text-white rounded-mdcfocus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {loading && <Spinner animation="border" size="sm" />}Register
            </button>
          </div>
          <span>
            Already have an account?
            <Link className="text-blue-500 underline " to="/login">
              {" "}
              Login here!!
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
