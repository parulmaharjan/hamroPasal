import React from "react";

const AdminDashboard = () => {
  return (
    <>
      <div className="bg">
        <div className="max-w-md mx-auto mt-8 p-4 bg-gray-200 mb-3 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">ADD Product</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-gray-700"
              >
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="productImg"
                className="block text-sm font-medium text-gray-700"
              >
                productImg
              </label>
              <input
                type="file"
                id="productImg"
                name="productImg"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                category
              </label>
              <input
                type="category"
                id="category"
                name="category"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="ratings"
                className="block text-sm font-medium text-gray-700"
              >
                ratings
              </label>
              <input
                type="number"
                id="ratings"
                name="ratings"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="manufacture"
                className="block text-sm font-medium text-gray-700"
              >
                manufacture
              </label>
              <input
                type="text"
                id="manufacture"
                name="manufacture"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="SKU"
                className="block text-sm font-medium text-gray-700"
              >
                SKU
              </label>
              <input
                type="text"
                id="SKU"
                name="SKU"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="isInStock"
                className="block text-sm font-medium text-gray-700"
              >
                Stock
              </label>
              <input
                type="number"
                id="isInStock"
                name="isInStock"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="createdAt"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="createdAt"
                name="isInStock"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="py-2 px-4 bg-indigo-600 text-white rounded-mdcfocus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
