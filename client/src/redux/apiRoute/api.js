import axios from "axios";

axios;
const baseURL = "http://localhost:5000/api/v1";
const API = axios.create({
  baseURL: baseURL,
});

//interceptors
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  try {
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.log(error);
  }
  return req;
});

//user register
export const userRegister = (registerValue) =>
  API.post("/register", registerValue);

//user login
export const userLogin = (loginValue) => API.post("/login", loginValue);

//profile
export const userProfile = () => API.get("/single/user");

//update profile
export const profileUpdate = (updateForm) =>
  API.put("/update/user", updateForm);

//change  password
export const passwordChange = (changePasswordValue) =>
  API.put("/change/password", changePasswordValue);
//get all products
export const getProducts = () =>
 API.get("/all/products");

//get single product
export const getProduct = (id) =>
 API.get(`/single/getProductById/${id}`);
