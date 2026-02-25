import React from "react";

const Fotter = () => {
  return (
    <footer className="text-black  flex flex-col items-center justify-center bg-[#D5FBE2]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-20 ">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-black">BuyBasket</h2>
          <p className="mt-3 text-sm">
            Your one-stop shop for <br />quality products at the best prices.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-black font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Orders
              </a>
            </li>
          </ul>
        </div>

        
        {/* Company */}
        <div>
          <h3 className="text-black font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 w-2/3 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BuyBasket. All rights reserved.
      </div>
    </footer>
  );
};

export default Fotter;
