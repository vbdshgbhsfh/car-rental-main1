import React, { useState } from 'react';

// --- DANH SÁCH MẪU XE CHUẨN ---
const initialCars = [
  {
    id: 1,
    name: 'Toyota Camry 2.5Q',
    price: '1.050.000.000 VNĐ',
    description: 'Động cơ 2.5L DOHC • Hộp số tự động 8 cấp • Nội thất da cao cấp',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    name: 'Mercedes-Benz C300 AMG',
    price: '1.890.000.000 VNĐ',
    description: 'Gói ngoại thất AMG thể thao • Đèn Digital Light • Loa Burmester',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    name: 'Ford Ranger Wildtrak 2.0L',
    price: '850.000.000 VNĐ',
    description: 'Động cơ Bi-Turbo Diesel 2.0L • Dẫn động 2 cầu 4x4 • Màn hình 12 inch',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 4,
    name: 'BMW M5 Competition',
    price: '2.450.000.000 VNĐ',
    description: 'Động cơ V8 4.4L Twin-Turbo • Công suất 617 HP • Dẫn động xDrive',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 5,
    name: 'Nissan GT-R Nismo',
    price: '3.200.000.000 VNĐ',
    description: 'Huyền thoại Godzilla • Động cơ V6 Twin-Turbo • Khung gầm Carbon',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 6,
    name: 'Porsche 911 GT3 RS',
    price: '4.800.000.000 VNĐ',
    description: 'Động cơ hút khí tự nhiên 4.0L • Khí động học thuần đua • Cánh gió lớn',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60'
  }
];

