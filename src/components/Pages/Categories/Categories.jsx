import CateCard from "../../UI/CateCard";
import { motion } from "motion/react"

const Beauty = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179506/Beauty_x0b98r.jpg"
const Fragrances = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179508/Fragrances_ilxkts.jpg"
const Furniture = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179511/Furniture_budcgw.jpg"
const Groceries = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179507/Groceries_gt83bz.jpg"
const Home_Decoration = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179509/HomeDecoration_kada69.jpg"
const Kitchen_Accessories = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179509/KitchenAccessories_afltre.jpg"
const Laptops = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179508/Laptops_pjpkm8.jpg"
const Mens_Shirts = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179515/Men_sShirt_k7dgve.jpg"
const Mens_Shoes = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179520/MensShoes_twtwso.jpg"
const Mens_Watches = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179513/Mens_Watches_s1rriw.jpg"
const Mobile_Accessories = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179517/Mobile_Accessories_g5vwnp.avif"
const Motorcycle = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179518/Motorcycle_xs8rpu.jpg"
const Skin_Care = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179518/SkinCare_bsfpdy.avif"
const Mobiles = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179520/Mobiles_ynllcv.jpg"
const Sports_Accessories = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179526/SportsAccessories_ufosdb.jpg"
const Sunglasses = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179522/Sunglasses_re9ven.jpg"
const Tablets = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179524/Tablets_wqnjox.avif"
const Tops = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179530/Womens_Dresses_pvoteb.jpg"
const Vehicle = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179536/Vehicle_vyev6c.jpg"
const Womens_Bags = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179528/Womens_Bags_lutxld.jpg"
const Womens_Dresses = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179528/Tops_nepyo3.jpg"
const Womens_Jewellery = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179530/Womens_Jewellery_iisiqw.jpg"
const Womens_Shoes = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179532/Womens_Shoes_zpryrr.jpg"
const Womens_Watches = "https://res.cloudinary.com/dz5yaloug/image/upload/f_auto,q_auto,w_600/v1772179531/Womens_Watches_lqs07s.avif"

const Categories = () => {
    const categories = [
        {
            img: Beauty,
            name: "Beauty",
            cate: "beauty",
        },
        {
            img: Fragrances,
            name: "Fragrances",
            cate: "fragrances",
        },
        {
            img: Furniture,
            name: "Furniture",
            cate: "furniture",
        },
        {
            img: Groceries,
            name: "Groceries",
            cate: "groceries",
        },
        {
            img: Home_Decoration,
            name: "Home Decoration",
            cate: "home-decoration",
        },
        {
            img: Kitchen_Accessories,
            name: "Kitchen Accessories",
            cate: "kitchen-accessories",
        },
        {
            img: Laptops,
            name: "Laptops",
            cate: "laptops",
        },
        {
            img: Mens_Shirts,
            name: "Mens Shirts",
            cate: "mens-shirts",
        },
        {
            img: Mens_Shoes,
            name: "Mens Shoes",
            cate: "mens-shoes",
        },
        {
            img: Mens_Watches,
            name: "Mens Watches",
            cate: "mens-watches",
        },
        {
            img: Mobile_Accessories,
            name: "Mobile Accessories",
            cate: "mobile-accessories",
        },
        {
            img: Motorcycle,
            name: "Motorcycle",
            cate: "motorcycle",
        },
        {
            img: Skin_Care,
            name: "Skin Care",
            cate: "skin-care",
        },
        {
            img: Mobiles,
            name: "Mobiles",
            cate: "smartphones",
        },
        {
            img: Sports_Accessories,
            name: "Sports Accessories",
            cate: "sports-accessories",
        },
        {
            img: Sunglasses,
            name: "Sunglasses",
            cate: "sunglasses",
        },
        {
            img: Tablets,
            name: "Tablets",
            cate: "tablets",
        },
        {
            img: Tops,
            name: "Tops",
            cate: "tops",
        },
        {
            img: Vehicle,
            name: "Vehicle",
            cate: "vehicle",
        },
        {
            img: Womens_Bags,
            name: "Womens Bags",
            cate: "womens-bags",
        },
        {
            img: Womens_Dresses,
            name: "Womens Dresses",
            cate: "womens-dresses",
        },
        {
            img: Womens_Jewellery,
            name: "Womens Jewellery",
            cate: "womens-jewellery",
        },
        {
            img: Womens_Shoes,
            name: "Womens Shoes",
            cate: "womens-shoes",
        },
        {
            img: Womens_Watches,
            name: "Womens Watches",
            cate: "womens-watches",
        },
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-[#B9F8CF] to-[#A0E9C2]">

            <div className="p-5 md:p-10">
                {/* Title */}
                <h1 className="text-[#065F46] text-4xl md:text-5xl font-bold text-center mt-10 mb-8 tracking-wide">
                    Categories
                </h1>

                {/* Grid */}
                <div
                    className="mt-5 md:mt-8 w-full grid 
                      gap-y-4 gap-x-3 md:gap-6 xl:gap-10 
                      grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
                >
                    {categories.map((data) => (
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            key={data.name}
                        >
                            <CateCard
                                img={data.img}
                                name={data.name}
                                cate={data.cate}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
