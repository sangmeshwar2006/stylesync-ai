import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  const navigate = (to: string) => {
    window.history.pushState({ product }, '', to);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ ...product, quantity: 1, size: 'M', color: 'Black' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate('/product-detail')}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-premium bg-premium-gray">
        <motion.img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-3"
            >
              <button 
                onClick={handleAddToCart}
                className="p-3 bg-white text-black rounded-full hover:bg-gold transition-colors"
                title="Add to Cart"
              >
                <ShoppingBag size={20} />
              </button>
              <button 
                onClick={(e) => e.stopPropagation()}
                className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors"
                title="Wishlist"
              >
                <Heart size={20} />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/product-detail');
                }}
                className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors"
                title="Quick View"
              >
                <Eye size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
            {product.category}
          </span>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-white/90 group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <div className="mt-1 flex items-center gap-1">
            <Star size={10} className="text-gold fill-gold" />
            <span className="text-[10px] text-white/50">{product.rating}</span>
          </div>
        </div>
        <p className="text-sm font-serif font-bold text-white">
          ${product.price}
        </p>
      </div>
    </motion.div>
  );
}

import { AnimatePresence } from 'motion/react';
