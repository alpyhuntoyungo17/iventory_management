
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OrderPage = () => {
  const { id } = useParams(); // Get the order ID from the URL
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch order details from the API
    fetch(`/api/orders/${id}`)
      .then(response => response.json())
      .then(data => {
        setOrder(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Order #{order.id}</h1>
      <p>Status: {order.status}</p>
      <p>Total: ${order.total}</p>
      <p>Items:</p>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderPage;
