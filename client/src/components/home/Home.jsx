import React, { useEffect, useState } from "react";
import "./Home.css";
import BannerPage from "./banner/BannerPage";
import Product from "../../../../server/model/productModel";
import TopPicks from "./topPicks/TopPicks";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, clearError } from "../../redux/features/productSlice";
import Loader from "../layout/loader/Loader";
import {toast} from "react-toastify";

const Home = () => {
  const { products, loading, error } = useSelector((state) => state.product);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    if(error){
      toast.error(error)
      dispatch(clearError)

    }
    dispatch(allProducts());
  }, [dispatch,error]);

  return (
    <>
      <div className=" ">
        <BannerPage />
      </div>
      <div className="pr-4 pl-4 px-4 mt-3 mb-1 mx-2 font-bold">On Sale Now</div>
      <div className="bg-[#f5f5f5] container mx-auto py-8">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {products.map((product, index) => (
                <TopPicks key={product._id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
