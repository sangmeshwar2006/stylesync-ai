import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard.jsx';
import { Search, SlidersHorizontal } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/products.js';

export default function Shop() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProducts = ALL_PRODUCTS.filter(
    (product) =>
      (activeCategory === 'All' || product.category === activeCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div>
              <h1 className="text-5xl font-serif mb-2">The Collection</h1>
              <p className="text-white/50 text-sm">Curation of the world's finest garments.</p>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <button className="p-3 glass rounded-full hover:bg-white/10 transition-all" type="button">
                <SlidersHorizontal size={18} />
              </button>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-4 mb-12 pb-4 scrollbar-hide">
            {['All', 'Luxury', 'Couture', 'Accessories', 'Essential'].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 border border-white/10 hover:border-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-white/30 font-serif text-2xl italic">No pieces found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
