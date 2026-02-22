import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaHome,
  FaAddressCard,
} from "react-icons/fa";
import { FaBasketShopping, FaCartShopping, FaCircleInfo } from "react-icons/fa6";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-black underline font-bold block py-2 flex items-center gap-3"
      : "text-gray-600 block py-2 flex items-center gap-3 font-semibold";

  return (
    <>
      <div className="fixed w-full py-3 flex lg:justify-around md:justify-around justify-between lg:px-0 md:px-0 px-5 items-center bg-white/40 z-50">
        <div className="text-xl font-bold flex gap-2 items-center text-black/80"><FaBasketShopping /> BuyBasket</div>
        <div className="hidden lg:flex md:flex items-center justify-between lg:w-1/5 md:gap-10">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
        <div className="hidden lg:flex md:flex items-center justify-center gap-8">
          <FaSearch />
          <NavLink to="cart">
            <FaCartShopping />
          </NavLink>
          <NavLink to="user">
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
                to="contact"
                className={linkClass}
                onClick={toggleMobile}
              >
                <FaAddressCard />
                Contact
              </NavLink>
              <NavLink
                to="cart"
                className={linkClass}
                onClick={toggleMobile}
              >
                <FaCartShopping />
                Cart
              </NavLink>
              <NavLink
                to="user"
                className={linkClass}
                onClick={toggleMobile}
              >
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
