import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaHome,
  FaAddressCard,
  FaTh,
  FaInfoCircle,
} from "react-icons/fa";
import {
  FaBasketShopping,
  FaCartShopping,
  FaCircleInfo,

} from "react-icons/fa6";
import Context from "../context/Context";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { LogOut } from "lucide-react";



const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { search, setSearch } = useContext(Context);
  const token = localStorage.getItem('token')
  const navigate = useNavigate();
  const toggleMobile = () => setMobileOpen((prev) => !prev);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-black underline font-bold block py-2 flex items-center gap-3"
      : "text-gray-600 block py-2 flex items-center gap-3 font-semibold";

  const Logout = async () => {
    try {
      const token = localStorage.getItem("token");
      const API = import.meta.env.VITE_API_URL;
      const { data } = await axios.post(
        `${API}/api/logout/`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.message === "success") {
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      console.error(
        "Logout error:",
        error.response?.data || error.message
      );
    }
  };

  let productList = [
    "beauty","fragrances","furniture","groceries","home-decoration",
    "kitchen-accessories","laptops","mens-shirts","mens-shoes",
    "mens-watches","mobile-accessories","motorcycle","skin-care",
    "smartphones","sports-accessories","sunglasses","tablets",
    "tops","vehicle","womens-bags","womens-dresses",
    "womens-jewellery","womens-shoes","womens-watches",
  ];

  
  function handleSearch(e) {
    e.preventDefault();

    const trimmedInput = search.trim().toLowerCase();

    if (!search) {
      toast.warning("Search Something");
      return;
    }

    if (productList.includes(trimmedInput)) {
      navigate(`/categoriesdetail/${trimmedInput}`);
      setSearch("");
    } else {
      toast.error("The item you search is not available yet.");
      setSearch("");
    }
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Navbar */}
      <div className="fixed w-full py-3 flex justify-between items-center bg-white/40 z-50 lg:px-20 md:px-20 px-4">

        {/* Logo */}
        <div className="lg:text-xl text-md font-bold flex gap-2 items-center text-black/80">
          <FaBasketShopping /> BuyBasket
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="flex items-center lg:w-2/5  gap-2"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border bg-white/40 rounded-full px-5 py-2 lg:w-full md:w-full w-4/5 "
            placeholder="Search"
          />
          <button type="submit">
            <FaSearch size={20} />
          </button>
        </form>

        {/* Desktop Menu */}
        <div className="hidden lg:flex md:flex items-center gap-6">

          <NavLink to="/" className={linkClass}>
            <FaHome />
          </NavLink>

          <NavLink to="about" className={linkClass}>
            <FaInfoCircle />
          </NavLink>

          <NavLink to="categories" className={linkClass}>
            <FaTh />
          </NavLink>

          <NavLink to="cart" className={linkClass}>
            <FaCartShopping />
          </NavLink>

          <NavLink to="user" className={linkClass}>
            <FaUser />
          </NavLink>

          {/* Logout */}
          
            <button
              hidden={!token}
              onClick={Logout}
              className="flex items-center gap-2 text-red-600 font-semibold cursor-pointer"
            >
              <LogOut strokeWidth={3} />
            </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden md:hidden flex items-center">
          <button onClick={toggleMobile}>
            {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={toggleMobile}
          ></div>

          {/* Drawer */}
          <aside className="fixed top-0 right-0 h-full w-1/2 bg-green-300 z-50 p-6 shadow-lg">

            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button onClick={toggleMobile}>
                <FaTimes size={24} />
              </button>
            </div>

            <nav className="space-y-5">

              <NavLink to="/" className={linkClass} onClick={toggleMobile}>
                <FaHome /> Home
              </NavLink>

              <NavLink to="about" className={linkClass} onClick={toggleMobile}>
                <FaCircleInfo /> About
              </NavLink>

              <NavLink to="categories" className={linkClass} onClick={toggleMobile}>
                <FaAddressCard /> Category
              </NavLink>

              <NavLink to="cart" className={linkClass} onClick={toggleMobile}>
                <FaCartShopping /> Cart
              </NavLink>

              <NavLink to="user" className={linkClass} onClick={toggleMobile}>
                <FaUser /> User
              </NavLink>

              {/* Logout Mobile */}
              
                <button
                  hidden={!token}
                  onClick={() => {
                    Logout();
                    toggleMobile();
                  }}
                  className="flex items-center gap-3 text-red-600 font-semibold"
                >
                  <LogOut strokeWidth={3} />

                </button>
            </nav>
          </aside>
        </>
      )}
    </>
  );
};

export default Navbar;