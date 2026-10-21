import React, { useState } from 'react';
import { useCar } from '../../context/CarContext';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('cars');
  const { cars, addCar, deleteCar } = useCar() || { cars: [] };

  // Dữ liệu quản lý mẫu cho Admin
  const [testDriveRequests, setTestDriveRequests] = useState([
    { id: 1, name: 'Nguyễn Văn A', phone: '0988123456', car: 'Toyota Camry 2.5Q', date: '2026-10-25', status: 'Chờ duyệt' },
    { id: 2, name: 'Trần Thị B', phone: '0977654321', car: 'Mercedes-Benz C300 AMG', date: '2026-10-26', status: 'Đã xác nhận' }
  ]);

  const [buyOrders, setBuyOrders] = useState([
    { id: 101, customer: 'nguyenvana@gmail.com', carName: 'BMW 330i M Sport', price: '1.719.000.000 VNĐ', date: '2026-10-20', status: 'Đã thanh toán cọc' },
    { id: 102, customer: 'tranb@gmail.com', carName: 'Ford Ranger Wildtrak', price: '850.000.000 VNĐ', date: '2026-10-21', status: 'Đang xử lý' }
  ]);

  const [sellRequests, setSellRequests] = useState([
    { id: 201, owner: 'Lê Văn C', phone: '0912345678', carName: 'Honda CR-V 2022', expectedPrice: '900.000.000 VNĐ', status: 'Chờ thẩm định' }
  ]);

  // Form thêm xe mới vào Kho
  const [newCar, setNewCar] = useState({ name: '', price: '', image: '', specs: '' });

  const handleAddCar = (e) => {
    e.preventDefault();
    if (addCar) {
      addCar({ ...newCar, id: Date.now() });
      alert('✅ Đã thêm xe mới vào hệ thống BMH thành công!');
      setNewCar({ name: '', price: '', image: '', specs: '' });
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      
      {/* Header Dashboard */}
      <div style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', color: '#fff', padding: '25px', borderRadius: '12px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: '0 0 5px 0', fontSize: '26px' }}>🛡️ Bảng Quản Trị Hệ Thống BMH Admin</h1>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '14px' }}>Quản lý kho xe, danh sách mua bán, lịch lái thử và yêu cầu ký gửi.</p>
        </div>
        <div style={{ background: '#0284c7', padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>
          Role: System Administrator
        </div>
      </div>

      {/* Thanh Menu Chuyển Tab Quản Lý */}
      <div style={{ display: 'flex', gap: '10px', borderBottom: '2px solid #e2e8f0', marginBottom: '25px' }}>
        {[
          { id: 'cars', label: `🚗 Kho Xe & Thêm Xe (${cars.length})` },
          { id: 'orders', label: `🛒 Đơn Đặt Mua Xe (${buyOrders.length})` },
          { id: 'test_drives', label: `🏎️ Lịch Đặt Lái Thử (${testDriveRequests.length})` },
          { id: 'sell_requests', label: `📝 Yêu Cầu Ký Gửi Xe (${sellRequests.length})` }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '12px 20px',
              border: 'none',
              background: 'none',
              fontSize: '15px',
              fontWeight: activeTab === tab.id ? 'bold' : '500',
              color: activeTab === tab.id ? '#0284c7' : '#64748b',
              borderBottom: activeTab === tab.id ? '3px solid #0284c7' : '3px solid transparent',
              cursor: 'pointer',
              marginBottom: '-2px'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: QUẢN LÝ KHO XE & THÊM XE */}
      {activeTab === 'cars' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '25px' }}>
          
          {/* Form thêm xe */}
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ marginTop: 0, color: '#1e293b' }}>➕ Thêm Mẫu Xe Mới</h3>
            <form onSubmit={handleAddCar} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Tên mẫu xe *</label>
                <input type="text" required value={newCar.name} onChange={e => setNewCar({...newCar, name: e.target.value})} placeholder="vd: Audi A6 Sedan" style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Giá bán niêm yết *</label>
                <input type="text" required value={newCar.price} onChange={e => setNewCar({...newCar, price: e.target.value})} placeholder="vd: 2.200.000.000 VNĐ" style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Link ảnh xe (URL) *</label>
                <input type="text" required value={newCar.image} onChange={e => setNewCar({...newCar, image: e.target.value})} placeholder="https://..." style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>Thông số kỹ thuật *</label>
                <textarea required value={newCar.specs} onChange={e => setNewCar({...newCar, specs: e.target.value})} placeholder="Động cơ 2.0L, 250 mã lực..." style={{ width: '100%', padding: '8px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box', height: '60px' }} />
              </div>
              <button type="submit" style={{ padding: '10px', backgroundColor: '#16a34a', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '5px' }}>
                Đăng Bán Xe
              </button>
            </form>
          </div>

          {/* Danh sách xe hiện tại */}
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
            <h3 style={{ marginTop: 0, color: '#1e293b' }}>📋 Danh Sách Xe Trong Kho</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '500px', overflowY: 'auto' }}>
              {cars.map(c => (
                <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', border: '1px solid #f1f5f9', borderRadius: '6px', background: '#f8fafc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <img src={c.image} alt={c.name} style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>{c.name}</h4>
                      <span style={{ color: '#dc2626', fontWeight: 'bold', fontSize: '13px' }}>{c.price}</span>
                    </div>
                  </div>
                  <button onClick={() => deleteCar && deleteCar(c.id)} style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>
                    Xóa Xe
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: QUẢN LÝ ĐƠN MUA XE */}
      {activeTab === 'orders' && (
        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ marginTop: 0 }}>🛒 Tất Cả Đơn Đặt Mua Khách Hàng Gửi</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#f1f5f9', textAlign: 'left' }}>
                <th style={{ padding: '10px' }}>Mã Đơn</th>
                <th style={{ padding: '10px' }}>Email Khách Hàng</th>
                <th style={{ padding: '10px' }}>Mẫu Xe Đặt Mua</th>
                <th style={{ padding: '10px' }}>Giá Trị</th>
                <th style={{ padding: '10px' }}>Trạng Thái</th>
                <th style={{ padding: '10px' }}>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {buyOrders.map(o => (
                <tr key={o.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>#{o.id}</td>
                  <td style={{ padding: '10px' }}>{o.customer}</td>
                  <td style={{ padding: '10px', color: '#0284c7', fontWeight: 'bold' }}>{o.carName}</td>
                  <td style={{ padding: '10px', color: '#dc2626', fontWeight: 'bold' }}>{o.price}</td>
                  <td style={{ padding: '10px' }}><span style={{ background: '#dcfce7', color: '#15803d', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>{o.status}</span></td>
                  <td style={{ padding: '10px' }}><button onClick={() => alert(`Duyệt thành công đơn hàng #${o.id}`)} style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Duyệt Đơn</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 3: QUẢN LÝ LỊCH ĐẶT LÁI THỬ */}
      {activeTab === 'test_drives' && (
        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ marginTop: 0 }}>🏎️ Danh Sách Khách Hàng Đăng Ký Lái Thử</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#f1f5f9', textAlign: 'left' }}>
                <th style={{ padding: '10px' }}>Họ Và Tên</th>
                <th style={{ padding: '10px' }}>Số Điện Thoại</th>
                <th style={{ padding: '10px' }}>Mẫu Xe Muốn Lái</th>
                <th style={{ padding: '10px' }}>Ngày Lái Thử</th>
                <th style={{ padding: '10px' }}>Trạng Thái</th>
                <th style={{ padding: '10px' }}>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {testDriveRequests.map(req => (
                <tr key={req.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>{req.name}</td>
                  <td style={{ padding: '10px' }}>{req.phone}</td>
                  <td style={{ padding: '10px', color: '#0284c7', fontWeight: 'bold' }}>{req.car}</td>
                  <td style={{ padding: '10px' }}>{req.date}</td>
                  <td style={{ padding: '10px' }}><span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>{req.status}</span></td>
                  <td style={{ padding: '10px' }}><button onClick={() => alert(`Đã gọi điện chốt lịch lái thử với anh/chị ${req.name}`)} style={{ backgroundColor: '#16a34a', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Xác Nhận Gọi</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 4: YÊU CẦU KÝ GỬI BÁN XE */}
      {activeTab === 'sell_requests' && (
        <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ marginTop: 0 }}>📝 Yêu Cầu Ký Gửi Xe Của Khách Hàng</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#f1f5f9', textAlign: 'left' }}>
                <th style={{ padding: '10px' }}>Chủ Xe</th>
                <th style={{ padding: '10px' }}>Số Điện Thoại</th>
                <th style={{ padding: '10px' }}>Mẫu Xe Ký Gửi</th>
                <th style={{ padding: '10px' }}>Giá Mong Muốn</th>
                <th style={{ padding: '10px' }}>Trạng Thái</th>
                <th style={{ padding: '10px' }}>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {sellRequests.map(s => (
                <tr key={s.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>{s.owner}</td>
                  <td style={{ padding: '10px' }}>{s.phone}</td>
                  <td style={{ padding: '10px', fontWeight: 'bold' }}>{s.carName}</td>
                  <td style={{ padding: '10px', color: '#dc2626', fontWeight: 'bold' }}>{s.expectedPrice}</td>
                  <td style={{ padding: '10px' }}><span style={{ background: '#fef3c7', color: '#92400e', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>{s.status}</span></td>
                  <td style={{ padding: '10px' }}><button onClick={() => alert('Đã tiếp nhận xe để kiểm tra định giá!')} style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}>Duyệt Thẩm Định</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}