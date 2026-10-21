import React, { useState } from 'react';

export default function TestDrivePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', background: '#fff', padding: '35px', borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <h2 style={{ textAlign: 'center', marginTop: 0, color: '#1e293b' }}> Đặt Lịch Lái Thử Trải Nghiệm BMH</h2>
      <p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginBottom: '25px' }}>Điền thông tin bên dưới để trải nghiệm cảm giác lái các dòng xe BMH mới nhất.</p>

      {submitted ? (
        <div style={{ padding: '20px', backgroundColor: '#dcfce7', color: '#15803d', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
           Đăng ký thành công! Tư vấn viên của BMH sẽ liên hệ xác nhận lịch lái thử với bạn trong thời gian sớm nhất.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Họ và tên *</label>
            <input type="text" required style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Số điện thoại *</label>
            <input type="tel" required style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Chọn dòng xe muốn lái thử *</label>
            <select style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
              <option>BMH M3 Sedan</option>
              <option>BMH X5 SUV</option>
              <option>BMH i4 Electric</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Ngày dự kiến</label>
            <input type="date" required style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" style={{ padding: '12px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
            Xác Nhận Đặt Lịch
          </button>
        </form>
      )}
    </div>
  );
}