import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Search, User, Menu, X, Sparkles, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { user, login, logout, loginLoading } = useAuth();
  const { cart } = useCart();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-premium-dark/80 backdrop-blur-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={() => navigate('/')} className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2">
            <span className="premium-gradient-text">StyleSync</span>
            <span className="text-gold text-xs font-sans tracking-widest uppercase mt-1">AI</span>
          </button>
          
          <nav className="hidden md:flex items-center gap-6">
            {['Collections', 'Trending', 'Shop', 'AI Stylist'].map((item) => (
              <button 
                key={item} 
                onClick={() => navigate(`/${item.toLowerCase().replace(' ', '-')}`)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors hidden sm:block">
            <Search size={20} className="text-white/70" />
          </button>
          
          <div className="relative group">
             <button onClick={() => navigate('/cart')} className="p-2 hover:bg-white/5 rounded-full transition-colors relative">
              <ShoppingBag size={20} className="text-white/70" />
              {cart.length > 0 && (
                <span className="absolute top-1 right-1 bg-gold text-black text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          {user ? (
            <div className="flex items-center gap-3 pl-2 border-l border-white/10">
              <button onClick={() => navigate('/dashboard')}>
                <img 
                  src={user.photoURL || ''} 
                  alt={user.displayName || ''} 
                  className="h-8 w-8 rounded-full border border-white/20"
                />
              </button>
              <button 
                onClick={logout}
                className="text-xs font-medium text-white/50 hover:text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={login}
              disabled={loginLoading}
              className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loginLoading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Connecting...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          )}

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-premium-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {['Collections', 'Trending', 'Shop', 'AI Stylist'].map((item) => (
              <button 
                key={item} 
                onClick={() => navigate(`/${item.toLowerCase().replace(' ', '-')}`)}
                className="text-lg font-serif text-left"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
