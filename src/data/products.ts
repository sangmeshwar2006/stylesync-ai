export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
  rating: number;
  description?: string;
}

export const ALL_PRODUCTS: Product[] = [
  { 
    id: '1', 
    name: 'Monochrome Wool Coat', 
    price: 850, 
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600', 
    images: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Luxury', 
    rating: 4.9 
  },
  { 
    id: '2', 
    name: 'Raw Silk Evening Dress', 
    price: 1200, 
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600', 
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Couture', 
    rating: 5.0 
  },
  { 
    id: '3', 
    name: 'Minimalist Leather Tote', 
    price: 450, 
    image: 'https://images.unsplash.com/photo-1584917033904-4911785b0953?auto=format&fit=crop&q=80&w=600', 
    images: [
      'https://images.unsplash.com/photo-1584917033904-4911785b0953?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Accessories', 
    rating: 4.8 
  },
  { 
    id: '4', 
    name: 'Cashmere Turtleneck', 
    price: 320, 
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?auto=format&fit=crop&q=80&w=600', 
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Essential', 
    rating: 4.7 
  },
  { 
    id: '5', 
    name: 'Structured Blazer', 
    price: 580, 
    image: 'https://images.unsplash.com/photo-1591047139829-d91aec16adcd?auto=format&fit=crop&q=80&w=600', 
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aec16adcd?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1548142723-aae76789bb3c?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Luxury', 
    rating: 4.9 
  },
  { 
    id: '6', 
    name: 'Pleated Midi Skirt', 
    price: 390, 
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600', 
    images: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Essential', 
    rating: 4.6 
  },
  { 
    id: '7', 
    name: 'Velvet Stiletto', 
    price: 620, 
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600', 
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1512374382149-133cdb8439bb?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Accessories', 
    rating: 4.9 
  },
  { 
    id: '8', 
    name: 'Oversized Silk Shirt', 
    price: 420, 
    image: 'https://images.unsplash.com/photo-1596755094514-f87034a26cc1?auto=format&fit=crop&q=80&w=600', 
    images:[
      'https://images.unsplash.com/photo-1596755094514-f87034a26cc1?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&q=80&w=600'
    ],
    category: 'Luxury', 
    rating: 4.8 
  },
  { id: '9', name: 'Linen Wide-Leg Trousers', price: 290, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1551401340-022066ed7693?auto=format&fit=crop&q=80&w=600'], category: 'Essential', rating: 4.5 },
  { id: '10', name: 'Gold Link Bracelet', price: 1500, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600'], category: 'Accessories', rating: 5.0 },
  { id: '11', name: 'Shearling Aviator Jacket', price: 1800, image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1544022613-e87ce7526a1b?auto=format&fit=crop&q=80&w=600'], category: 'Luxury', rating: 4.9 },
  { id: '12', name: 'Asymmetric Satin Top', price: 340, image: 'https://images.unsplash.com/photo-1554412930-bc78864447f6?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1554412930-bc78864447f6?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?auto=format&fit=crop&q=80&w=600'], category: 'Essential', rating: 4.7 },
  { id: '13', name: 'Crocodile Effect Boots', price: 890, image: 'https://images.unsplash.com/photo-1520639889456-784432130d6e?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1520639889456-784432130d6e?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=600'], category: 'Accessories', rating: 4.8 },
  { id: '14', name: 'Tweed Tailored Jacket', price: 740, image: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600'], category: 'Couture', rating: 4.9 },
  { id: '15', name: 'Cat-Eye Sunglasses', price: 280, image: 'https://images.unsplash.com/photo-1511499767390-903390e6fbc4?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1511499767390-903390e6fbc4?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=600'], category: 'Accessories', rating: 4.6 },
  { id: '16', name: 'Merino Wool Scarf', price: 160, image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1444362444501-8e05a3964058?auto=format&fit=crop&q=80&w=600'], category: 'Essential', rating: 4.8 },
  { id: '17', name: 'Plissé Evening Gown', price: 2100, image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=600'], category: 'Couture', rating: 5.0 },
  { id: '18', name: 'Italian Leather Belt', price: 220, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1481309311660-f4216892697b?auto=format&fit=crop&q=80&w=600'], category: 'Accessories', rating: 4.7 },
  { id: '19', name: 'Denim Couture Jacket', price: 680, image: 'https://images.unsplash.com/photo-1576905355162-723d924d3a0c?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1576905355162-723d924d3a0c?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=600'], category: 'Luxury', rating: 4.4 },
  { id: '20', name: 'Embroidered Tunic', price: 420, image: 'https://images.unsplash.com/photo-1518622358385-8ea73a704930?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1518622358385-8ea73a704930?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=600'], category: 'Couture', rating: 4.8 },
  { id: '21', name: 'Suede Loafers', price: 490, image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=600'], category: 'Accessories', rating: 4.9 },
  { id: '22', name: 'Graphic Silk Scarf', price: 320, image: 'https://images.unsplash.com/photo-1582236173000-845763725624?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1582236173000-845763725624?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1520639889456-784432130d6e?auto=format&fit=crop&q=80&w=600'], category: 'Accessories', rating: 4.7 },
  { id: '23', name: 'Knitted Polo Shirt', price: 260, image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1596755094514-f87034a26cc1?auto=format&fit=crop&q=80&w=600'], category: 'Essential', rating: 4.5 },
  { id: '24', name: 'Double-Breasted Overcoat', price: 950, image: 'https://images.unsplash.com/photo-1544022613-e87ce7526a1b?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1544022613-e87ce7526a1b?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600'], category: 'Luxury', rating: 4.9 },
  { id: '25', name: 'High-Waist Skirt', price: 310, image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=600'], category: 'Essential', rating: 4.6 },
  { id: '26', name: 'Minimalist Watch', price: 1200, image: 'https://images.unsplash.com/photo-1524592091214-8c2ca8d24831?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1524592091214-8c2ca8d24831?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&q=80&w=600'], category: 'Accessories', rating: 4.8 },
  { id: '27', name: 'Cashmere Cardigan', price: 450, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?auto=format&fit=crop&q=80&w=600'], category: 'Essential', rating: 4.7 },
  { id: '28', name: 'Brogue Shoes', price: 540, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1512374382149-133cdb8439bb?auto=format&fit=crop&q=80&w=600'], category: 'Luxury', rating: 4.9 },
  { id: '29', name: 'Floral Maxi Dress', price: 780, image: 'https://images.unsplash.com/photo-1539008835279-4346ef018593?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1539008835279-4346ef018593?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600'], category: 'Couture', rating: 4.8 },
  { id: '30', name: 'Zip-Up Merino Hoody', price: 290, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600', images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?auto=format&fit=crop&q=80&w=600'], category: 'Essential', rating: 4.6 },
  { 
    id: '31', 
    name: 'Camel Hair Pea Coat', 
    price: 920, 
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600'],
    category: 'Luxury', 
    rating: 4.9,
    description: 'A classic silhouette redefined in premium camel hair. Features broad lapels and a structured drape.'
  },
  { 
    id: '32', 
    name: 'Silk Slip Dress', 
    price: 380, 
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600'],
    category: 'Essential', 
    rating: 4.7,
    description: 'Effortless elegance in 100% mulberry silk. Bias-cut for a flattering, fluid silhouette.'
  },
  { 
    id: '33', 
    name: 'Leather Pouch Bag', 
    price: 320, 
    image: 'https://images.unsplash.com/photo-1584917033904-4911785b0953?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1584917033904-4911785b0953?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600'],
    category: 'Accessories', 
    rating: 4.8,
    description: 'Soft butter-leather construction with a magnetic frame closure. Perfect for evening essentials.'
  },
  { 
    id: '34', 
    name: 'Chunky Knit Sweater', 
    price: 280, 
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600'],
    category: 'Essential', 
    rating: 4.6,
    description: 'Hand-knitted from a heavy wool-blend yarn. Oversized fit with dropped shoulders.'
  },
  { 
    id: '35', 
    name: 'Pinstripe Suit Jacket', 
    price: 640, 
    image: 'https://images.unsplash.com/photo-1591047139829-d91aec16adcd?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1591047139829-d91aec16adcd?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1548142723-aae76789bb3c?auto=format&fit=crop&q=80&w=600'],
    category: 'Luxury', 
    rating: 4.9,
    description: 'Tailored specifically for a sharp, commanding presence. Subtle white pinstripes on navy wool.'
  },
  { 
    id: '36', 
    name: 'Satin Wrap Skirt', 
    price: 310, 
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80&w=600'],
    category: 'Essential', 
    rating: 4.5,
    description: 'A versatile piece that transitions from office to evening with ease. High-lustre satin finish.'
  },
  { 
    id: '37', 
    name: 'Crystal Embellished Pumps', 
    price: 780, 
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1512374382149-133cdb8439bb?auto=format&fit=crop&q=80&w=600'],
    category: 'Accessories', 
    rating: 5.0,
    description: 'Pointed toe pumps adorned with hand-applied Swarovski crystals. A statement of pure luxury.'
  },
  { 
    id: '38', 
    name: 'Bow-Tie Silk Blouse', 
    price: 390, 
    image: 'https://images.unsplash.com/photo-1596755094514-f87034a26cc1?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1596755094514-f87034a26cc1?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&q=80&w=600'],
    category: 'Luxury', 
    rating: 4.8,
    description: 'Feminine sophistication with an adjustable bow neck. Crafted from lightweight, breathable silk.'
  },
  { 
    id: '39', 
    name: 'Pleated Chinos', 
    price: 240, 
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1551401340-022066ed7693?auto=format&fit=crop&q=80&w=600'],
    category: 'Essential', 
    rating: 4.4,
    description: 'Modern take on a classic. Double pleats for extra comfort and a retro-chic look.'
  },
  { 
    id: '40', 
    name: 'Diamond Stud Earrings', 
    price: 2200, 
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600'],
    category: 'Accessories', 
    rating: 5.0,
    description: 'Exquisite 1-carat total weight diamonds set in 18k white gold. Timeless brilliance.'
  },
  { 
    id: '41', 
    name: 'Leather Bomber Jacket', 
    price: 850, 
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1544022613-e87ce7526a1b?auto=format&fit=crop&q=80&w=600'],
    category: 'Luxury', 
    rating: 4.7,
    description: 'Supple lambskin leather with ribbed trims. An urban staple with a premium edge.'
  },
  { 
    id: '42', 
    name: 'Silk Camisole', 
    price: 180, 
    image: 'https://images.unsplash.com/photo-1554412930-bc78864447f6?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1554412930-bc788644447f6?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?auto=format&fit=crop&q=80&w=600'],
    category: 'Essential', 
    rating: 4.6,
    description: 'The ultimate layering piece. Fine silk with delicate spaghetti straps.'
  },
  { 
    id: '43', 
    name: 'Chelsea Boots', 
    price: 480, 
    image: 'https://images.unsplash.com/photo-1520639889456-784432130d6e?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1520639889456-784432130d6e?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=600'],
    category: 'Accessories', 
    rating: 4.9,
    description: 'Classic Chelsea design in premium black suede. Elasticated sides and a pull tab.'
  },
  { 
    id: '44', 
    name: 'Houndstooth Overcoat', 
    price: 760, 
    image: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600'],
    category: 'Couture', 
    rating: 4.8,
    description: 'Bold pattern work in a traditional overcoat style. Wool-blend for maximum warmth.'
  },
  { 
    id: '45', 
    name: 'Tortoise Sunglasses', 
    price: 240, 
    image: 'https://images.unsplash.com/photo-1511499767390-903390e6fbc4?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1511499767390-903390e6fbc4?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=600'],
    category: 'Accessories', 
    rating: 4.7,
    description: 'Vintage-inspired frames with modern polarized lenses. Made from high-grade acetate.'
  },
  { 
    id: '46', 
    name: 'Cashmere Beanie', 
    price: 120, 
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1444362444501-8e05a3964058?auto=format&fit=crop&q=80&w=600'],
    category: 'Essential', 
    rating: 4.5,
    description: 'Incredibly soft and warm. Rib-knitted from 100% two-ply cashmere.'
  },
  { 
    id: '47', 
    name: 'Organza Party Dress', 
    price: 520, 
    image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=600'],
    category: 'Couture', 
    rating: 4.9,
    description: 'Voluminous organza layers create a dreamy, ethereal look for any celebration.'
  },
  { 
    id: '48', 
    name: 'Suede Belt', 
    price: 140, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1481309311660-f4216892697b?auto=format&fit=crop&q=80&w=600'],
    category: 'Accessories', 
    rating: 4.6,
    description: 'Fine-grain suede with a polished silver-tone buckle. Perfect for chinos or denim.'
  },
  { 
    id: '49', 
    name: 'Distressed Denim Jacket', 
    price: 380, 
    image: 'https://images.unsplash.com/photo-1576905355162-723d924d3a0c?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1576905355162-723d924d3a0c?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=600'],
    category: 'Luxury', 
    rating: 4.4,
    description: 'Premium heavyweight denim with artistic hand-distressing. A rugged luxury icon.'
  },
  { 
    id: '50', 
    name: 'Silk Kaftan', 
    price: 460, 
    image: 'https://images.unsplash.com/photo-1518622358385-8ea73a704930?auto=format&fit=crop&q=80&w=600', 
    images: ['https://images.unsplash.com/photo-1518622358385-8ea73a704930?auto=format&fit=crop&q=80&w=600', 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=600'],
    category: 'Couture', 
    rating: 4.8,
    description: 'Loose, flowing silhouette in printed silk. The ultimate in luxury resort wear.'
  }
];

