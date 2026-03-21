import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartLoader from "../../UI/CartLoader";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");

        const { data } = await axios.get(
          "http://127.0.0.1:8000/cart/viewcart/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setCartItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const removeItem = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const API = import.meta.env.VITE_API_URL;
      await axios.delete(`${API}/cart/remove/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.total, 0);

  if (loading) {
    return (
      <CartLoader items={2}/>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-200 text-3xl font-bold text-black/50">
        Your Cart is Empty
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-200 py-30 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-semibold mb-6">🛒 Shopping Cart</h1>

          <div className="grid grid-cols-5 text-sm font-semibold text-gray-500 border-b pb-3">
            <div className="col-span-2">Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 items-center py-5 border-b"
            >
              <div className="col-span-2 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.product_name}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                <div>
                  <p className="font-medium">{item.product_name}</p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-gray-600">${item.price * 81}</div>

              <div className="text-gray-600">{item.quantity}</div>

              <div className="font-semibold text-gray-800">${item.total * 81}</div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-3 text-gray-600">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between mb-3 text-gray-600">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-3 text-gray-600">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t pt-3 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </div>

          <button
            onClick={() => navigate("/delivery", { state: { cartItems } })}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
