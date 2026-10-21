import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Danh sách tài khoản trong hệ thống (Tạo sẵn 1 tài khoản Admin mặc định)
  const [users, setUsers] = useState([
    { email: 'admin@bmh.com', password: 'admin123', role: 'admin', name: 'Quản Trị Viên BMH' }
  ]);

  // Thông tin người dùng đang đăng nhập
  const [currentUser, setCurrentUser] = useState(null);

  // Hàm Đăng Ký (Thêm tài khoản mới vào hệ thống)
  const register = (email, password, name) => {
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return { success: false, message: 'Email này đã được đăng ký trước đó!' };
    }
    
    const newUser = { email, password, name, role: 'customer' };
    setUsers([...users, newUser]);
    return { success: true, message: 'Đăng ký tài khoản thành công! Vui lòng đăng nhập.' };
  };

  // Hàm Đăng Nhập (Kiểm tra xem tài khoản đã tồn tại chưa)
  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return { success: true, role: user.role };
    } else {
      return { success: false, message: 'Tài khoản hoặc mật khẩu không chính xác! Hãy chắc chắn bạn đã Đăng ký.' };
    }
  };

  // Hàm Đăng Xuất
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      currentUser, 
      role: currentUser?.role || null, 
      userEmail: currentUser?.email || '', 
      login, 
      register, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}