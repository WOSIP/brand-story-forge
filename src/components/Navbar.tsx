import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Income Model', href: '/income-generation', isExternal: false },
    { name: 'Services', href: '/#services', isExternal: true },
    { name: 'Global Reach', href: '/#global-reach', isExternal: true },
    { name: 'Packages', href: '/#pricing', isExternal: true },
    { name: 'Results', href: '/#case-studies', isExternal: true },
  ];

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-sm border-b border-border/50' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" onClick={handleNavLinkClick}>
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform">
            <Smartphone className="w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-foreground">
            HELLOOPASS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-sm font-bold transition-colors ${
                  location.pathname === link.href ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
          <a href="/#registration">
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
              Register Community
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background border-b border-border shadow-2xl"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              link.isExternal ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-base font-bold text-foreground/70 hover:text-primary transition-colors"
                  onClick={handleNavLinkClick}
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={`text-base font-bold transition-colors ${
                    location.pathname === link.href ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                  }`}
                  onClick={handleNavLinkClick}
                >
                  {link.name}
                </Link>
              )
            ))}
            <a href="/#registration" onClick={handleNavLinkClick}>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold cursor-pointer">
                Register Community
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;