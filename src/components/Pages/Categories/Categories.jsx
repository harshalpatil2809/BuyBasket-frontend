import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = () => {
    const [allCategory, setAllCategory] = useState([]);

    const Category_Fetch = async () => {
        const reponse = await axios.get(
            "https://dummyjson.com/products/categories",
        );

        setAllCategory(reponse.data);
    };
    useEffect(() => {
        Category_Fetch();
    }, []);

    return (
        <div className="text-black min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-auto bg-green-200">
            {/* {allCategory.map((cate, index) => {
                console.log(cate);
                
                return (
                    <>

                        
                    </>
                );
            })} */}
        </div>
    );
};

export default Categories;
