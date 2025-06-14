import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="py-20 bg-[#2E1F1F] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for updates on events, special offers, and
            community news.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-[#3A2C2C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A89F]"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00A89F] text-[#2E1F1F] px-8 py-3 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-colors"
              type="submit"
            >
              <span>Coming Soon</span>
              <Send size={20} />
            </motion.button>
          </form>

          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-[#00A89F]"
            >
              Thanks for subscribing!
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;