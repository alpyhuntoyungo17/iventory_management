import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams(); // Get the item ID from the URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch item details from the API
    fetch(`/api/items/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Item not found');
        }
        return response.json();
      })
      .then(data => {
        setItem(data);
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
      <h1>{item.name}</h1>
      <p>Price: ${item.price}</p>
      <p>Description: {item.description}</p>
      {/* Add more item details or actions here */}
    </div>
  );
};

export default ItemDetail;

