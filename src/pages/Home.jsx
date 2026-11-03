import { motion, AnimatePresence } from 'motion/react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard.jsx';
import { ALL_PRODUCTS } from '../data/products.js';

const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 4);

export default function Home() {
  const navigate = (to) => {
    window.history.pushState({}, '', to);
  };

  return (
    <Layout>
      <section className="relative h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            className="h-full w-full bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-premium-dark via-premium-dark/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Evolution of Style</span>
            <h1 className="text-6xl md:text-8xl mb-8 leading-[0.9] font-serif">
              AI-Powered <br />
              <span className="premium-gradient-text">Fashion Mastery</span>
            </h1>
            <p className="text-lg text-white/60 mb-10 leading-relaxed font-light">
              Experience the future of personal styling. Our neural engine understands your aesthetic better than you do.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/collections')}
                className="px-8 py-4 bg-white text-black font-bold text-sm rounded-full flex items-center gap-2 hover:bg-gold transition-all hover:scale-105 active:scale-95 group"
              >
                Shop Collection
              </button>
              <button
                onClick={() => document.getElementById('ai-trigger')?.click()}
                className="px-8 py-4 glass text-white font-bold text-sm rounded-full hover:bg-white/10 transition-all"
              >
                Try AI Stylist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-premium-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Neural Styling', desc: 'Deep learning recommendations based on your unique visual aesthetic.' },
            { title: 'Trend Prediction', desc: 'Be ahead of the curve with our proprietary cultural trend analysis.' },
            { title: 'Luxury Verified', desc: 'Every piece is hand-curated from the world\'s most exclusive maisons.' },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-10 rounded-premium border-white/5 hover:border-white/20 transition-all group"
            >
              <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-premium-gray/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Summer 2024</span>
              <h2 className="text-4xl md:text-5xl">The Eternal <span className="font-serif italic font-light">Minimalist</span></h2>
            </div>
            <button onClick={() => navigate('/collections')} className="text-sm font-bold border-b border-white/20 pb-2 hover:border-white transition-all">
              View All Products
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
