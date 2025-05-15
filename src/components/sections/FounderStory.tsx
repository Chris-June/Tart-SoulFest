interface FounderStoryProps {
  paragraphs: string[];
}

import { motion } from 'framer-motion';

const FounderStory: React.FC<FounderStoryProps> = ({ paragraphs }) => (
  <section className="relative py-20 bg-gradient-to-br from-[#2E1F1F] via-[#3A2C2C] to-[#00A89F]/10 overflow-hidden">
    {/* Decorative SVG or Sparkles */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-tart-mint/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFA600]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12 relative z-10">
      {/* Founder Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="flex-shrink-0 mb-8 md:mb-0 md:mr-12 flex flex-col items-center"
      >
        <div className="bg-white rounded-full w-48 h-48 md:w-64 md:h-64 flex items-center justify-center shadow-2xl border-4 border-tart-mint/40 overflow-hidden">
          {/* Replace src with founder image when available */}
          <img
            src="https://placehold.co/256x256?text=Founder+Photo"
            alt="Founder headshot placeholder"
            className="object-cover w-44 h-44 md:w-60 md:h-60 rounded-full opacity-80"
          />
        </div>
        <div className="mt-4 text-tart-mint text-lg font-bold tracking-wide uppercase text-center">Doug Robbins</div>
      </motion.div>
      {/* Story Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: 'spring', delay: 0.2 }}
        className="flex-1 max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white text-left relative inline-block">
          Founder Story
          <span className="block h-2 w-24 bg-gradient-to-r from-tart-mint via-[#FFA600] to-tart-mint rounded-full mt-2"></span>
        </h2>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
<div className="space-y-6 text-lg md:text-xl text-gray-100 leading-relaxed font-serif founder-story-font bg-white/5 p-6 rounded-xl shadow-inner border border-tart-mint/20">
  {paragraphs.map((p, idx) => (
    <p
      key={idx}
      className="italic tracking-wide" 
      style={{ fontFamily: `'Playfair Display', serif`, fontWeight: 400 }}
    >
      {p}
    </p>
  ))}
</div>
<style>{`
  .founder-story-font { font-family: 'Playfair Display', serif; }
`}</style>
        {/* Optional pull-quote */}
        <div className="mt-8 p-6 bg-tart-mint/10 rounded-xl border-l-4 border-tart-mint text-tart-mint text-xl italic shadow-md max-w-xl">
          "Our journey began with a simple tart and a soul full of dreams."
        </div>
      </motion.div>
    </div>
  </section>
);

export default FounderStory;
