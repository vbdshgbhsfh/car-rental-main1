import React, { useState } from 'react';

export default function SellCarRequestPage() {
  const [carName, setCarName] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gửi yêu cầu ký gửi thành công! Admin sẽ thẩm định và duyệt xe của bạn.');
    setCarName(''); setPrice(''); setPhone('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto', background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <h2 style={{ marginTop: 0 }}> Gửi Yêu Cầu Ký Gửi Bán Xe</h2>
      <p style={{ color: '#64748b', fontSize: '14px' }}>Điền thông tin xe của bạn để đưa lên sàn Autohunt sau khi thẩm định.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ fontSize: '13px', display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Tên xe / Đời xe:</label>
          <input value={carName} onChange={e => setCarName(e.target.value)} placeholder="Ví dụ: Mazda 3 2021" required style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ fontSize: '13px', display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Giá mong muốn (VNĐ):</label>
          <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Ví dụ: 600.000.000" required style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ fontSize: '13px', display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Số điện thoại liên hệ:</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="0987654321" required style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
        </div>
        <button type="submit" style={{ padding: '12px', backgroundColor: '#f59e0b', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Gửi Yêu Cầu Ký Gửi</button>
      </form>
    </div>
  );
}