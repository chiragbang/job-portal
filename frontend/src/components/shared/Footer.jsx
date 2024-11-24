import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
          {/* <h2 className="text-3xl font-bold">Job <span>Portal</span></h2> */}
          <h1 className='text-3xl font-bold'>Job<span className='text-[#F83002]'> Portal</span></h1>

          <p className="text-gray-400 mt-3">
           Find your Dream Job.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-600 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-gray-400 hover:text-pink-500 transition"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-500">© 2024 Job Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
