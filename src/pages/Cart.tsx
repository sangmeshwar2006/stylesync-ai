import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <Layout>
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-serif mb-12">Your Bag</h1>

          {cart.length === 0 ? (
            <div className="py-24 text-center space-y-6">
              <ShoppingBag size={64} className="mx-auto text-white/10" />
              <p className="text-white/40 font-serif text-2xl italic">Your collection is currently empty.</p>
              <button 
                onClick={() => window.history.pushState({}, '', '/shop')}
                className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold text-sm"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-12">
              <div className="space-y-8">
                {cart.map((item) => (
                  <motion.div 
                    key={`${item.id}-${item.size}-${item.color}`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-6 pb-8 border-b border-white/5"
                  >
                    <div className="w-24 h-32 rounded-xl overflow-hidden bg-premium-gray">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-serif">{item.name}</h3>
                          <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
                            {item.color} — {item.size}
                          </p>
                        </div>
                        <p className="font-serif font-bold">${item.price}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                           <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)} className="text-white/50 hover:text-white">-</button>
                           <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                           <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)} className="text-white/50 hover:text-white">+</button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.size, item.color)}
                          className="p-2 text-white/20 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="glass p-8 rounded-premium space-y-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/50">Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/50">Shipping</span>
                  <span className="text-gold uppercase tracking-widest text-[10px] font-bold">Complimentary</span>
                </div>
                <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <span className="text-xl font-serif">Total</span>
                  <span className="text-2xl font-serif font-bold text-gold">${total}</span>
                </div>
                <button 
                  onClick={() => window.history.pushState({}, '', '/checkout')}
                  className="w-full py-5 bg-white text-black rounded-full font-bold text-sm flex items-center justify-center gap-3 hover:bg-gold transition-colors"
                >
                  Proceed to Checkout <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
