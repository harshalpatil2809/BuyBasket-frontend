import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import NoProduct from "../../UI/NoProduct";
import ProductLoader from "../../UI/ProductLoader";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addingCart, setAddingCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );

        setProduct(data);
        setSelectedImage(data.images?.[0] || data.thumbnail);
      } catch (error) {
        let message = "Something went wrong";

        if (error.response?.status === 404) {
          message = "Product not found";
        } else if (error.response?.status >= 500) {
          message = "Server error. Try again later";
        } else if (error.request) {
          message = "Network error";
        }

        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!product || product.stock === 0) return;
    let token = localStorage.getItem("token");

    try {
      setAddingCart(true);
      const API = import.meta.env.VITE_API_URL;
      await axios.post(
        `${API}/cart/addcart/`,
        {
          product_name: product.title,
          price: product.price,
          quantity: 1,
          image: product.thumbnail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success("Added to cart");
    } catch (error) {
      console.error(error)
      toast.error("Failed to add product");
    } finally {
      setAddingCart(false);
    }
  };

  if (loading) {
    return <ProductLoader />;
  }

  if (!product) return <NoProduct />;

  const inStock = product.stock > 0;

  return (
    <div className="min-h-screen bg-green-200 flex items-center justify-center p-6 pt-16">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div>
          <img
            src={selectedImage}
            alt={product.title}
            className="w-full max-w-md mx-auto rounded-2xl shadow-md mb-6"
          />

          <div className="flex gap-3 justify-center flex-wrap">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="product"
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition
                ${selectedImage === img
                    ? "ring-2 ring-green-500"
                    : "hover:scale-105"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

          <p className="text-gray-500 mt-1">
            Brand:
            <span className="ml-2 font-medium text-gray-700">
              {product.brand}
            </span>
          </p>

          {/* Rating + Stock */}
          <div className="flex items-center gap-6 mt-4">
            <div className="text-yellow-500 font-medium">
              ⭐ {product.rating}
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium
              ${inStock
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
                }`}
            >
              {inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-3xl font-bold text-green-600">
              ₹{(product.price * 81).toFixed(2)}
            </p>

            <p className="text-sm text-gray-500">
              {product.discountPercentage}% Discount
            </p>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-2">Description</h3>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Extra Details */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-600">
            <div>SKU: {product.sku}</div>
            <div>Weight: {product.weight}g</div>
            <div>Min Order: {product.minimumOrderQuantity}</div>
            <div>Warranty: {product.warrantyInformation}</div>
            <div>Return: {product.returnPolicy}</div>
            <div>{product.shippingInformation}</div>
          </div>

          {/* Buttons */}
          <div className="flex w-full gap-3 mt-8">
            <button
              onClick={handleAddToCart}
              hidden={!token}
              disabled={!inStock || addingCart}
              className={`w-1/2 py-3 rounded-xl font-semibold transition
              ${inStock
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-400 cursor-not-allowed text-white"
                }`}
            >
              {addingCart ? "Adding..." : "Add to Cart"}
            </button>

            <button
              disabled={!inStock || !token}
              hidden={!token}
              onClick={() => {
                navigate("/delivery", {
                  state: {
                    product: {
                      product_name: product.title,
                      price: (product.price * 81).toFixed(2),
                      quantity: 1,
                      image: product.thumbnail,
                    },
                  },
                });
              }}
              className={`w-1/2 py-3 rounded-xl transition font-semibold
    ${inStock && token
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-400 cursor-not-allowed text-white"
                }`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
