import { Calendar, Music, PartyPopper, ChevronDown, Star, Headphones, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import MediaGallery from '../components/sections/MediaGallery';
import Events from '../components/sections/Events';
import ScrollToTopButton from '../components/common/ScrollToTopButton';

// Copied from MediaGallery.tsx for local typing
interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  year: string;
}

// TODO: Swap these placeholders for your actual media imports once added to the assets folder.
import TartSoulFest1 from '../assets/images/TartSoulFest1.png';
import TartSoulFest2 from '../assets/images/TartSoulFest2.png';
import Journeymensoul from '../assets/images/Journeymensoul.png';
import TexasKing  from '../assets/images/TexasKing.png';
import TartAndSoulBand from '../assets/images/TartAndSoulBand.png';
import SoulFood1 from '../assets/images/SoulFood1.png';
import MainStage from '../assets/images/MainStage.png';
import SoulParkPerformance from '../assets/video/Soulful Park Performance.mp4';
import SoulfulTartCelebration from '../assets/video/Soulful Tart Celebration.mp4';


const mediaItems: MediaItem[] = [
  {
    type: "image",
    url: TartSoulFest1,
    thumbnail: TartSoulFest1,
    title: "Tart & Soul Fest",
    description: "A vibrant crowd enjoying the Tart & Soul Festival.",
    year: "2024",
  },

  {
    type: "video",
    url: SoulParkPerformance,
    thumbnail: SoulParkPerformance,
    title: "Soul Park Performance",
    description: "Short highlights from last year’s event.",
    year: "2024",
  },
 
  {
    type: "image",
    url: TartSoulFest2,
    thumbnail: TartSoulFest2,
    title: "Tart & Soul Fest",
    description: "Signature moment from Tart & Soul Festival.",
    year: "2024",
  },

  {
    type: "video",
    url: SoulfulTartCelebration,
    thumbnail: SoulfulTartCelebration,
    title: "Soulful Tart Celebration",
    description: "Short highlights from last year’s event.",
    year: "2024",
  },
];

const HIGHLIGHTS = [
  {
    icon: Calendar,
    text: "Regular Events"
  },
  {
    icon: Music,
    text: "Live Music"
  },
  {
    icon: PartyPopper,
    text: "Community Fun"
  }
];

