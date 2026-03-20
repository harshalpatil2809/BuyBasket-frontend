import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderLoader from "../../UI/OrderLoader";

const Order = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const token = localStorage.getItem("token");
        const API = import.meta.env.VITE_API_URL;
        const { data } = await axios.get(
          `${API}/orders/vieworders/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrders(data);

      } catch (error) {

        console.log(error);

      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);

      }

    };

    fetchOrders();

  }, []);

  if (loading) {
    return (
      <div className="text-black/50 min-h-screen flex items-center justify-center bg-green-200 text-3xl md:text-4xl font-bold text-center px-4">
      <OrderLoader />
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-black/50 min-h-screen flex items-center justify-center bg-green-200 text-3xl md:text-4xl font-bold text-center px-4">
        You haven't ordered anything..
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-200 py-10 md:py-20 px-4">

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-4 md:p-8">

        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          📦 My Orders
        </h1>

        {/* Desktop Header */}
        <div className="hidden md:grid grid-cols-6 text-sm font-semibold text-gray-500 border-b pb-3">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
          <div>City</div>
          <div>Status</div>
        </div>

        {orders.map((order) => (

          <div key={order.id}>

            {/* Desktop Row */}
            <div className="hidden md:grid grid-cols-6 items-center py-5 border-b">

              <div className="font-medium">{order.product_name}</div>

              <div className="text-gray-600">${(order.price * 81).toFixed(2)}</div>

              <div className="text-gray-600">{order.quantity}</div>

              <div className="font-semibold">
                ${order.price * order.quantity}
              </div>

              <div className="text-gray-600">{order.city}</div>

              <div className="text-green-600 font-semibold">
                Order Placed
              </div>

            </div>

            {/* Mobile Card */}
            <div className="md:hidden bg-gray-50 p-4 rounded-xl mb-4 shadow-sm">

              <h2 className="font-semibold text-lg mb-2">
                {order.product_name}
              </h2>

              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Price:</strong> ${order.price}</p>
                <p><strong>Quantity:</strong> {order.quantity}</p>
                <p><strong>Total:</strong> ${order.price * order.quantity}</p>
                <p><strong>City:</strong> {order.city}</p>
              </div>

              <div className="mt-2 text-green-600 font-semibold">
                Order Placed
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Order;