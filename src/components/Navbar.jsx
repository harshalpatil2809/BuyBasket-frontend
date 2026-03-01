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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { search, setSearch } = useContext(Context);
  const navigate = useNavigate();

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-black underline font-bold block py-2 flex items-center gap-3"
      : "text-gray-600 block py-2 flex items-center gap-3 font-semibold";

  let productList = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];

  function handleSearch(e) {
    e.preventDefault();

    const trimmedInput = search.trim();
    const normalizedInput = trimmedInput.toLowerCase();

    if (!search) {
      toast.warning("Search Something");
      return;
    }

    if (productList.includes(normalizedInput)) {
      navigate(`/categoriesdetail/${normalizedInput}`);
      setSearch("");
    } else {
      toast.error("The item you search is not available yet.");
      setSearch("");
    }
  }
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="fixed w-full py-3 flex lg:justify-around md:justify-around justify-between lg:px-0 md:px-0 px-5 items-center bg-white/40 z-50">
        <div className="text-xl font-bold flex gap-2 items-center text-black/80">
          <FaBasketShopping /> BuyBasket
        </div>
        <form
          onSubmit={handleSearch}
          className="hidden lg:flex md:flex items-center justify-end lg:w-2/5 md:gap-5"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="border bg-white/40 rounded-full px-5 py-2 w-full"
            placeholder="Search"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        <div className="hidden lg:flex md:flex items-center justify-center gap-8">
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
        </div>

        {/* Mobile Navbar Toggle */}
        <div className="lg:hidden md:hidden flex items-center gap-8">
          <FaSearch size={20} />
          <button onClick={toggleMobile} aria-label="Open menu">
            {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Side drawer for mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-40">
          <aside className="fixed top-0 bg-green-300 right-0 h-full w-1/2  p-6 flex flex-col justify-start gap-6 pt-15">
            <nav className="space-y-4">
              <NavLink to="/" className={linkClass} onClick={toggleMobile}>
                <FaHome />
                Home
              </NavLink>
              <NavLink to="about" className={linkClass} onClick={toggleMobile}>
                <FaCircleInfo />
                About
              </NavLink>
              <NavLink
                to="categories"
                className={linkClass}
                onClick={toggleMobile}
              >
                <FaAddressCard />
                Category
              </NavLink>
              <NavLink to="cart" className={linkClass} onClick={toggleMobile}>
                <FaCartShopping />
                Cart
              </NavLink>
              <NavLink to="user" className={linkClass} onClick={toggleMobile}>
                <FaUser />
                User
              </NavLink>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

export default Navbar;
