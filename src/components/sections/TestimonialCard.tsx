import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author?: string;
  role: string;
  year?: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  year,
  image
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#3A2C2C] p-6 rounded-lg relative"
    >
      <Quote className="absolute top-4 right-4 text-tart-mint opacity-20" size={32} />
      
      <div className="flex items-start gap-4">
        {image && (
          <div className="flex-shrink-0">
            <div className="bg-white rounded-full flex items-center justify-center w-20 h-20 shadow-lg border-2 border-gray-200">
  <img
    src={image}
    alt={author}
    className="object-cover w-16 h-16 rounded-full"
    style={{ background: 'white' }}
  />
</div>
          </div>
        )}
        <div>
          <p className="text-gray-300 italic mb-4">{quote}</p>
          <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-sm text-gray-400">{role}</p>
            <p className="text-sm text-tart-mint mt-1">{year}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard