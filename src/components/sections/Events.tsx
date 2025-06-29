import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Tart & Soul Festival',
      date: 'June 28, 2025',
      time: '11:00 am - 8:00 pm',
      location: 'Sons of Kent',
      music: (
        <motion.span
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Music by:{' '}
          <motion.a
            href="https://www.facebook.com/TheJourneymenOfSoul/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              color: "#7FFFD4",
              textShadow: "0px 2px 8px #7FFFD4",
              scale: 1.12,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="font-semibold underline underline-offset-4 decoration-tart-mint mr-2"
            style={{ display: "inline-block" }}
          >
            Journeymen of Soul
          </motion.a>
          <span className="text-gray-300 font-semibold">and</span>{' '}
          <motion.a
            href="https://www.texasking.ca/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              color: "#7FFFD4",
              textShadow: "0px 2px 8px #7FFFD4",
              scale: 1.12,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="font-semibold underline underline-offset-4 decoration-tart-mint"
            style={{ display: "inline-block" }}
          >
            Texas Kings
          </motion.a>
        </motion.span>
      ),
      description:
        'Join us for a day of soul food, music, and community celebration.',
    },
    // {
    //   title: 'Tart Making Workshop',
    //   date: 'September 22, 2025',
    //   time: '3:00 PM - 5:00 PM',
    //   location: 'Cultural Kitchen',
    //   description:
    //     'Learn the art of making perfect butter tarts with our expert bakers.',
    // },
    // {
    //   title: 'Music & Poetry Night',
    //   date: 'October 29, 2025',
    //   time: '7:00 PM - 10:00 PM',
    //   location: 'Soul Stage',
    //   description:
    //     'Experience an evening of soulful music and powerful spoken word.',
    // },
  ];

  return (
    <section id="events" className="py-20 bg-[#2E1F1F] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-300">Join us for these amazing gatherings</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#3A2C2C] p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock size={16} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <p className="text-gray-300 mb-4">{event.music}</p>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
               className="bg-[#00A89F] text-[#2E1F1F] px-6 py-2 rounded-full font-bold w-full hover:bg-opacity-90 transition-colors"
              >
                Learn More
              </motion.button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;