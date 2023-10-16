import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearError, profile, updateProfile } from "../../../redux/features/authSlice";
import Loader from "../../../components/layout/loader/Loader";
import Spinner from "react-bootstrap/Spinner";

const Profile = () => {
  const { user, loading,isLoading, error } = useSelector((state) => state.auth);
  console.log(user);
  const dispatch = useDispatch();
  const showToastOnce = useRef(false);
  const [updateValue, setUpdateValue] = useState({
    fullName: "",
  });
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const { fullName } = updateValue;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUpdateValue({ ...updateValue, [name]: value });
  };
  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setAvatar(file);
      };
    }
  };
  const handleSubmit=(e)=>{
    e.preventDefault();

    const updateForm = new FormData()
    updateForm.append("fullName",fullName)
    updateForm.append("avatar",avatar)
    dispatch(updateProfile({updateForm,toast}));
  }
  useEffect(()=>{
    if(user){
      setUpdateValue({
        fullName:user.fullName || ""
      })
      setAvatarPreview(user?.avatar?.url || "")
    }
  },[user])
  useEffect(() => {
    if (error && !showToastOnce.current) {
      toast.error(error);
      dispatch(clearError());
      showToastOnce.current = true;
    }
    dispatch(profile());
  }, [dispatch, error]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="bg">
            <div className="max-w-md mx-auto mt-8 p-4 ">
              <h2 className="text-2xl font-semibold mb-4">Profile info</h2>
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
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500 text-black"
                    value={fullName}
                    onChange={handleChange}
                  />
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
                    value={user.email}
                    disabled
                  />
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
                    value={user.mobile_No}
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                    value={user.role}
                    disabled
                  />
                </div>
                <div className="flex">
                  <input
                    type="file"
                    name="avatar"
                    accept="image/"
                    onChange={handleInputChange}
                  />
                  <img 
                  src={avatarPreview} 
                  alt="avtar Img" 
                  className="w-32 h-32 object-cover" />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="py-2 px-4 bg-indigo-600 hover:bg-green-700 text-white rounded-mdcfocus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                  {isLoading && <Spinner animation="border" size="sm"/>}  Save
                  </button>
                </div>
              
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
