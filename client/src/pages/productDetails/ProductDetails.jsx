import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearError, singleProduct } from "../../redux/features/productSlice";
import { useParams } from "react-router-dom";
import Loader from "../../components/layout/loader/Loader";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
  const { product, loading, error } = useSelector((state) => state.product);
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#ffd707",
    size: window.innerWidth < 600 ? 12 : 16,
    value: product.ratings,
    isHalf: true,
  };
  console.log(product);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    dispatch(singleProduct(id));
  }, [dispatch, error, id]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-gray-100 ">
          <div className="container flex-auto mx-auto md-flex h-auto  ">
            <div className="grid grid-cols-2 mt-3  ">
              <div className="flex justify-stretch ">
                {" "}
                <img src={product?.productImg?.url} alt={product.productName} />
              </div>
              <div className="grid grid-cols-1 ">
                <p className="text-5xl font-bold mt-4">
                  {product?.productName}
                </p>
                <div className="flex items-center mb-2">
                  <div className="mr-2">
                    <span className="text-yellow-500">
                      <ReactStars {...options} />
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">(Customer Reviews)</span>
                  </div>
                  <hr />
                </div>

                <p className="text-2xl text-red-600 ">Rs.{product?.price}</p>
                <p className="text-2xl ">
                  Size : {product?.SKU}
                  <hr />
                </p>
                <p
                  className={
                    product.isInStock
                      ? "text-green-500 text-xl"
                      : "text-red-600 text-xl"
                  }
                >
                  {product.isInStock ? "In stock" : "out of stock"}
                </p>

                <div className="flex justify-start ">
                  <button className="bg-green-500 text-white px-2 py-2 w-45 rounded-md mr-10 mb-2">
                    Add to carts
                  </button>
                  <button className="bg-red-600 text-white px-2 py-2 w-45 rounded-md mr-2 mb-2">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-red-600 w-100% h-auto">
                <p className="text-xl text-white px-1 pb-0 mb-1 mt-3">
                  Product details
                </p>
              </div>
              <div className="container mb-2 bg-white h-auto border-x-2 border-b-2 border-inherit ">
                <p className=" text-gray-400 list-disc">
                  {product?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
