import React, { useRef } from 'react';
import Header from './Header';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Sparkles, X, Image as ImageIcon, Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import { getFashionAdvice } from '../lib/gemini';
import { useAuth } from '../context/AuthContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { authError, clearAuthError } = useAuth();
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [chatMessage, setChatMessage] = React.useState('');
  const [messages, setMessages] = React.useState<{ role: 'user' | 'bot'; text: string; image?: string }[]>([]);
  const [isTyping, setIsTyping] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<File | null>(null);
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim() && !selectedImage) return;

    const userMessage = chatMessage;
    const userImage = imagePreview;
    
    setChatMessage('');
    setSelectedImage(null);
    setImagePreview(null);
    
    setMessages(prev => [...prev, { role: 'user', text: userMessage, image: userImage || undefined }]);
    setIsTyping(true);

    let imageData;
    if (userImage) {
      const base64Data = userImage.split(',')[1];
      const mimeType = userImage.split(';')[0].split(':')[1];
      imageData = { data: base64Data, mimeType };
    }

    const botResponse = await getFashionAdvice(userMessage, imageData);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsTyping(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      
      {/* Auth Error Notification */}
      <AnimatePresence>
        {authError && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-lg"
          >
            <div className="glass-morphism bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-start gap-4 shadow-2xl backdrop-blur-xl">
              <div className="p-2 bg-red-500/20 rounded-full text-red-500">
                <AlertCircle size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-white mb-1">Authentication Issue</h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  {authError}
                </p>
                <div className="mt-4 flex gap-3">
                  <button 
                    onClick={() => window.open(window.location.href, '_blank')}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors"
                  >
                    Open in New Tab <ExternalLink size={12} />
                  </button>
                  <button 
                    onClick={clearAuthError}
                    className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
              <button 
                onClick={clearAuthError}
                className="text-white/30 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {children}
      </main>

      {/* AI Assistant Button */}
      <button 
        id="ai-trigger"
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 z-40 p-4 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform flex items-center justify-center border border-white/20"
      >
        <Sparkles size={24} className="animate-float" />
      </button>

      {/* AI Assistant Drawer */}
      <AnimatePresence>
        {isChatOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsChatOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-premium-dark border-l border-white/10 z-[60] flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-premium-dark/50 backdrop-blur-md sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                    <Sparkles size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg">StyleSync AI</h3>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest">Personal Vision Stylist</p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                {messages.length === 0 && (
                  <div className="text-center py-10 opacity-50">
                    <Sparkles size={40} className="mx-auto mb-4" />
                    <p className="text-sm">Hello! I'm your StyleSync AI stylist. You can ask me anything or even upload an image of an item to get matching suggestions!</p>
                  </div>
                )}
                {messages.map((m, i) => (
                  <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                    {m.image && (
                      <img 
                        src={m.image} 
                        alt="Uploaded clothing" 
                        className="max-w-[150px] rounded-xl mb-2 border border-white/10 shadow-lg"
                      />
                    )}
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      m.role === 'user' 
                        ? 'bg-white text-black font-medium' 
                        : 'glass text-white/90 border border-white/5'
                    }`}>
                      {m.text || (m.image && m.role === 'user' ? "What matches this?" : "")}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="glass p-4 rounded-2xl flex gap-1 items-center">
                       <Loader2 size={16} className="animate-spin text-white/50 mr-2" />
                       <span className="text-xs text-white/50">Analyzing style...</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 border-t border-white/10 bg-premium-dark">
                {imagePreview && (
                  <div className="relative inline-block mb-4">
                    <img src={imagePreview} className="w-20 h-20 object-cover rounded-lg border border-gold/50" />
                    <button 
                      onClick={() => { setSelectedImage(null); setImagePreview(null); }}
                      className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full text-white"
                    >
                      <X size={12} />
                    </button>
                  </div>
                )}
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder={imagePreview ? "Ask about this item..." : "Ask for fashion advice..."}
                      className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-14 text-sm focus:outline-none focus:border-gold transition-all duration-300"
                    />
                    <button 
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-white/40 hover:text-white transition-colors"
                    >
                      <ImageIcon size={20} />
                    </button>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      className="hidden" 
                      accept="image/*" 
                      onChange={handleImageSelect}
                    />
                    <button 
                      type="submit"
                      disabled={isTyping}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white text-black rounded-full hover:bg-gold transition-colors shadow-lg disabled:opacity-50"
                    >
                      <MessageSquare size={18} />
                    </button>
                  </div>
                  <p className="text-[10px] text-center text-white/30 uppercase tracking-[0.2em]">Crafted with StyleSync Neural Engine</p>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="bg-premium-gray border-t border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif premium-gradient-text">StyleSync AI</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Redefining luxury fashion through artificial intelligence. Personalized styling for the modern era.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Collections</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="hover:text-white cursor-pointer transition-colors">Minimalist 2024</li>
              <li className="hover:text-white cursor-pointer transition-colors">Eco-Luxury</li>
              <li className="hover:text-white cursor-pointer transition-colors">Digital Nomad</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="hover:text-white cursor-pointer transition-colors">Shipping</li>
              <li className="hover:text-white cursor-pointer transition-colors">Returns</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm flex-1 focus:outline-none" />
              <button className="px-4 py-2 bg-white text-black text-xs font-bold rounded-full">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-[10px] text-white/30 uppercase tracking-widest flex justify-between">
          <p>© 2026 StyleSync AI. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