// --- HEADER COMPONENT ---
function Header({ onNavigate, currentTab, role, userEmail, logout }) {
  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'models', label: 'Mẫu Xe' },
    { id: 'test_drive', label: 'Đặt Lịch Lái Thử' },
    { id: 'service', label: 'Đặt Hẹn Dịch Vụ' },
    { id: 'distribution', label: 'Hệ Thống Phân Phối' },
  ];

  return (
    <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px', height: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
          <div onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10L85 25V55C85 73.5 70 88 50 95C30 88 15 73.5 15 55V25L50 10Z" fill="#1e293b" />
              <path d="M30 65L45 45L55 55L75 30" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M60 30H75V45" stroke="#0284c7" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: '24px', fontWeight: '900', color: '#1e293b', letterSpacing: '1.5px', fontFamily: 'sans-serif' }}>
              BMH
            </span>
          </div>

          <nav style={{ display: 'flex', gap: '20px' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '24px 0',
                  fontSize: '14px',
                  fontWeight: currentTab === item.id ? '700' : '500',
                  color: currentTab === item.id ? '#0284c7' : '#334155',
                  borderBottom: currentTab === item.id ? '3px solid #0284c7' : '3px solid transparent',
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {!role ? (
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => onNavigate('login')} style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '8px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>Đăng Nhập</button>
              <button onClick={() => onNavigate('register')} style={{ backgroundColor: '#f1f5f9', color: '#334155', border: '1px solid #cbd5e1', padding: '8px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}>Đăng Ký</button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '13px', color: '#0284c7', fontWeight: '600' }}>
                {role === 'admin' ? '🛡️ Admin' : `👤 ${userEmail}`}
              </span>
              <button 
                onClick={() => onNavigate(role === 'admin' ? 'admin_dashboard' : 'customer_dashboard')} 
                style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
              >
                {role === 'admin' ? '📊 Quản Lý Admin' : '🛒 Giỏ Hàng'}
              </button>
              <button 
                onClick={() => { if (logout) logout(); onNavigate('home'); }} 
                style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}
              >
                Thoát
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

// --- FOOTER COMPONENT ---
function Footer() {
  return (
    <footer style={{ backgroundColor: '#1e293b', color: '#f8fafc', padding: '40px 0 20px 0', marginTop: '60px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '30px' }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#38bdf8' }}>BMH Vietnam</h3>
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6' }}>
              Nền tảng phân phối và dịch vụ ô tô chính hãng hàng đầu.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>Chính Sách</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', color: '#cbd5e1', lineHeight: '2' }}>
              <li>Bảo hành chính hãng</li>
              <li>Chính sách thanh toán</li>
              <li>Bảo mật thông tin</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>Liên Hệ</h4>
            <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.8', margin: 0 }}>
              Hotline: 1900 8888<br />
              Email: contact@bmh.com.vn
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #334155', paddingTop: '20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
             BMH Vietnam 2026. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}

// --- APP COMPONENT CHÍNH ---
export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [role, setRole] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  
  // State form đăng nhập & đăng ký
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });

  // State popup & đơn hàng chung
  const [showAuthWarning, setShowAuthWarning] = useState(false);
  const [selectedCarForOrder, setSelectedCarForOrder] = useState(null);
  const [orderFormData, setOrderFormData] = useState({ name: '', phone: '', address: '', note: '' });

  // Danh sách đơn hàng toàn cục
  const [orders, setOrders] = useState([
    { id: 'DH001', name: '', phone: '', car: 'BMW M5 Competition', price: '2.450.000.000 VNĐ', date: '21/10/2026', status: 'Chờ xử lý' }
  ]);

  const handleOpenOrderModal = (carInfo) => {
    if (!role) {
      setShowAuthWarning(true);
      return;
    }
    setSelectedCarForOrder(carInfo);
    setOrderFormData({ name: '', phone: '', address: '', note: '' });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      <Header 
        onNavigate={setCurrentTab} 
        currentTab={currentTab} 
        role={role} 
        userEmail={userEmail} 
        logout={() => { setRole(null); setUserEmail(''); }}
      />

      {/* BANNER ƯU ĐÃI BMW */}
      {currentTab === 'home' && (
        <div style={{
          position: 'relative',
          width: '100%',
          minHeight: '450px',
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.7)), url("https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff',
          textAlign: 'center',
          padding: '40px 20px',
          boxSizing: 'border-box'
        }}>
          <h1 style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '1px', marginBottom: '15px', textTransform: 'uppercase' }}>
            DẤU ẤN THÀNH CÔNG. KHỞI ĐẦU XỨNG TẦM.
          </h1>
          <p style={{ fontSize: '22px', fontWeight: '600', color: '#38bdf8', marginBottom: '30px' }}>
            SỞ HỮU DÒNG XE BMH VỚI TỔNG ƯU ĐÃI LÊN TỚI 1 TỶ ĐỒNG
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px', marginBottom: '35px', maxWidth: '800px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 20px', borderRadius: '8px', backdropFilter: 'blur(5px)', fontSize: '14px' }}>
               Camera hành trình BMH ACE 3.0 Pro
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 20px', borderRadius: '8px', backdropFilter: 'blur(5px)', fontSize: '14px' }}>
               Tặng 1 năm Bảo hiểm vật chất
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 20px', borderRadius: '8px', backdropFilter: 'blur(5px)', fontSize: '14px' }}>
               Gói bảo dưỡng miễn phí 3 năm / 40.000 km
            </div>
          </div>

          <button 
            onClick={() => handleOpenOrderModal({ name: 'Chương Trình Ưu Đãi BMH Đặc Biệt', price: 'Ưu đãi tới 1 Tỷ' })}
            style={{
              backgroundColor: '#0284c7',
              color: '#ffffff',
              border: 'none',
              padding: '14px 36px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)'
            }}
          >
            Find out more / Đăng ký nhận tư vấn ngay
          </button>
        </div>
      )}

      <main style={{ flex: 1, maxWidth: '1280px', margin: '0 auto', padding: '40px 20px', width: '100%', boxSizing: 'border-box' }}>
        
        {/* TRANG CHỦ & MẪU XE */}
        {(currentTab === 'home' || currentTab === 'models') && (
          <div>
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ fontSize: '28px', color: '#0f172a', fontWeight: 'bold', margin: '0 0 10px 0' }}>
                 Mẫu Xe Nổi Bật ({initialCars.length})
              </h2>
              <p style={{ color: '#64748b', margin: 0, fontSize: '15px' }}>
                Bảng giá niêm yết và thông số chi tiết các dòng xe đang có mặt tại hệ thống BMH.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '25px' }}>
              {initialCars.map((car) => (
                <div key={car.id} style={{ backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                  <img src={car.image} alt={car.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '18px', color: '#1e293b', fontWeight: 'bold', margin: '0 0 8px 0' }}>{car.name}</h3>
                      <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: '0 0 15px 0' }}>{car.description}</p>
                    </div>
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#dc2626', marginBottom: '15px' }}>{car.price}</div>
                      <button 
                        onClick={() => handleOpenOrderModal(car)}
                        style={{ width: '100%', backgroundColor: '#0284c7', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}
                      >
                        Đặt Mua Ngay
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ĐẶT LỊCH LÁI THỬ */}
        {currentTab === 'test_drive' && (
          <div style={{ backgroundColor: '#fff', padding: '35px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '24px', color: '#0f172a', fontWeight: 'bold', marginBottom: '10px' }}> Đặt Lịch Lái Thử Trực Tiếp</h2>
            <p style={{ color: '#64748b', marginBottom: '25px' }}>Trải nghiệm cảm giác lái đẳng cấp cùng các dòng xe mới nhất của BMH.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert("🎉 Đăng ký lái thử thành công!"); }} style={{ maxWidth: '600px', display: 'grid', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>Chọn mẫu xe *</label>
                <select required style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                  {initialCars.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>Họ và tên *</label>
                <input type="text" required placeholder="" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>Số điện thoại *</label>
                <input type="tel" required placeholder="" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Gửi Lịch Lái Thử</button>
            </form>
          </div>
        )}

        {/* ĐẶT HẸN DỊCH VỤ */}
        {currentTab === 'service' && (
          <div style={{ backgroundColor: '#fff', padding: '35px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '24px', color: '#0f172a', fontWeight: 'bold', marginBottom: '10px' }}> Đặt Hẹn Dịch Vụ Bảo Dưỡng</h2>
            <p style={{ color: '#64748b', marginBottom: '25px' }}>Trung tâm dịch vụ ủy quyền chính hãng BMH.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert("🎉 Đặt hẹn dịch vụ thành công!"); }} style={{ maxWidth: '600px', display: 'grid', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>Dịch vụ *</label>
                <select style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                  <option>Bảo dưỡng định kỳ</option>
                  <option>Sửa chữa chung</option>
                  <option>Đồng sơn & Làm đẹp xe</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px', fontSize: '14px' }}>Biển số xe *</label>
                <input type="text" required placeholder="30H-123.45" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Đặt Hẹn Ngay</button>
            </form>
          </div>
        )}

        {/* HỆ THỐNG PHÂN PHỐI */}
        {currentTab === 'distribution' && (
          <div style={{ backgroundColor: '#fff', padding: '35px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '24px', color: '#0f172a', fontWeight: 'bold', marginBottom: '10px' }}> Hệ Thống Showroom BMH</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
              <div style={{ padding: '20px', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#0284c7' }}>📍 BMH Hà Nội - Nam Từ Liêm</h3>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>Vinhomes Smart City, Tây Mỗ, Hà Nội</p>
              </div>
              <div style={{ padding: '20px', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#0284c7' }}>📍 BMH TP. Hồ Chí Minh</h3>
                <p style={{ margin: '5px 0', fontSize: '14px' }}>Quận 1, TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>
        )}

        {/* TRANG QUẢN TRỊ ADMIN (QUẢN LÝ TẤT CẢ ĐƠN HÀNG) */}
        {currentTab === 'admin_dashboard' && (
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '2px solid #f1f5f9', paddingBottom: '15px' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '24px', color: '#0f172a', fontWeight: 'bold' }}> HỆ THỐNG QUẢN TRỊ ADMIN BMH</h2>
                <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '14px' }}>Quản lý toàn bộ đơn đặt xe từ khách hàng.</p>
              </div>
              <div style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold', fontSize: '14px' }}>
                Tổng đơn: {orders.length}
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #cbd5e1', color: '#334155' }}>
                    <th style={{ padding: '12px' }}>Mã Đơn</th>
                    <th style={{ padding: '12px' }}>Khách Hàng</th>
                    <th style={{ padding: '12px' }}>Số Điện Thoại</th>
                    <th style={{ padding: '12px' }}>Mẫu Xe Đặt</th>
                    <th style={{ padding: '12px' }}>Giá Niêm Yết</th>
                    <th style={{ padding: '12px' }}>Ngày Đặt</th>
                    <th style={{ padding: '12px' }}>Trạng Thái</th>
                    <th style={{ padding: '12px' }}>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((ord) => (
                    <tr key={ord.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '12px', fontWeight: 'bold', color: '#0284c7' }}>{ord.id}</td>
                      <td style={{ padding: '12px', fontWeight: '600' }}>{ord.name}</td>
                      <td style={{ padding: '12px' }}>{ord.phone}</td>
                      <td style={{ padding: '12px', fontWeight: 'bold' }}>{ord.car}</td>
                      <td style={{ padding: '12px', color: '#dc2626', fontWeight: 'bold' }}>{ord.price}</td>
                      <td style={{ padding: '12px', color: '#64748b' }}>{ord.date}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{ 
                          backgroundColor: ord.status === 'Đã xác nhận' ? '#dcfce7' : '#fef9c3', 
                          color: ord.status === 'Đã xác nhận' ? '#15803d' : '#a16207', 
                          padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' 
                        }}>
                          {ord.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <button 
                          onClick={() => {
                            setOrders(orders.map(o => o.id === ord.id ? { ...o, status: 'Đã xác nhận' } : o));
                            alert(`Đã duyệt đơn hàng ${ord.id} thành công!`);
                          }}
                          style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
                        >
                          Duyệt Đơn
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TRANG GIỎ HÀNG / LỊCH SỬ ĐẶT XE CỦA KHÁCH HÀNG */}
        {currentTab === 'customer_dashboard' && (
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ margin: '0 0 10px 0', fontSize: '24px', color: '#0f172a', fontWeight: 'bold' }}> Giỏ Hàng & Lịch Sử Đặt Xe Của Bạn</h2>
            <p style={{ color: '#64748b', marginBottom: '25px', fontSize: '14px' }}>Danh sách xe bạn đã gửi yêu cầu đặt mua và tư vấn tại hệ thống BMH[cite: 9].</p>
            
            {orders.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px dashed #cbd5e1', color: '#64748b' }}>
                Bạn chưa có đơn đặt xe nào. Hãy chọn mẫu xe yêu thích và bấm "Đặt Mua Ngay" nhé!
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #cbd5e1', color: '#334155' }}>
                      <th style={{ padding: '12px' }}>Mã Đơn</th>
                      <th style={{ padding: '12px' }}>Mẫu Xe</th>
                      <th style={{ padding: '12px' }}>Giá Niêm Yết</th>
                      <th style={{ padding: '12px' }}>Người Đặt</th>
                      <th style={{ padding: '12px' }}>Số Điện Thoại</th>
                      <th style={{ padding: '12px' }}>Ngày Đặt</th>
                      <th style={{ padding: '12px' }}>Trạng Thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((ord) => (
                      <tr key={ord.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <td style={{ padding: '12px', fontWeight: 'bold', color: '#0284c7' }}>{ord.id}</td>
                        <td style={{ padding: '12px', fontWeight: 'bold', color: '#1e293b' }}>{ord.car}</td>
                        <td style={{ padding: '12px', color: '#dc2626', fontWeight: 'bold' }}>{ord.price}</td>
                        <td style={{ padding: '12px', fontWeight: '600' }}>{ord.name}</td>
                        <td style={{ padding: '12px' }}>{ord.phone}</td>
                        <td style={{ padding: '12px', color: '#64748b' }}>{ord.date}</td>
                        <td style={{ padding: '12px' }}>
                          <span style={{ 
                            backgroundColor: ord.status === 'Đã xác nhận' ? '#dcfce7' : '#fef9c3', 
                            color: ord.status === 'Đã xác nhận' ? '#15803d' : '#a16207', 
                            padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' 
                          }}>
                            {ord.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ĐĂNG NHẬP */}
        {currentTab === 'login' && (
          <div style={{ maxWidth: '420px', margin: '40px auto', backgroundColor: '#fff', padding: '32px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ margin: '0 0 20px 0', fontSize: '22px', fontWeight: 'bold', color: '#0f172a' }}>Đăng Nhập</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (loginForm.email.includes('admin')) {
                setRole('admin');
                setUserEmail(loginForm.email);
              } else {
                setRole('customer');
                setUserEmail(loginForm.email || '');
              }
              setCurrentTab('home');
            }}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Email *</label>
                <input type="email" required placeholder="nam@gmail.com hoặc admin@bmh.com" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Mật khẩu *</label>
                <input type="password" required placeholder="••••••••" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px', marginBottom: '15px' }}>Đăng Nhập</button>
            </form>
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '15px', textAlign: 'center', fontSize: '13px', color: '#64748b' }}>
              Chưa có tài khoản? <span onClick={() => setCurrentTab('register')} style={{ color: '#0284c7', fontWeight: 'bold', cursor: 'pointer' }}>Đăng ký ngay</span>
            </div>
          </div>
        )}

        {/* ĐĂNG KÝ */}
        {currentTab === 'register' && (
          <div style={{ maxWidth: '420px', margin: '40px auto', backgroundColor: '#fff', padding: '32px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ margin: '0 0 20px 0', fontSize: '22px', fontWeight: 'bold', color: '#0f172a' }}>Tạo Tài Khoản BMH</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (registerForm.password !== registerForm.confirmPassword) {
                alert("Mật khẩu xác nhận không trùng khớp!");
                return;
              }
              alert(` Đăng ký thành công cho ${registerForm.fullName}! Vui lòng đăng nhập.`);
              setCurrentTab('login');
            }}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Họ và tên *</label>
                <input type="text" required placeholder="Nguyễn Hải Nam" value={registerForm.fullName} onChange={(e) => setRegisterForm({ ...registerForm, fullName: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Email *</label>
                <input type="email" required placeholder="nam@gmail.com" value={registerForm.email} onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Mật khẩu *</label>
                <input type="password" required placeholder="••••••••" value={registerForm.password} onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>Xác nhận mật khẩu *</label>
                <input type="password" required placeholder="••••••••" value={registerForm.confirmPassword} onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px', marginBottom: '15px' }}>Đăng Ký Tài Khoản</button>
            </form>
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '15px', textAlign: 'center', fontSize: '13px', color: '#64748b' }}>
              Đã có tài khoản? <span onClick={() => setCurrentTab('login')} style={{ color: '#0284c7', fontWeight: 'bold', cursor: 'pointer' }}>Đăng nhập ngay</span>
            </div>
          </div>
        )}

      </main>

      {/* --- POPUP YÊU CẦU ĐĂNG NHẬP --- */}
      {showAuthWarning && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.75)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(4px)' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', width: '90%', maxWidth: '420px', padding: '28px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>🔐</div>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#1e293b', fontWeight: 'bold' }}>Yêu Cầu Đăng Nhập</h3>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', marginBottom: '25px' }}>
              Vui lòng <strong>Đăng nhập</strong> hoặc <strong>Đăng ký</strong> tài khoản BMH để thực hiện đặt mua xe[cite: 7]!
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button onClick={() => setShowAuthWarning(false)} style={{ flex: 1, padding: '12px', backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Hủy</button>
              <button onClick={() => { setShowAuthWarning(false); setCurrentTab('login'); }} style={{ flex: 1, padding: '12px', backgroundColor: '#0284c7', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Đăng Nhập Ngay</button>
            </div>
          </div>
        </div>
      )}

      {/* --- POPUP FORM ĐẶT XE --- */}
      {selectedCarForOrder && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.75)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, backdropFilter: 'blur(4px)' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', width: '90%', maxWidth: '480px', padding: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
              <h3 style={{ margin: 0, fontSize: '18px', color: '#1e293b', fontWeight: 'bold' }}>
                 Nhận Tư Vấn / Đặt Mua: <span style={{ color: '#0284c7' }}>{selectedCarForOrder.name}</span>
              </h3>
              <button onClick={() => setSelectedCarForOrder(null)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#64748b' }}>✕</button>
            </div>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '15px' }}>
              Thông tin gói: <strong style={{ color: '#dc2626' }}>{selectedCarForOrder.price}</strong>
            </p>
            <form onSubmit={(e) => {
              e.preventDefault();
              const newOrder = {
                id: `DH00${orders.length + 1}`,
                name: orderFormData.name,
                phone: orderFormData.phone,
                car: selectedCarForOrder.name,
                price: selectedCarForOrder.price,
                date: new Date().toLocaleDateString('vi-VN'),
                status: 'Chờ xử lý'
              };
              setOrders([newOrder, ...orders]);
              alert(` Đặt mua xe ${selectedCarForOrder.name} thành công! Đơn hàng đã được lưu vào Giỏ hàng[cite: 9].`);
              setSelectedCarForOrder(null);
            }}>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>Họ và tên khách hàng *</label>
                <input type="text" required placeholder="Nguyễn Hải Nam" value={orderFormData.name} onChange={(e) => setOrderFormData({ ...orderFormData, name: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>Số điện thoại liên hệ *</label>
                <input type="tel" required placeholder="0987654321" value={orderFormData.phone} onChange={(e) => setOrderFormData({ ...orderFormData, phone: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>Địa chỉ / Showroom gần nhất</label>
                <input type="text" placeholder="Nam Từ Liêm, Hà Nội" value={orderFormData.address} onChange={(e) => setOrderFormData({ ...orderFormData, address: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '4px' }}>Ghi chú thêm</label>
                <textarea rows="2" placeholder="Tư vấn trả góp..." value={orderFormData.note} onChange={(e) => setOrderFormData({ ...orderFormData, note: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'none' }} />
              </div>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button type="button" onClick={() => setSelectedCarForOrder(null)} style={{ padding: '10px 16px', backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Hủy</button>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0284c7', color: '#ffffff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Xác Nhận Đặt Mua</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}