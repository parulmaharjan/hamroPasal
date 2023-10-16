import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaViber } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { FcCustomerSupport } from "react-icons/fc";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profile, setLogout } from "../../../redux/features/authSlice";
import { toast } from "react-toastify";
import decode from "jwt-decode";

const TopHeader = ({ isAuthenticated,user}) => {
  // const { isAuthenticated,user } = useSelector((state) => state.auth);
  const userToken = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isShownDropDown, setIsShownDropDown] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(()=>{
    dispatch(profile());

  },[dispatch]);

  useEffect(() => {
    if (userToken) {
      const decodedToken = decode(userToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(setLogout());
        toast.warning("your session has been expired login first");
        navigate("/login");
      }
    }
  }, [dispatch, navigate, userToken]);

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
    toast.success("logout successfully!");
  };

  return (
    <div>
      <div className="flex justify-between ...">
        <div className="flex justify-start">
          <FcCustomerSupport size={15} className="h-9 w-9 mt-1.5" />
          <FaWhatsapp
            size={20}
            className="text-white h-9 w-19 mt-1.5 ml-1 fill-green-400"
          />
          <div className="flex justify-normal">
            <FaViber
              size={20}
              className="text-white h-9 w-19 mt-1.5 ml-2 mr-1 fill-purple-800"
            />
            <p className="mr-1 mt-2.5">
              <Link
                to="tel:9861953444"
                style={{ textDecoration: "none", color: "black" }}
              >
                9861953444
              </Link>
            </p>
            <p className="mt-2.5 ">||</p>
            <p className="ml-0 mt-2.5">
              <Link
                to="tel:0557234"
                style={{ textDecoration: "none", color: "black" }}
              >
                0557234
              </Link>
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-normal">
            <p className="mt-2.5 ml-75 mr-16">
              <Link
                to="rewards:Nepa Rewards "
                style={{ textDecoration: "none", color: "black" }}
              >
                Nepa Rewards
              </Link>
            </p>
            <p className="mt-2.5 ml-4 mr-8">
              <Link
                to="sell:Sell your products "
                className="text-black no-underline"
              >
                Sell your products
              </Link>
            </p>
            <div className="relative">
              {isAuthenticated ? (
                <div className="flex items-center">
                  <button
                    className="flex items-center space-x-2 focus:outline-none"
                    onClick={() => setIsShownDropDown(!isShownDropDown)}
                  >
                    <img
                      src={user?.avatar?.url}
                      alt="avatar img"
                      className="w-8 h-8 m-2 rounded-full "
                    />
                    <span>{user.fullName}</span>
                  </button>
                  {isShownDropDown && (
                    <div className="fixed  z-10 top-0 mt-12 bg-white shadow-sm opacity-85">
                      <ul className="py-2">
                        <li className="px-4 py-2">
                          <NavLink
                            to="/profile"
                            className="no-underline text-black"
                          >
                            Profile
                          </NavLink>
                        </li>
                        <li className="px-4 py-2">
                          <NavLink
                            to="/my-orders"
                            className="no-underline text-black"
                          >
                            My orders
                          </NavLink>
                        </li>
                        <li className="px-4 py-2">
                          <NavLink
                            to="/cart-details"
                            className="no-underline text-black"
                          >
                            My cart
                          </NavLink>
                        </li>
                        <li className="px-4 py-2">
                          <button
                            onClick={handleLogout}
                            className="text-gray-500 hover:text-red-600"
                          >
                            Logout
                          </button>
                        </li>
                        <li className="px-4 py-2">
                          <NavLink
                            to="/change/password"
                            className="no-underline text-black"
                          >
                            Change PassWord
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to="/login "
                  //className="text-black hover:text-blue-700 no-underline"
                  style={{ textDecoration: "none", color: "black" }}
                  className="hover-blue"
                >
                  Login/Register
                </NavLink>
              )}
            </div>
            <GiSmartphone size={20} className=" h-9 w-19 mt-1 ml-2 mr-8" />
          </div>
        </div>
      </div>
      <hr className="w-full  mx-auto mt-1 mb-0 bg-gray-700 border-1 rounded md:my-10 dark:bg-gray-700" />
    </div>
  );
};

export default TopHeader;
