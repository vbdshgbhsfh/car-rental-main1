import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const res = login(email, password);
    if (res.success) {
      alert(`Đăng nhập thành công với vai trò: ${res.role === 'admin' ? '🛡️ Quản trị viên Admin' : '👤 Khách hàng'}`);
      onNavigate('home');
    } else {
      setErrorMsg(res.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', background: '#fff', padding: '35px', borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <h2 style={{ textAlign: 'center', marginTop: 0, color: '#1e293b' }}> Đăng Nhập BMH</h2>
      
      {errorMsg && (
        <div style={{ backgroundColor: '#fef2f2', color: '#dc2626', padding: '10px', borderRadius: '6px', fontSize: '13px', marginBottom: '15px', border: '1px solid #fecaca' }}>
          ⚠️ {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Email tài khoản *</label>
          <input 
            type="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vd: user@gmail.com" 
            style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} 
          />
        </div>

        <div>
          <label style={{ fontSize: '13px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Mật khẩu *</label>
          <input 
            type="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••" 
            style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px', boxSizing: 'border-box' }} 
          />
        </div>

        <button type="submit" style={{ padding: '12px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
          Đăng Nhập
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#64748b' }}>
        Chưa có tài khoản?{' '}
        <span onClick={() => onNavigate('register')} style={{ color: '#0284c7', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}>
          Đăng ký ngay
        </span>
      </div>
    </div>
  );
}