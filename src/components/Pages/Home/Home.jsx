import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  let timer;

  const AllProduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setAllProduct(response.data.products);

      timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  AllProduct();

  return () => clearTimeout(timer);
}, []);

  return (
    <div className="py-20 text-black min-h-screen bg-green-200 px-10">
      <div className="flex flex-wrap gap-6 items-center justify-center w-full">

        {/* 🔥 Skeleton Loader */}
        {loading &&
          Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white/50 rounded-3xl shadow-md p-4 w-60 animate-pulse"
              >
                <div className="bg-gray-300 h-40 rounded-2xl mb-4"></div>
                <div className="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
                <div className="bg-gray-300 h-4 w-1/2 rounded mb-4"></div>
                <div className="flex justify-center">
                  <div className="bg-gray-300 h-5 w-16 rounded"></div>
                  <div className="bg-gray-300 h-5 w-10 rounded"></div>
                </div>
              </div>
            ))}

        {/* ✅ Products */}
        {!loading &&
          allProduct.map((product) => (
            <div
              key={product.id}
              className="bg-white/70 backdrop-blur-md rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-4 w-60 flex flex-col items-center"
            >
              <img
                src={product.images?.[0]}
                alt={product.title}
                className="w-32 h-40 object-cover rounded-2xl mb-4"
              />

              <h2 className="text-lg font-semibold text-gray-800 text-center line-clamp-1">
                {product.title}
              </h2>

              <p className="text-sm text-gray-500 mb-1">
                {product.category}
              </p>

              <div className="flex items-center gap-10">
                <p className="text-xl font-bold text-green-600 mb-2">
                  ${product.price}
                </p>

                {product.rating && (
                  <p className="text-sm text-yellow-500 mb-3">
                    ⭐ {product.rating}
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;