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
        // no token: send user to login page
        console.warn("No token found");
        // ensure leading slash so route is absolute
        navigate("/login", { replace: true });
        return;
      }

      // SimpleJWT expects a Bearer authorization header: "Authorization: Bearer <access>"
      const authHeader = `Bearer ${token}`;
      // set for this request
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
    const response = await axios.get("http://127.0.0.1:8000/api/logout/", {
      headers: { Authorization: authHeader },
    });
    console.log(response.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
      <div className="flex flex-col w-2/5 gap-3">
        <Link to="/order" replace>
          Order
        </Link>
        <Link to="/cart" replace>
          Cart
        </Link>
        <button
          onClick={() => {
            Logout()
          }}
          className="cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
