import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCar } from '../../context/CarContext';
import { useOrder } from '../../context/OrderContext';
import CarCard from '../../components/CarCard';

export default function HomePage({ onNavigate }) {
  const { role, userEmail } = useAuth();
  const { cars } = useCar();
  const { addOrder } = useOrder();
  const [selectedCar, setSelectedCar] = useState(null);

  const handleConfirmBuy = () => {
    if (selectedCar) {
      addOrder({
        carName: selectedCar.name,
        customer: userEmail || 'Khách Hàng',
        amount: selectedCar.price
      });
      alert('Đặt mua xe thành công! Bạn có thể kiểm tra lại trong Dashboard.');
      setSelectedCar(null);
      onNavigate('customer_dashboard');
    }
  };

  return (
    <div>
      {/* Hero Banner tràn lề */}
      <div style={{ position: 'relative', width: '100%', height: '480px', overflow: 'hidden', borderRadius: '12px', marginBottom: '40px' }}>
        <img 
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80" 
          alt="BMH Hero Banner" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.6), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 50px', color: '#fff' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', margin: '0 0 15px 0' }}>BỨC PHÁ MỌI GIỚI HẠN</h1>
          <p style={{ fontSize: '18px', maxWidth: '500px', margin: '0 0 25px 0', opacity: 0.9 }}>Khám phá các dòng xe thể thao cao cấp và dịch vụ ký gửi mua bán ô tô uy tín hàng đầu tại BMH.</p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button 
              onClick={() => onNavigate('test_drive')}
              style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '6px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}
            >
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>

      {/* Danh sách các Mẫu Xe */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', color: '#1e293b', marginBottom: '20px' }}>🚘 Mẫu Xe Nổi Bật ({cars.length})</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
          {cars.map(car => (
            <CarCard 
              key={car.id} 
              car={car} 
              onSelect={(selected) => {
                if (!role) {
                  alert('Vui lòng đăng nhập để đặt mua!');
                  onNavigate('login');
                } else if (role === 'admin') {
                  alert('Tài khoản Admin không thể đặt mua xe!');
                } else {
                  setSelectedCar(selected);
                }
              }} 
            />
          ))}
        </div>
      </div>

      {/* Modal xác nhận đặt mua */}
      {selectedCar && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#fff', padding: '25px', borderRadius: '8px', width: '400px' }}>
            <h3>Xác Nhận Đặt Mua Xe</h3>
            <p>Tên xe: <b>{selectedCar.name}</b></p>
            <p>Giá niêm yết: <b style={{ color: '#dc2626' }}>{selectedCar.price}</b></p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button onClick={handleConfirmBuy} style={{ flex: 1, padding: '10px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Xác Nhận Đặt Mua</button>
              <button onClick={() => setSelectedCar(null)} style={{ padding: '10px 15px', backgroundColor: '#94a3b8', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Hủy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}