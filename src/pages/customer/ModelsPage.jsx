import React from 'react';
import { useCar } from '../../context/CarContext';
import { useAuth } from '../../context/AuthContext';
import CarCard from '../../components/CarCard';

export default function ModelsPage({ onNavigate }) {
  const { cars } = useCar();
  const { role } = useAuth();

  return (
    <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '28px', color: '#1e293b', marginBottom: '10px' }}>🏎️ Tất Cả Mẫu Xe BMH</h1>
      <p style={{ color: '#64748b', marginBottom: '30px' }}>Khám phá bộ sưu tập xe sang hiện đại và thể thao đỉnh cao.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
        {cars.map(car => (
          <CarCard 
            key={car.id} 
            car={car} 
            onSelect={() => {
              if (!role) {
                alert('Vui lòng đăng nhập để đặt mua xe!');
                onNavigate('login');
              } else {
                onNavigate('home');
              }
            }} 
          />
        ))}
      </div>
    </div>
  );
}