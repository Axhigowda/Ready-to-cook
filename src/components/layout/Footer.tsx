import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Sahayog</h3>
            <p className="text-sm">Making healthy cooking accessible to everyone.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li className='hover:text-white'>About Us</li>
              <li className='hover:text-white'>How It Works</li>
              <li className='hover:text-white'>FAQs</li>
              <li className='hover:text-white'>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>support@sahayog.com</li>
              <li>+91 98765 43210</li>
              <li>Bengaluru, Karnataka</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 hover:text-white" />
              <Facebook className="w-5 h-5 hover:text-white" />
              <Youtube className="w-5 h-5 hover:text-white" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; 2024 Sahayog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;