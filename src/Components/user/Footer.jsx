import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#009999]">BookBloom</h3>
          <p className="text-gray-900 text-sm">
            Your one-stop bookstore for all genres. Discover bestsellers, new releases, and timeless classics.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#009999]">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/books" className="hover:underline">Books</Link></li>
            <li><Link to="/categories" className="hover:underline">Categories</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#009999]">Contact Us</h3>
          <p className="text-gray-900 text-sm">📍 123 Book St, City, Country</p>
          <p className="text-gray-900 text-sm">📞 +91 1234 567 890</p>
          <p className="text-gray-900 text-sm">✉️ support@bookbloom.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#009999]">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-200"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-900 border-opacity-30 pt-6 text-center text-gray-900 text-sm">
        © 2025 BookBloom. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
