import axios from "axios";
import React, { useEffect, useState } from "react";
import SkeletonLoader from "../../UI/SkeletonLoader";
import NormalCard from "../../UI/NormalCard";

const Home = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer;

    const fetchAllProduct = async () => {
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

    fetchAllProduct();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-20 text-black min-h-screen bg-green-200 lg:px-10 md:px-10 px-2">
      <div className="flex flex-wrap lg:gap-6 md:gap-6 gap-2 items-center justify-center w-full">
        
        {/* 🔥 Skeleton Loader */}
        {loading &&
          Array(12)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <SkeletonLoader />
              </div>
            ))}

        {/* ✅ Products */}
        {!loading &&
          allProduct.map((product) => (
            <div key={product.id}>
              <NormalCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;