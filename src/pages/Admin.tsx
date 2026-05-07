import React from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import { BarChart3, Package, Users, ShoppingCart, ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DATA = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 5000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 6890 },
  { name: 'Sat', sales: 8390 },
  { name: 'Sun', sales: 5490 },
];

export default function AdminDashboard() {
  const { isAdmin } = useAuth();

  if (!isAdmin && process.env.NODE_ENV === 'production') {
    return <div className="p-24 text-center">Unauthorized. Premium access required.</div>;
  }

  return (
    <Layout>
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h1 className="text-4xl font-serif">Maison Control</h1>
              <p className="text-white/40 text-sm mt-2">Executive Overview & Operational Intelligence.</p>
            </div>
            <button className="px-6 py-3 bg-white text-black text-xs font-bold rounded-full">Export Report</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Revenue', value: '$1.2M', trend: '+12%', up: true },
              { label: 'Active Orders', value: '142', trend: '+5%', up: true },
              { label: 'Conversion Rate', value: '3.8%', trend: '-2%', up: false },
              { label: 'New Customers', value: '483', trend: '+18%', up: true }
            ].map((stat, i) => (
              <div key={i} className="glass p-8 rounded-premium border-white/5">
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-4">{stat.label}</p>
                <div className="flex items-end justify-between">
                   <h3 className="text-3xl font-serif">{stat.value}</h3>
                   <div className={`flex items-center gap-1 text-[10px] font-bold ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                     {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                     {stat.trend}
                   </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass rounded-premium p-8 h-[400px]">
               <h3 className="text-sm font-bold uppercase tracking-widest mb-8">Revenue Stream</h3>
               <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis dataKey="name" stroke="#ffffff30" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis stroke="#ffffff30" fontSize={10} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #262626', borderRadius: '12px' }}
                      itemStyle={{ color: '#D4AF37' }}
                    />
                    <Line type="monotone" dataKey="sales" stroke="#D4AF37" strokeWidth={3} dot={false} />
                  </LineChart>
               </ResponsiveContainer>
            </div>

            <div className="glass rounded-premium p-8 flex flex-col">
               <h3 className="text-sm font-bold uppercase tracking-widest mb-8">Recent Inventory</h3>
               <div className="space-y-6 flex-1">
                  {[
                    { name: 'Wool Coat', stock: 12, status: 'Low' },
                    { name: 'Silk Shirt', stock: 48, status: 'Target' },
                    { name: 'Leather Tote', stock: 0, status: 'Out' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                       <div>
                         <p className="font-medium">{item.name}</p>
                         <p className="text-[10px] text-white/40">{item.stock} in stock</p>
                       </div>
                       <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                         item.status === 'Low' ? 'bg-orange-500/10 text-orange-500' :
                         item.status === 'Target' ? 'bg-green-500/10 text-green-500' :
                         'bg-red-500/10 text-red-500'
                       }`}>
                         {item.status}
                       </span>
                    </div>
                  ))}
               </div>
               <button className="w-full py-4 mt-8 bg-white/5 border border-white/10 rounded-full text-xs font-bold hover:bg-white/10 transition-all">Manage Inventory</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
