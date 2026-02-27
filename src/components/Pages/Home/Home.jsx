import axios from "axios";
import React, { useEffect, useState } from "react";
import SkeletonLoader from "../../UI/SkeletonLoader";

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
    <div className="py-20 text-black min-h-screen bg-green-200 lg:px-10 md:px-10 px-2">



      <div className="flex flex-wrap lg:gap-6 md:gap-6 gap-2 items-center justify-center w-full">
        {/* 🔥 Skeleton Loader */}
        {loading &&
          Array(12)
            .fill(0)
            .map((index) => (
              <div key={index}>
                <SkeletonLoader/>
              </div>
            ))}

        {/* ✅ Products */}
        {!loading &&
          allProduct.map((product) => (
            <div
              key={product.id}
              className="bg-white/70 backdrop-blur-md rounded-3xl lg:px-2 md:px-2 shadow-md hover:shadow-xl transition-all duration-300 py-4 px-0 w-45 flex flex-col items-center"
            >
              <img
                src={product.images?.[0]}
                alt={product.title}
                loading="eager"
                className="w-32 h-auto object-cover rounded-2xl mb-4"
              />

              <h2 className="text-lg font-semibold text-gray-800 text-center line-clamp-1">
                {product.title}
              </h2>

              <p className="text-sm text-gray-500 mb-1">{product.category}</p>

              <div className="flex items-center justify-center gap-4 mt-2">
                <p className="text-xl font-bold text-green-600">
                  ${product.price}
                </p>

                {product.rating && (
                  <div className="flex items-center text-yellow-500 text-sm font-medium">
                    <span className="mr-1">⭐</span>
                    <span>{product.rating}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
