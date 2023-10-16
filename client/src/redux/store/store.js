import {configureStore} from "@reduxjs/toolkit"
import productSlice from "../features/productSlice";
import authslice from "../features/authslice";

const store = configureStore({
    reducer:{
        product:productSlice,
        auth:authslice
        


    }
})
export default store;