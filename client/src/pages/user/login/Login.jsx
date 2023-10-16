import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearError, login } from "../../../redux/features/authslice";
import Spinner from "react-bootstrap/esm/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginValue;
  const [loginErr, setLoginErr] = useState({});
  const validatedForm = () => {
    let newErrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email) {
      newErrors.email = "email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email";
    }
    if (!password) {
      newErrors.password = "password is required";
    } else if (password.length < 8) {
      newErrors.password = "password must be 8 character long";
    }
    setLoginErr(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatedForm()) {
      dispatch(login({ loginValue, toast, navigate }));
    } else {
      return toast.warning("Invalid input");
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);
  return (
    <div>
      <div className="bg-[#F5F5F5] py-2 my-4">
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
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
                className="mt-1  px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                onChange={handleChange}
              />
              {loginErr && (
                <span className="text-sm text-red-500">{loginErr.email}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                onChange={handleChange}
              />
              {loginErr && (
                <span className="text-red-500 text-sm">
                  {loginErr.password}
                </span>
              )}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              >
                {loading && <Spinner animation="border" size="sm" />} Login
              </button>
            </div>
            <span>
              Don't have an account ?
              <Link className="text-blue-500 underline" to="/register">
                create an account
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
