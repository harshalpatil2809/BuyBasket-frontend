import axios from "axios";
import React, { useEffect, useState } from "react";
import SkeletonLoader from "../../UI/SkeletonLoader";
import HeroCard from "../../UI/HeroCard";
import HeroCategory from "../../UI/HeroCategory";
import NormalCard from "../../UI/NormalCard";
const Beauty =
  "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1774086428/Beauty_rprzg2.png";

const Fragrances =
  "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1774086428/Fragrances_bjz56a.png";

const Furniture =
  "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1774086428/Furniture_vtfrsn.png";

const Groceries =
  "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1774086428/Groceries_telb68.png";

const Sunglasses =
  "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1774086428/Sunglasses_l4kwja.png";

const Laptops =
  "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1774086428/Laptops_bnz5ct.png";

const Tops =
  "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1774086428/Tops_cnw671.png";

const Mobiles =
  "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1774086428/Mobiles_pkmhzs.png";

const HeroIMG1 =
  "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772532647/banner-washing-machines_bg5ogq.png";
const HeroIMG2 =
  "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772532647/banner-natural-skincare_b4hyck.png";
const HeroIMG3 =
  "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772532646/banner-iphone-collection_w8rwsd.png";
const HeroIMG4 =
  "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772533301/banner-big-sale_pfsg2b.png";

const categories = [
  { img: Beauty, name: "Beauty", cate: "beauty" },
  { img: Fragrances, name: "Fragrances", cate: "fragrances" },
  { img: Furniture, name: "Furniture", cate: "furniture" },
  { img: Groceries, name: "Groceries", cate: "groceries" },
  { img: Sunglasses, name: "Sunglasses", cate: "sunglasses" },
  { img: Laptops, name: "Laptops", cate: "laptops" },
  { img: Mobiles, name: "Mobiles", cate: "smartphones" },
  { img: Tops, name: "Tops", cate: "tops" },
];

const heroImages = [
  { img: HeroIMG1, title: "Beauty Sale" },
  { img: HeroIMG2, title: "Modern Furniture" },
  { img: HeroIMG3, title: "Latest Laptops" },
  { img: HeroIMG4, title: "Trending Sunglasses" },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Fetch products
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=12").then((res) => {
      setProducts(res.data.products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-green-200 py-30 px-4">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 HERO SECTION */}
        <div className="relative w-full overflow-hidden rounded-2xl mb-16">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {heroImages.map((item, index) => (
              <div key={index} className="min-w-full">
                <HeroCard img={item.img} title={item.title} />
              </div>
            ))}
          </div>
        </div>

        {/* 🛍️ TOP CATEGORIES */}
        <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
          Top Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mb-20 place-items-center">
          {categories.map((cat, index) => (
            <HeroCategory key={index} img={cat.img} name={cat.name} />
          ))}
        </div>

        {/* 🛒 FEATURED PRODUCTS */}
        <h2 className="text-3xl font-bold text-green-900 text-center mb-8">
          Featured Products
        </h2>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <SkeletonLoader key={index} />
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
            {products.slice(0, 8).map((product) => (
              <NormalCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;