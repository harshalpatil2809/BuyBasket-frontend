import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Package, Info, LogOut } from "lucide-react";

const User = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login", { replace: true });
        return;
      }
      const API = import.meta.env.VITE_API_URL;
      const { data } = await axios.get(
        `${API}/api/user/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setResponse(data);
    } catch (error) {
      console.error(
        "User fetch error:",
        error.response?.data || error.message
      );

      if (error.response?.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

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
            'Content-Type': 'application/json',
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

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-green-200 flex items-center justify-center px-6 lg:py-0 md:py-0 py-30">

      <div className="w-full max-w-4xl">

        {/* Profile Card */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-10 text-center mb-10">

          <img
            src="./profile-pic.png"
            alt="profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"
          />

          <h2 className="text-2xl font-bold text-gray-800">
            {response?.name}
          </h2>

          <p className="text-gray-600">
            {response?.email}
          </p>

        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-6">

          <Link
            to="/order"
            className="flex items-center justify-between bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition"
          >
            <div>
              <h3 className="text-lg font-semibold">Your Orders</h3>
              <p className="text-gray-500 text-sm">
                Track your previous purchases
              </p>
            </div>

            <Package size={28} />
          </Link>

          <Link
            to="/cart"
            className="flex items-center justify-between bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition"
          >
            <div>
              <h3 className="text-lg font-semibold">Your Cart</h3>
              <p className="text-gray-500 text-sm">
                View products in cart
              </p>
            </div>

            <ShoppingCart size={28} />
          </Link>

          <Link
            to="/about"
            className="flex items-center justify-between bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition"
          >
            <div>
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="text-gray-500 text-sm">
                Learn more about our company
              </p>
            </div>

            <Info size={28} />
          </Link>

          <button
            onClick={Logout}
            className="flex items-center justify-between bg-red-600 text-white p-6 rounded-2xl shadow-md hover:scale-[1.02] transition"
          >
            <div>
              <h3 className="text-lg font-semibold text-start">Logout</h3>
              <p className="text-red-100 text-sm">
                Securely sign out
              </p>
            </div>

            <LogOut size={28} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default User;
