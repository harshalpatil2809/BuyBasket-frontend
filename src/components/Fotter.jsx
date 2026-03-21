import { motion } from "motion/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Fotter = () => {
  return (
    <footer className="text-black  flex flex-col items-center justify-center bg-[#D5FBE2]">
      <div className="w-full mx-auto px-6 py-12 flex items-center justify-around gap-20 ">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-black">BuyBasket</h2>
          <p className=" text-sm">
            Your one-stop shop for <br />
            quality products at the best prices.
          </p>
          <div className="flex gap-8 mt-6">
            <motion.a
              href="https://www.linkedin.com/in/harshal-patil-56a0b2293/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 600 }}
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              href="https://github.com/harshalpatil2809"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 600 }}
            >
              <FaGithub size={28} />
            </motion.a>

            <motion.a
              href="https://x.com/Patil_Harshal_5"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 600 }}
            >
              <FaXTwitter size={28} />
            </motion.a>
          </div>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-black font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={'/'}>
                Home
              </Link>
            </li>
            <li>
              <Link to={'about'}>
                About
              </Link>
            </li>
            <li>
              <Link to={'categories'}>
                Catergries
              </Link>

            </li>
            <li>
              <Link to={'cart'}>
                Cart
              </Link>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 w-2/3 text-center text-sm text-gray-800">
        <p>© {new Date().getFullYear()} BuyBasket. All rights reserved.</p>
        <p>Made With ❤️ By Harshal</p>
      </div>
    </footer>
  );
};

export default Fotter;
