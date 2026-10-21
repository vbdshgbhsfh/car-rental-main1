import React from 'react';
import logoImg from '../assets/logo.jpg';

export default function Header({ onNavigate, currentTab, role, userEmail, logout }) {
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
        
        {/* Logo & Menu chính */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
          
          {/* Cụm Logo + Chữ BMH */}
          <div 
            onClick={() => onNavigate('home')} 
            style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          >
            <img 
              src={logoImg} 
              alt="BMH Logo" 
              style={{ height: '42px', width: 'auto', borderRadius: '6px', objectFit: 'contain' }} 
            />
            <span style={{ fontSize: '22px', fontWeight: '900', color: '#1e293b', letterSpacing: '1px' }}>
              BMH
            </span>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', gap: '20px' }}>
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '24px 0',
                    fontSize: '14px',
                    fontWeight: isActive ? '700' : '500',
                    color: isActive ? '#0284c7' : '#334155',
                    borderBottom: isActive ? '3px solid #0284c7' : '3px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User / Auth Options */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {role === 'customer' && (
            <button 
              onClick={() => onNavigate('sell_request')} 
              style={{ backgroundColor: '#fef08a', color: '#854d0e', border: 'none', padding: '8px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}
            >
               Ký Gửi Xe
            </button>
          )}

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
                style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }}
              >
                Dashboard
              </button>
              <button 
                onClick={() => { logout(); onNavigate('home'); }} 
                style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
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