import React from 'react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, Heart, User, Settings, Package, Sparkles } from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Layout>
        <div className="py-48 text-center">
           <h1 className="text-4xl font-serif mb-6">Unauthorized</h1>
           <p className="text-white/50 mb-8">Please sign in to access your luxury profile.</p>
           <button onClick={() => window.history.pushState({}, '', '/')} className="px-8 py-4 bg-white text-black rounded-full font-bold">Back to StyleSync</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-8 mb-16">
            <div className="relative">
              <img src={user.photoURL || ''} alt={user.displayName || ''} className="w-24 h-24 rounded-full border-2 border-gold" />
              <div className="absolute -bottom-2 -right-2 bg-gold text-black p-1.5 rounded-full">
                <Sparkles size={14} />
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-serif mb-2">Bonjour, {user.displayName?.split(' ')[0]}</h1>
              <p className="text-white/40 text-sm uppercase tracking-widest">Premium Member since 2026</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="space-y-4">
              {[
                { icon: User, label: 'Profile' },
                { icon: Package, label: 'Order History' },
                { icon: Heart, label: 'Curated Wishlist' },
                { icon: Sparkles, label: 'AI Style Profile' },
                { icon: Settings, label: 'Account Settings' }
              ].map((item, i) => (
                <button 
                  key={i}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-full text-sm font-medium transition-all ${
                    i === 0 ? 'bg-white text-black' : 'hover:bg-white/5 text-white/60'
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Saved Outfits', count: 12, icon: Sparkles },
                  { label: 'Active Orders', count: 1, icon: Package },
                  { label: 'Reward Points', count: '4.5k', icon: Sparkles }
                ].map((stat, i) => (
                  <div key={i} className="glass p-8 rounded-premium border-white/5">
                    <stat.icon size={20} className="text-gold mb-4" />
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-3xl font-serif">{stat.count}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-serif mb-8 flex items-center gap-3">
                  <Sparkles size={20} className="text-gold" />
                  Your AI Curated Looks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative aspect-video rounded-premium overflow-hidden bg-premium-gray">
                    <img src="https://images.unsplash.com/photo-1549439602-43bbcb6d5882?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
                       <h4 className="text-lg font-serif">The Urban Professional</h4>
                       <p className="text-[10px] text-white/50 uppercase tracking-widest">3 Items Suggestions</p>
                    </div>
                  </div>
                   <div className="group relative aspect-video rounded-premium overflow-hidden bg-premium-gray">
                    <img src="https://images.unsplash.com/photo-1539106646872-20c2a299d63c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8">
                       <h4 className="text-lg font-serif">Coastal Evening</h4>
                       <p className="text-[10px] text-white/50 uppercase tracking-widest">AI Generated Palette</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
