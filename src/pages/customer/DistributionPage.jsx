import React from 'react';

export default function DistributionPage() {
  const showrooms = [
    { city: 'Hà Nội', name: 'Showroom BMH Tây Mỗ', address: 'Vinhomes Smart City, Nam Từ Liêm, Hà Nội', phone: '0988 123 456' },
    { city: 'Hà Nội', name: 'Showroom BMH Mỹ Đình', address: 'Số 18 Phạm Hùng, Cầu Giấy, Hà Nội', phone: '0977 654 321' },
    { city: 'TP. Hồ Chí Minh', name: 'Showroom BMH Quận 7', address: 'Số 101 Nguyễn Văn Linh, Quận 7, TP.HCM', phone: '0909 888 999' },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '28px', color: '#1e293b', marginBottom: '10px' }}>🏢 Hệ Thống Phân Phối BMH</h1>
      <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '35px' }}>Danh sách đại lý và trung tâm dịch vụ chính hãng trên toàn quốc.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {showrooms.map((s, idx) => (
          <div key={idx} style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#0284c7', textTransform: 'uppercase' }}>{s.city}</span>
            <h3 style={{ margin: '8px 0', fontSize: '18px', color: '#1e293b' }}>{s.name}</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: '5px 0' }}>📍 {s.address}</p>
            <p style={{ fontSize: '14px', color: '#475569', margin: '5px 0' }}>📞 {s.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}