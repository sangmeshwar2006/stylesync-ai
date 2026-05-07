import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/Admin';

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    const handleLocationChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    
    // Simple SPA router hack for AI Studio
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      if (args[0]?.product) {
        setSelectedProduct(args[0].product);
      }
      originalPushState.apply(window.history, args);
      handleLocationChange();
    };

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const renderPage = () => {
    switch (path) {
      case '/': return <Home />;
      case '/shop': return <Shop />;
      case '/collections': return <Shop />;
      case '/trending': return <Shop />;
      case '/ai-stylist': return <Home />; 
      case '/product-detail': return <ProductDetail product={selectedProduct} />;
      case '/cart': return <Cart />;
      case '/checkout': return <Checkout />;
      case '/dashboard': return <Dashboard />;
      case '/admin': return <AdminDashboard />;
      default: return <Home />;
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <AnimatePresence mode="wait">
          <motion.div
            key={path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </CartProvider>
    </AuthProvider>
  );
}
