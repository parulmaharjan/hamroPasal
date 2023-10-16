import React from "react";
import { Link } from "react-router-dom";

const TopPicks = ({ product }) => {
  return (
    <>
      <div className=" bg-[#fff]flex flex-col items-center p-4 space-y-2">
        <Link to={`/product/details/${product._id}`} className="no-underline text-black">
          {" "}
          <img
            className="h-32 w-32 object-cover rounded-sm transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            src={product.productImg.url}
            alt={product.productName}
          />
          <h2 className="font-light">{product.productName}</h2>
          <p className="font-bold">Rs.{product.price}.00</p>
        </Link>
      </div>
    </>
  );
};

export default TopPicks;
