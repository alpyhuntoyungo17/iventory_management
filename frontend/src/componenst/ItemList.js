import React, { useState, useEffect } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from API
    fetch('/api/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

