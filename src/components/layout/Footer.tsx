import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import TandSLogo from '../../assets/images/TandS.png';

const Footer = () => {
  return (
    <footer className="bg-[#2E1F1F] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={TandSLogo} alt="Tart & Soul" className="h-8 w-8 object-contain rounded-full bg-white p-1" />
              <h3 className="text-xl font-bold">Tart & Soul</h3>
            </div>
            <p className="text-gray-300">
              Celebrating Black culture through food, music, and community.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-[#00A89F] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00A89F] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00A89F] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 King Street W, Chatham-Kent</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:hello@tartandsoul.com" className="hover:text-[#00A89F] transition-colors">
                  hello@tartandsoul.com
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+15551234567" className="hover:text-[#00A89F] transition-colors">
                  (555) 123-4567
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="text-gray-300">
              <p>Monday - Friday: 10am - 8pm</p>
              <p>Saturday: 11am - 9pm</p>
              <p>Sunday: 12pm - 6pm</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-300 hover:text-[#00A89F] transition-colors">About Us</a>
              <a href="/events" className="block text-gray-300 hover:text-[#00A89F] transition-colors">Events</a>
              <a href="/blog" className="block text-gray-300 hover:text-[#00A89F] transition-colors">Blog</a>
              <a href="/sponsors" className="block text-gray-300 hover:text-[#00A89F] transition-colors">Sponsors</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Tart & Soul. Made with ❤️ in Chatham-Kent. All rights reserved.
          </p>
          <p className="text-gray-300 mt-2">
            Powered by IntelliSync Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;