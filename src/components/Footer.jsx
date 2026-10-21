import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer style={{ backgroundColor: '#f4f4f4', borderTop: '1px solid #e5e5e5', padding: '50px 0 30px 0', color: '#262626', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Khung chia cột thông tin */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          
          {/* Cột 1: LIÊN HỆ CHÚNG TÔI */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: '#737373', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '18px' }}>
              LIÊN HỆ CHÚNG TÔI
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li 
                onClick={() => onNavigate && onNavigate('test_drive')} 
                style={{ fontWeight: 'bold', cursor: 'pointer', color: '#262626' }}
              >
                Liên hệ tư vấn BMH
              </li>
              <li 
                onClick={() => onNavigate && onNavigate('distribution')} 
                style={{ fontWeight: 'bold', cursor: 'pointer', color: '#262626' }}
              >
                Showroom BMH
              </li>
              <li style={{ fontWeight: 'bold', color: '#262626' }}>
                Tìm hiểu về My App
              </li>
              <li style={{ fontWeight: 'bold', color: '#262626', marginTop: '5px' }}>
                Hotline: 1800 1101
              </li>
              <li style={{ fontWeight: 'bold', color: '#262626' }}>
                Email: care@bmh.com.vn
              </li>
            </ul>
          </div>

          {/* Cột 2: TÌM HIỂU THÊM VỀ BMH */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: '#737373', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '18px' }}>
              TÌM HIỂU THÊM VỀ BMH
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li style={{ fontWeight: 'bold', color: '#262626' }}>
                BMH Asia
              </li>
              <li 
                onClick={() => onNavigate && onNavigate('models')} 
                style={{ fontWeight: 'bold', cursor: 'pointer', color: '#262626' }}
              >
                Các Mẫu Xe BMH
              </li>
              <li 
                onClick={() => onNavigate && onNavigate('service')} 
                style={{ fontWeight: 'bold', cursor: 'pointer', color: '#262626' }}
              >
                Dịch Vụ Bảo Dưỡng
              </li>
            </ul>
          </div>

          {/* Cột 3: BMH VIỆT NAM */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: '#737373', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '18px' }}>
              TRỤ SỞ CHÍNH
            </h4>
            <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#262626' }}>
              Showroom BMH Tây Mỗ
            </p>
            <p style={{ fontSize: '13px', color: '#525252', margin: '0 0 8px 0', lineHeight: '1.5' }}>
              Vinhomes Smart City, Nam Từ Liêm, Hà Nội
            </p>
            <p style={{ fontSize: '13px', color: '#525252', margin: 0 }}>
              Thời gian làm việc: 08:00 - 18:00 (Thứ 2 - Chủ Nhật)
            </p>
          </div>

        </div>

        {/* Mạng xã hội & Copyright */}
        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          
          {/* Biểu tượng mạng xã hội */}
          <div style={{ display: 'flex', gap: '18px', fontSize: '20px', color: '#262626' }}>
            <span style={{ cursor: 'pointer' }}>🌐</span>
            <span style={{ cursor: 'pointer' }}>📷</span>
            <span style={{ cursor: 'pointer' }}>▶️</span>
          </div>

          {/* Bản quyền */}
          <div style={{ fontSize: '12px', color: '#737373' }}>
            © BMH Vietnam 2026. Tất cả các quyền được bảo lưu.
          </div>

        </div>

      </div>
    </footer>
  );
}