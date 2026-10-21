import React, { useState } from 'react';
import { useCar } from '../../context/CarContext';

export default function VehicleManagePage() {
  const { cars, addCar, deleteCar } = useCar();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if(name && price) {
      addCar({ name, price: price + ' VNĐ', desc: desc || 'Xe mới thêm vào hệ thống.', image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=500&q=80' });
      setName(''); setPrice(''); setDesc('');
      alert('Thêm xe thành công!');
    }
  };

  return (
    <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <h2>🚗 Quản Lý Danh Sách Xe Ô Tô</h2>
      <form onSubmit={handleAdd} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '25px', marginTop: '15px' }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Tên xe (VD: Honda CR-V)..." required style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }} />
        <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Giá bán (VD: 900.000.000)..." required style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }} />
        <input value={desc} onChange={e => setDesc(e.target.value)} placeholder="Mô tả xe..." style={{ padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', gridColumn: 'span 2' }} />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', gridColumn: 'span 2' }}>Thêm Xe Vừa Điền</button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {cars.map(c => (
          <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', border: '1px solid #f1f5f9', borderRadius: '6px' }}>
            <span><b>{c.name}</b> - <span style={{ color: '#dc2626', fontWeight: 'bold' }}>{c.price}</span></span>
            <button onClick={() => { deleteCar(c.id); alert('Đã xóa xe!'); }} style={{ padding: '6px 12px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Xóa Xe</button>
          </div>
        ))}
      </div>
    </div>
  );
}