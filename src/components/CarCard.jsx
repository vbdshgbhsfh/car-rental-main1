import React from 'react';

export default function CarCard({ car, onSelect }) {
  return (
    <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <img src={car.image} alt={car.name} style={{ width: '100%', height: '170px', objectFit: 'cover' }} />
      <div style={{ padding: '15px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#1e293b' }}>{car.name}</h3>
          <p style={{ color: '#dc2626', fontWeight: 'bold', fontSize: '16px', margin: '0 0 8px 0' }}>{car.price}</p>
          <p style={{ color: '#64748b', fontSize: '13px', margin: '0 0 15px 0' }}>{car.desc}</p>
        </div>
        <button 
          onClick={() => onSelect(car)}
          style={{ width: '100%', padding: '10px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Đặt Mua Ngay
        </button>
      </div>
    </div>
  );
}