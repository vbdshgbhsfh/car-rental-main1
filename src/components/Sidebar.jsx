import React from 'react';

export default function Sidebar({ currentTab, onNavigate }) {
  return (
    <aside style={{ width: '220px', background: '#fff', borderRight: '1px solid #e2e8f0', padding: '20px', minHeight: 'calc(100vh - 70px)' }}>
      <h3 style={{ fontSize: '14px', textTransform: 'uppercase', color: '#64748b', marginBottom: '15px' }}>Quản Trị Admin</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <li>
          <button 
            onClick={() => onNavigate('admin_dashboard')}
            style={{ width: '100%', textAlign: 'left', padding: '10px', background: currentTab === 'admin_dashboard' ? '#e0f2fe' : 'transparent', color: currentTab === 'admin_dashboard' ? '#0284c7' : '#334155', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
          >
             Tổng Quan
          </button>
        </li>
        <li>
          <button 
            onClick={() => onNavigate('admin_vehicles')}
            style={{ width: '100%', textAlign: 'left', padding: '10px', background: currentTab === 'admin_vehicles' ? '#e0f2fe' : 'transparent', color: currentTab === 'admin_vehicles' ? '#0284c7' : '#334155', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            🚗 Quản Lý Xe
          </button>
        </li>
        <li>
          <button 
            onClick={() => onNavigate('admin_orders')}
            style={{ width: '100%', textAlign: 'left', padding: '10px', background: currentTab === 'admin_orders' ? '#e0f2fe' : 'transparent', color: currentTab === 'admin_orders' ? '#0284c7' : '#334155', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            📋 Quản Lý Đơn Hàng
          </button>
        </li>
      </ul>
    </aside>
  );
}