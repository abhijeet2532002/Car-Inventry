// App.js
import React, { useState } from 'react';
import AddCar from './AddCar';
import CarList from './CarList';

const App = () => {
  const [cars, setCars] = useState([]);

  const handleAddCar = (newCar) => {
    const existingCarIndex = cars.findIndex(
      (car) => car.name === newCar.name && car.model === newCar.model
    );

    if (existingCarIndex !== -1) {
      // Car exists, update quantity
      const updatedCars = [...cars];
      updatedCars[existingCarIndex].quantity = Number(updatedCars[existingCarIndex].quantity) + Number(newCar.quantity);
      setCars(updatedCars);
    } else {
      // Car doesn't exist, add to the list
      setCars([...cars, newCar]);
    }
  };

  return (
    <div>
      <h1>Car Inventory App</h1>
      <AddCar onAddCar={handleAddCar} />
      <CarList cars={cars} />
    </div>
  );
};

export default App;
