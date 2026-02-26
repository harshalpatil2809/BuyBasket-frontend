import CateCard from "../../UI/CateCard";

const Categories = () => {
    const categories = [
    {
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
        name: "Beauty",
        cate: "beauty",
    },
    {
        img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
        name: "Fragrances",
        cate: "fragrances",
    },
    {
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        name: "Furniture",
        cate: "furniture",
    },
    {
        img: "https://images.unsplash.com/photo-1542838132-92c53300491e",
        name: "Groceries",
        cate: "groceries",
    },
    {
        img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
        name: "Home Decoration",
        cate: "home-decoration",
    },
    {
        img: "https://images.unsplash.com/photo-1506368083636-6defb67639a7",
        name: "Kitchen Accessories",
        cate: "kitchen-accessories",
    },
    {
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        name: "Laptops",
        cate: "laptops",
    },
    {
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        name: "Mens Shirts",
        cate: "mens-shirts",
    },
    {
        img: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        name: "Mens Shoes",
        cate: "mens-shoes",
    },
    {
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        name: "Mens Watches",
        cate: "mens-watches",
    },
    {
        img: "https://images.unsplash.com/photo-1677145503731-87bfe49e5c67?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Mobile Accessories",
        cate: "mobile-accessories",
    },
    {
        img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
        name: "Motorcycle",
        cate: "motorcycle",
    },
    {
        img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Skin Care",
        cate: "skin-care",
    },
    {
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        name: "Mobiles",
        cate: "smartphones",
    },
    {
        img: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
        name: "Sports Accessories",
        cate: "sports-accessories",
    },
    {
        img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        name: "Sunglasses",
        cate: "sunglasses",
    },
    {
        img: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Tablets",
        cate: "tablets",
    },
    {
        img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
        name: "Tops",
        cate: "tops",
    },
    {
        img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
        name: "Vehicle",
        cate: "vehicle",
    },
    {
        img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
        name: "Womens Bags",
        cate: "womens-bags",
    },
    {
        img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
        name: "Womens Dresses",
        cate: "womens-dresses",
    },
    {
        img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
        name: "Womens Jewellery",
        cate: "womens-jewellery",
    },
    {
        img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
        name: "Womens Shoes",
        cate: "womens-shoes",
    },
    {
        img: "https://images.unsplash.com/photo-1451290337906-ac938fc89bce?q=80&w=1318&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                        <div
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
