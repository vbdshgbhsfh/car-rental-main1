import React, { createContext, useState, useContext } from 'react';

const CarContext = createContext();

const initialCars = [
  { id: 1, name: "Toyota Camry 2.5Q", price: "1.050.000.000 VNĐ", desc: "Sedan sang trọng hạng D, động cơ 2.5L bền bỉ.", image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "Mercedes-Benz C300 AMG", price: "1.890.000.000 VNĐ", desc: "Xe sang thể thao phong cách AMG mạnh mẽ.", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "Ford Ranger Wildtrak", price: "850.000.000 VNĐ", desc: "Vua bán tải đa năng, dẫn động 4x4.", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=500&q=80" },
];

export function CarProvider({ children }) {
  const [cars, setCars] = useState(initialCars);

  const addCar = (newCar) => {
    setCars(prev => [...prev, { ...newCar, id: Date.now() }]);
  };

  const deleteCar = (id) => {
    setCars(prev => prev.filter(c => c.id !== id));
  };

  return (
    <CarContext.Provider value={{ cars, addCar, deleteCar }}>
      {children}
    </CarContext.Provider>
  );
}

export const useCar = () => useContext(CarContext);