import React from 'react';
import { motion } from 'motion/react';
import Layout from '../components/Layout';
import { ShoppingBag, Star, Shield, ArrowRight, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

import { ALL_PRODUCTS } from '../data/products';

export default function ProductDetail({ product: propProduct }: { product?: any }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = React.useState('M');
  const [selectedColor, setSelectedColor] = React.useState('Midnight Black');

  // Use prop or fallback to first product
  const product = propProduct || ALL_PRODUCTS[0];
  
  const displayImages = product.images || [product.image];

  const productData = {
    ...product,
    description: product.description || 'A timeless silhouette crafted for the modern professional who values subtext over noise. Features silent seams and a structured architectural frame.',
    details: [
      'Hand-finished premium fabric',
      'Internal smartphone pocket',
      'Verified luxury quality',
      'Limited production run'
    ],
    images: displayImages.length > 1 ? displayImages : [displayImages[0], ALL_PRODUCTS[1].image]
  };

  return (
    <Layout>
      <section className="px-6 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Gallery */}
            <div className="space-y-6">
              <div className="aspect-[3/4] rounded-premium overflow-hidden bg-premium-gray">
                <img src={productData.images[0]} alt={productData.name} className="h-full w-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                 {productData.images.slice(0, 2).map((img: string, i: number) => (
                   <div key={i} className="aspect-[4/5] rounded-premium overflow-hidden bg-premium-gray">
                     <img src={img} alt={productData.name} className="h-full w-full object-cover" />
                   </div>
                 ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <div className="mb-8">
                <span className="text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Limited Edition</span>
                <h1 className="text-5xl font-serif mb-4">{productData.name}</h1>
                <div className="flex items-center gap-4 text-sm">
                   <div className="flex text-gold">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-gold" />)}
                   </div>
                   <span className="text-white/40">{Math.floor(Math.random() * 100) + 10} Verified Reviews</span>
                </div>
              </div>

              <p className="text-3xl font-serif mb-8">${productData.price}</p>
              
              <p className="text-white/60 leading-relaxed mb-10 text-sm">
                {productData.description}
              </p>

              {/* Selectors */}
              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Select Color</h4>
                  <div className="flex gap-3">
                    {['Midnight Black', 'Slate Gray', 'Sand'].map(c => (
                      <button 
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest border transition-all ${
                          selectedColor === c ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white/40'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                   <div className="flex justify-between items-center mb-4">
                     <h4 className="text-xs font-bold uppercase tracking-widest">Select Size</h4>
                     <button className="text-[10px] text-gold uppercase tracking-widest hover:underline">Size Guide</button>
                   </div>
                   <div className="flex gap-3">
                    {['S', 'M', 'L', 'XL'].map(s => (
                      <button 
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`w-12 h-12 flex items-center justify-center rounded-full text-xs font-bold border transition-all ${
                          selectedSize === s ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white/40'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mb-12">
                <button 
                  onClick={() => addToCart({ ...productData, image: productData.images[0], quantity: 1, size: selectedSize, color: selectedColor })}
                  className="flex-1 py-5 bg-white text-black rounded-full text-sm font-bold flex items-center justify-center gap-3 hover:bg-gold transition-colors"
                >
                  Add to Shopping Bag <ShoppingBag size={18} />
                </button>
                <button className="p-5 glass border-white/10 rounded-full hover:bg-white/10 transition-all">
                  <Heart size={20} />
                </button>
              </div>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-6 pt-12 border-t border-white/5">
                 <div className="flex items-start gap-4">
                    <Shield size={20} className="text-gold" />
                    <div>
                      <h5 className="text-[10px] font-bold uppercase tracking-widest mb-1">Authentic</h5>
                      <p className="text-[10px] text-white/40">Verified by our styling board.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <ArrowRight size={20} className="text-gold" />
                    <div>
                      <h5 className="text-[10px] font-bold uppercase tracking-widest mb-1">Fast Delivery</h5>
                      <p className="text-[10px] text-white/40">Ships globally in 48 hours.</p>
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
