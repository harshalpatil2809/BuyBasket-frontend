import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link,useNavigate} from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const Response = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/register/",
                {
                    name: name,
                    email: email,
                    password: password,
                }
            );
            console.log(response.data);
            localStorage.setItem("token", response.data.jwt);
            toast.success("Registration successful! Redirecting...");
            navigate('/login')
        } catch (error) {
            const errMsg = error.response?.data?.detail || error.response?.data || error.message;
            console.error(errMsg);
            toast.error(typeof errMsg === 'string' ? errMsg : JSON.stringify(errMsg));
        } finally {
            setLoading(false);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        Response();
        setName('');
        setEmail('');
        setPassword('');
    };


    return <>
    
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-green-200 via-white to-green-200">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl relative">
        
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          🛒 Create Account
        </h2>
        <p className="text-sm text-gray-500 text-center mt-2 mb-6">
          Join us and start shopping with BuyBasket!
        </p>


        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300 flex justify-center items-center"
          >
            {loading ? <svg className="w-5 h-5 animate-spin mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg> : null}
            Register
          </button>

        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account? <br />
          <span className="text-green-600 font-medium cursor-pointer hover:underline">
            <Link to={'/login'}>Login</Link>
          </span>
        </p>

        

      </div>
    </div>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    
    </>
    
};

export default Register;
