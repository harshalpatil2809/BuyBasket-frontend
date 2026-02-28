import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import NoProduct from "../../UI/NoProduct";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [Loader, setLoader] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoader(true);
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
        setSelectedImage(response.data.images?.[0]);
      } catch (error) {
        let errorMessage = "An unknown error occurred.";
        if (error.response) {
          const status = error.response.status;
          if (status === 404) {
            errorMessage = `Resource not found: 404`;
          } else if (status >= 500) {
            errorMessage = `Server Error (${status}): Please try again later.`;
          }
        } else if (error.request) {
          errorMessage =
            "Network Error: Could not connect to the server.";
        } else {
          errorMessage = `Application Error: ${error.message}`;
        }

        toast.error(errorMessage, { duration: 5000 });
      } finally {
        setLoader(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (Loader) {
    return (
      <div className="min-h-screen bg-green-200 flex items-center justify-center text-xl font-semibold">
        Loading Product...
      </div>
    );
  }

  if (!product) return <NoProduct />;

  return (
    <div className="min-h-screen bg-green-200 flex items-center justify-center p-6 pt-15">
      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT - Images */}
        <div>
          <img
            src={selectedImage}
            alt={product.title}
            className="w-full max-w-md mx-auto rounded-3xl shadow-md mb-6"
          />

          <div className="flex gap-4 justify-center">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 rounded-xl object-cover cursor-pointer transition ${
                  selectedImage === img
                    ? "ring-2 ring-green-500"
                    : "hover:scale-105"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - Details */}
        <div className="flex flex-col">

          <h1 className="text-3xl font-bold text-gray-800">
            {product.title}
          </h1>

          <p className="text-gray-500 mt-1">
            Brand: <span className="font-medium text-gray-700">{product.brand}</span>
          </p>

          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center text-yellow-500 font-medium">
              ⭐ {product.rating}
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.stock > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {product.availabilityStatus}
            </span>
          </div>

          <div className="mt-6">
            <p className="text-3xl font-bold text-green-600">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500">
              {product.discountPercentage}% Discount
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-600">
            <div>SKU: {product.sku}</div>
            <div>Weight: {product.weight}g</div>
            <div>Min Order: {product.minimumOrderQuantity}</div>
            <div>Warranty: {product.warrantyInformation}</div>
            <div>Return: {product.returnPolicy}</div>
            <div>{product.shippingInformation}</div>
          </div>

          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition font-semibold">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default Product;