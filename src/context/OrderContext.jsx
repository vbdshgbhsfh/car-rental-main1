import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  // Danh sách đơn hàng toàn cục
  const [orders, setOrders] = useState([
    { id: 'DH001', name: 'Nguyễn Hải Nam', phone: '0987654321', car: 'BMW M5 Competition', price: '2.450.000.000 VNĐ', date: '21/10/2026', status: 'Chờ xử lý' }
  ]);

  const addOrder = (newOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  const updateOrderStatus = (id, newStatus) => {
    setOrders((prev) => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);