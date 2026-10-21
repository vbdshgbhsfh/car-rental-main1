import React from 'react';
import { useOrder } from '../../context/OrderContext';

export default function OrderManagePage() {
  const { orders, approveOrder } = useOrder();

  return (
    <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <h2> Quản Lý Đơn Hàng Mua Xe</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '15px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b' }}>
            <th style={{ padding: '10px' }}>Mã đơn</th>
            <th style={{ padding: '10px' }}>Khách mua</th>
            <th style={{ padding: '10px' }}>Tên xe</th>
            <th style={{ padding: '10px' }}>Giá trị</th>
            <th style={{ padding: '10px' }}>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '10px', fontWeight: 'bold' }}>{o.id}</td>
              <td style={{ padding: '10px' }}>{o.customer}</td>
              <td style={{ padding: '10px' }}>{o.carName}</td>
              <td style={{ padding: '10px', color: '#dc2626', fontWeight: 'bold' }}>{o.amount}</td>
              <td style={{ padding: '10px' }}>
                {o.status === 'Chờ giao xe' ? (
                  <button onClick={() => { approveOrder(o.id); alert('Đã duyệt đơn hàng!'); }} style={{ padding: '6px 12px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Duyệt đơn</button>
                ) : <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Đã hoàn tất</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}