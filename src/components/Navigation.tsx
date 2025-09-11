import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-900 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-auto ${
      isScrolled 
        ? 'px-4 sm:px-6 py-3' 
        : 'px-0 py-0'
    }`}>
      <div className={`transition-all duration-900 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-auto ${
        isScrolled 
          ? 'container mx-auto max-w-6xl' 
          : 'w-full'
      }`}>
        <div className={`transition-all duration-900 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-auto ${
          isScrolled 
            ? 'bg-white/95 dark:bg-[#1e1e1e]/95 backdrop-blur-xl rounded-full px-8 sm:px-12 py-4 sm:py-5 shadow-2xl border border-white/40 dark:border-gray-600/40 mx-auto transform scale-100 opacity-95' 
            : 'bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-6 sm:px-10 py-5 sm:py-6 shadow-lg opacity-100 scale-100'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-900 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-auto ${
                isScrolled 
                  ? 'bg-white' 
                  : 'bg-white'
              }`}>
                <img 
                  src="/team/Boldtribe logo logo.svg" 
                  alt="BoldTribe Logo Icon" 
                  className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-900 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-auto"
                />
              </div>
              <h1 className={`text-base sm:text-lg lg:text-xl font-bold transition-colors duration-900 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-auto ${
                isScrolled ? 'text-gray-900 dark:text-gray-100' : 'text-white'
              }`}>
                Boldtribe Innovations
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('/') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`font-medium text-sm xl:text-base transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400' 
                        : 'text-white/90 hover:text-white'
                    } ${
                      location.pathname === item.href ? 'text-red-600 dark:text-red-400' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`font-medium text-sm xl:text-base transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>

            {/* Theme Toggle & CTA Button */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <ThemeToggle />
              <a
                href="mailto:support@boldtribe.in"
                className={`px-5 xl:px-6 py-2 xl:py-3 rounded-lg xl:rounded-xl font-semibold text-sm xl:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isScrolled 
                  ? 'bg-red-600 text-white hover:bg-red-700 hover:shadow-red-500/25' 
                  : 'bg-white text-red-600 hover:bg-red-50'
              }`}>
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <ThemeToggle />
              <button
                className="p-2 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className={`h-6 w-6 sm:h-7 sm:w-7 ${isScrolled ? 'text-gray-900 dark:text-gray-100' : 'text-white'}`} />
                ) : (
                  <Menu className={`h-6 w-6 sm:h-7 sm:w-7 ${isScrolled ? 'text-gray-900 dark:text-gray-100' : 'text-white'}`} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`lg:hidden mt-6 sm:mt-8 pb-6 transition-all duration-300 ${
              isScrolled 
                ? 'border-t border-gray-200 dark:border-gray-600' 
                : 'border-t border-white/20'
            }`}>
              <div className="flex flex-col space-y-4 sm:space-y-5 mt-6">
                {navItems.map((item) => (
                  item.href.startsWith('/') ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`font-medium text-sm sm:text-base transition-colors duration-300 ${
                        isScrolled 
                          ? 'text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400' 
                          : 'text-white/90 hover:text-white'
                      } ${
                        location.pathname === item.href ? 'text-red-600 dark:text-red-400' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`font-medium text-sm sm:text-base transition-colors duration-300 ${
                        isScrolled 
                          ? 'text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400' 
                          : 'text-white/90 hover:text-white'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                ))}
                <a
                  href="mailto:support@boldtribe.in"
                  className={`px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 w-full text-center ${
                  isScrolled 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-white text-red-600 hover:bg-red-50'
                }`}>
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}