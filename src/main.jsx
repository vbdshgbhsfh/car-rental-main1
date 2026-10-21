import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { CarProvider } from './context/CarContext.jsx'
import { OrderProvider } from './context/OrderContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CarProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </CarProvider>
    </AuthProvider>
  </React.StrictMode>,
)