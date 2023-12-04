// AddCar.js
import React, { useState } from 'react';

const AddCar = ({ onAddCar }) => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !model || !quantity) {
      alert('Please fill in all fields');
      return;
    }

    onAddCar({ name, model, quantity });
    setName('');
    setModel('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Model:</label>
      <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />

      <label>Quantity:</label>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />

      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCar;