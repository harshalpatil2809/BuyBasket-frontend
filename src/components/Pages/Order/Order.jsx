import axios from "axios";
import React, { useEffect, useState } from "react";

const Order = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const token = localStorage.getItem("token");

        const { data } = await axios.get(
          "http://127.0.0.1:8000/orders/vieworders/",
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

        setLoading(false);

      }

    };

    fetchOrders();

  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-200 text-2xl font-semibold">
        Loading orders...
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-black/50 min-h-screen flex items-center justify-center bg-green-200 text-4xl font-bold">
        You haven't ordered anything..
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-200 py-20 px-6">

      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">

        <h1 className="text-3xl font-bold mb-8">📦 My Orders</h1>

        <div className="grid grid-cols-6 text-sm font-semibold text-gray-500 border-b pb-3">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
          <div>City</div>
          <div>Status</div>
        </div>

        {orders.map((order) => (

          <div
            key={order.id}
            className="grid grid-cols-6 items-center py-5 border-b"
          >

            <div className="font-medium">{order.product_name}</div>

            <div className="text-gray-600">${order.price}</div>

            <div className="text-gray-600">{order.quantity}</div>

            <div className="font-semibold">
              ${order.price * order.quantity}
            </div>

            <div className="text-gray-600">{order.city}</div>

            <div className="text-green-600 font-semibold">
              Order Placed
            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Order;