import React from 'react';

export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
      <p style={{ fontSize: '16px', color: '#0284c7', fontWeight: 'bold' }}>⏳ Đang tải dữ liệu...</p>
    </div>
  );
}