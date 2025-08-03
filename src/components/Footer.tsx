import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const aboutLinks = [
    { label: 'Our Story', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Blog', href: '#' }
  ];

  const navigationLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Team', href: '#team' },
    { label: 'Work', href: '#work' }
  ];

  const contactInfo = [
    { icon: Mail, label: 'support@boldtribe.in', href: 'mailto:support@boldtribe.in' },
    { icon: Phone, label: '+91 76848 36139', href: 'tel:+917684836139' },
    { icon: MapPin, label: 'San Francisco, CA', href: '#' }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-[#0f0f0f] py-8 sm:py-12 transition-colors duration-300 waves-pattern">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4 justify-center sm:justify-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">B</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">BoldTribe</h3>
                <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 -mt-1 transition-colors duration-300">Your Vision. Our Code. Boldly Delivered.</p>
              </div>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base transition-colors duration-300">
              Crafting futuristic digital experiences that transform visions into reality.
            </p>

            {/* Social Links */}
            <div className="flex space-x-2 sm:space-x-3 justify-center sm:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 dark:bg-[#1a1a1a] rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-500 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* About Column */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">About</h4>
            <ul className="space-y-2 sm:space-y-3">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-2 sm:space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center text-gray-300 dark:text-gray-400 hover:text-red-400 transition-colors duration-200 group justify-center sm:justify-start"
                  >
                    <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm sm:text-base">{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 dark:border-gray-800 pt-4 sm:pt-6 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 dark:text-gray-500 text-sm sm:text-base mb-3 md:mb-0 transition-colors duration-300">
              © 2024 BoldTribe. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-sm sm:text-base">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;