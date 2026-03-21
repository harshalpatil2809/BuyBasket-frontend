import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import SkeletonLoader from "../../UI/SkeletonLoader";
import { motion } from "motion/react";
import CategoryCard from "../../UI/CategoryCard";

const CategoryDeatil = () => {
  const { categorie } = useParams();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (!categorie) return;

    const fetchCategories = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/category/${categorie}`,
        );

        setDetails(data.products || []);
      } catch (error) {
        let errorMessage = "Something went wrong.";

        if (error.response) {
          const { status, data } = error.response;

          if (status === 404) {
            errorMessage = "Category not found (404).";
          } else if (status >= 500) {
            errorMessage = `Server error (${status}). Try again later.`;
          } else if (data?.message) {
            errorMessage = data.message;
          }
        } else if (error.request) {
          errorMessage =
            "Network error. Please check your internet connection.";
        } else {
          errorMessage = error.message;
        }

        toast.error(errorMessage, { duration: 5000 });
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [categorie]);

  return (
    <div className="py-30 text-black min-h-screen bg-green-200 lg:px-10 md:px-10 px-2">
      <div className="flex flex-wrap lg:gap-6 md:gap-6 gap-2 items-center justify-center w-full">
        {loading ? (
          <div
            className="mt-5 md:mt-8 w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 
                  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
          >
            {[...Array(12)].map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-8 text-center text-[#065F46] capitalize">
              {categorie}
            </h1>

            <div
              className="mt-5 md:mt-8 w-full grid gap-y-2 gap-x-1 md:gap-5 xl:gap-10 
                          grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
            >
              {details.map((item) => (
                <motion.div whileTap={{ scale: 0.95 }} key={item.id}>
                  <CategoryCard
                    thumbnail={item.thumbnail}
                    brand={item.brand}
                    price={item.price}
                    rating={item.rating}
                    id={item.id}
                  />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryDeatil;
