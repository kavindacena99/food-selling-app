import { useEffect, useState } from "react";
import API from "../services/api";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await API.get("/orders");
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders", error);
      }
    };

    fetchOrders();
  }, []);

  const updateOrderStatus = async (id, status) => {
    try {
      await API.put(`/orders/${id}`, { status });
      setOrders((prev) =>
        prev.map((order) => (order._id === id ? { ...order, status } : order))
      );
    } catch (error) {
      console.error("Error updating order", error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <h3>Order #{order._id}</h3>
            <p>Status: {order.status}</p>
            <button onClick={() => updateOrderStatus(order._id, "Processing")}>Mark as Processing</button>
            <button onClick={() => updateOrderStatus(order._id, "Completed")}>Mark as Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
