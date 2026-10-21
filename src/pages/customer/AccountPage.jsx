import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useOrder } from '../../context/OrderContext';

export default function AccountPage() {
  const { userEmail } = useAuth();
  const { orders } = useOrder();

  return (
    <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <h2> Khách Hàng</h2>
      <p>Email tài khoản: <b>{userEmail || 'nam@gmail.com'}</b></p>
      <hr style={{ margin: '20px 0', borderColor: '#e2e8f0' }} />
      <h3>🛒 Đơn Hàng Mua Xe Của Bạn</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '10px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b' }}>
            <th style={{ padding: '10px' }}>Mã đơn</th>
            <th style={{ padding: '10px' }}>Tên xe</th>
            <th style={{ padding: '10px' }}>Số tiền</th>
            <th style={{ padding: '10px' }}>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '10px', fontWeight: 'bold' }}>{o.id}</td>
              <td style={{ padding: '10px' }}>{o.carName}</td>
              <td style={{ padding: '10px', color: '#dc2626', fontWeight: 'bold' }}>{o.amount}</td>
              <td style={{ padding: '10px' }}>
                <span style={{ backgroundColor: o.status === 'Đã hoàn tất' ? '#bbf7d0' : '#fef08a', color: o.status === 'Đã hoàn tất' ? '#166534' : '#854d0e', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                  {o.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}