const EventsPage = () => {
  // Refs for scroll animations
  const mainRef = useRef<HTMLDivElement>(null);
  const artistsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Trigger animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (artistsRef.current) {
      observer.observe(artistsRef.current);
    }
    
    return () => {
      if (artistsRef.current) {
        observer.unobserve(artistsRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section with Enhanced Visual Effects */}
      <div className="relative overflow-hidden">
        <PageHero
          variant="events"
          title="Experience the Soul"
          subtitle="Join us for unforgettable gatherings filled with music, food, and community spirit."
          image="/images/events-hero.jpg"
          highlights={HIGHLIGHTS}
          extraContent={
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center mt-4"
            >
              <span className="text-sm text-gray-400">Check out our upcoming events below!</span>
              <span className="text-sm text-gray-200 mt-2 font-semibold">Music By: Journeymen of Soul, Texas Kings</span>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="mt-8"
              >
                <ChevronDown className="text-tart-mint" size={24} />
              </motion.div>
            </motion.div>
          }
        />
      </div>

      {/* Main Event Section with Parallax and Glass Effects */}
      <motion.section 
        ref={mainRef}
        className="py-16 relative overflow-hidden bg-gradient-to-b from-[#1a0f0f] to-[#2E1F1F]"
        style={{ perspective: "1000px" }}
      >
        {/* Decorative background elements */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-20"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-tart-purple blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-tart-mint blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Main Event Card with Glass Morphism */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-20"
          >
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl p-0">
              <div className="flex flex-col lg:flex-row min-h-[400px]">
                {/* Featured Event Image Full Height/Width on Left */}
                <div className="w-full lg:w-1/2 relative min-h-[400px]">
                  <img
                    src={TartAndSoulBand}
                    alt="Tart & Soul Festival Band"
                    className="w-full h-full object-cover"
                    style={{ minHeight: '400px', maxHeight: '600px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">Tart & Soul Fest</h2>
                      <div className="flex items-center text-tart-mint">
                        <Star size={16} className="mr-1" />
                        <Star size={16} className="mr-1" />
                        <Star size={16} className="mr-1" />
                        <Star size={16} className="mr-1" />
                        <Star size={16} />
                        <span className="ml-2 text-white text-sm">Premier Event</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Event Details Card, less elongated and full width */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-10 min-h-[400px]">
                  <Events />
                </div>
              </div>
              {/* Two real images below, in same parent container */}
              <div className="flex flex-row gap-4 bg-transparent p-6 pt-4">
                <div className="flex-1 h-60 rounded-xl overflow-hidden shadow-md">
                  <img
                    src={SoulFood1}
                    alt="Soul Food Dish at Tart & Soul Fest"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div className="flex-1 h-60 rounded-xl overflow-hidden shadow-md">
                  <img
                    src={MainStage}
                    alt="Main Stage at Tart & Soul Fest"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Artists Section with Animation */}
          <div ref={artistsRef}>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-3 text-center text-white"
            >
              <span className="inline-block relative">
                Featured Artists
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-tart-mint"
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                />
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Experience the incredible talent that will be performing at this year's festival
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Band 1 - Journeymen of Soul - Enhanced Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-[#2a1a1a] to-[#3A2C2C]">
                  <div className="p-1 bg-gradient-to-r from-tart-purple via-tart-mint to-tart-purple rounded-xl">
                    <div className="bg-[#2a1a1a] rounded-lg overflow-hidden">
                      <div className="relative overflow-hidden group-hover:scale-105 transition-all duration-700">
                        <img
                          src={Journeymensoul}
                          alt="Journeymen of Soul"
                          className="max-h-64 object-contain mx-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end">
                          <div className="p-6">
                            <div className="flex items-center mb-2">
                              <Headphones size={16} className="text-tart-mint mr-2" />
                              <span className="text-tart-mint text-sm font-medium">HEADLINER</span>
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-1">Journeymen of Soul</h3>
                            <p className="text-gray-300 text-sm mb-3">Saturday, June 28 • Main Stage</p>
                            <motion.a 
                              href="https://www.facebook.com/TheJourneymenOfSoul/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm font-medium text-tart-mint hover:text-white transition-colors"
                              whileHover={{ x: 5 }}
                            >
                              Visit Artist <ChevronDown size={14} className="ml-1 rotate-[-90deg]" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Band 2 - Texas Kings - Enhanced Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-[#2a1a1a] to-[#3A2C2C]">
                  <div className="p-1 bg-gradient-to-r from-tart-mint via-tart-purple to-tart-mint rounded-xl">
                    <div className="bg-[#2a1a1a] rounded-lg overflow-hidden">
                      <div className="relative overflow-hidden group-hover:scale-105 transition-all duration-700">
                        <img
                          src={TexasKing}
                          alt="Texas Kings"
                          className="max-h-64 object-contain mx-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end">
                          <div className="p-6">
                            <div className="flex items-center mb-2">
                              <Users size={16} className="text-tart-mint mr-2" />
                              <span className="text-tart-mint text-sm font-medium">FEATURED ARTIST</span>
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-1">Texas Kings</h3>
                            <p className="text-gray-300 text-sm mb-3">Sunday, June 28 • Main Stage</p>
                            <motion.a 
                              href="https://www.texasking.ca/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm font-medium text-tart-mint hover:text-white transition-colors"
                              whileHover={{ x: 5 }}
                            >
                              Visit Artist <ChevronDown size={14} className="ml-1 rotate-[-90deg]" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Media Gallery Section with Enhanced Styling */}
      <section className="py-20 bg-gradient-to-b from-[#2E1F1F] to-[#1a0f0f]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tart-mint">Media Gallery</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Relive the magic from our previous events</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <MediaGallery items={mediaItems} />
          </motion.div>
        </div>
      </section>
      
      <ScrollToTopButton />
    </>
  );
};

export default EventsPage;