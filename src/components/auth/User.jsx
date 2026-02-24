import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState([]);
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("No token found");
        navigate("/login", { replace: true });
        return;
      }
      const authHeader = `Bearer ${token}`;
      const response = await axios.get("http://127.0.0.1:8000/api/user/", {
        headers: { Authorization: authHeader },
      });
      setResponse(response.data);
    } catch (error) {
      console.error(
        "Failed to fetch user:",
        error.response?.status,
        error.response?.data || error.message,
      );
    }
  };
  const Logout = async () => {
    const token = localStorage.getItem("token");
    const authHeader = `Bearer ${token}`;
    const response = await axios.post("http://127.0.0.1:8000/api/logout/", {
      headers: { Authorization: authHeader },
    });
    console.log(response.data);
    if (response.data.message === "success") {
      localStorage.clear();
      navigate("/login");
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const BtnStyle = "font-bold px-8 py-3 rounded-full hover:scale-105 cursor-pointer "

  return (
    <div className="text-black min-h-screen flex flex-col gap-10 items-center justify-center bg-green-200">
      {/* Profile Detaiis */}
      <div className="flex items-center flex-col gap-2">
        <div>
          <img
            src="./profile-pic.png"
            alt="Profile-pic"
            className="w-50 h-auto bg-transparent rounded-full mb-6 object-cover"
          />
        </div>
        <div className="">{response.name}</div>
        <div>
          <h3>{response.email}</h3>
        </div>
      </div>

      {/* Butttons */}
      <div className="flex lg:w-2/5 md:w-2/5 w-full gap-3 items-center justify-between px-10">
        <div className="flex flex-col gap-5 ">
          <Link to="/order" replace className={`${BtnStyle} bg-white/40`}>
            Order
          </Link>
          <Link to="/cart" replace className={`${BtnStyle} bg-white/40`}>
            Cart
          </Link>
        </div>
        <div className="flex flex-col gap-5 ">
          <Link to="/about" replace className={`${BtnStyle} bg-white/40`}>
            About us
          </Link>
          <button
            onClick={() => {
              Logout();
            }}
            className={`${BtnStyle} bg-red-600 text-white`}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
