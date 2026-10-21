import React, { useState } from 'react';

export default function ServicePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', background: '#fff', padding: '35px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
      <h2 style={{ textAlign: 'center', marginTop: 0, color: '#1e293b' }}> Đặt Hẹn Dịch Vụ Bảo Dưỡng BMH</h2>
      <p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginBottom: '25px' }}>Dịch vụ bảo dưỡng chính hãng tiêu chuẩn toàn cầu.</p>

      {submitted ? (
        <div style={{ padding: '20px', backgroundColor: '#dcfce7', color: '#15803d', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
           Đặt hẹn dịch vụ bảo dưỡng thành công!
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Biển số xe / Dòng xe *</label>
            <input type="text" required style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Dịch vụ cần thực hiện *</label>
            <select style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
              <option>Bảo dưỡng định kỳ</option>
              <option>Thay dầu & Lọc gió</option>
              <option>Kiểm tra hệ thống phanh / lốp</option>
              <option>Sửa chữa & Kiểm tra tổng thể</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Số điện thoại liên hệ *</label>
            <input type="tel" required style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" style={{ padding: '12px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
            Đặt Hẹn Ngay
          </button>
        </form>
      )}
    </div>
  );
}