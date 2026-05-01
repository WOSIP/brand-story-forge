import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import faviconUrl from "@/assets/favicon.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Income Model", href: "/income-generation", isExternal: false },
    { name: "Services", href: "/services", sectionId: "services", isExternal: true },
    { name: "Global Reach", href: "/global-reach", sectionId: "global-reach", isExternal: true },
    { name: "Packages", href: "/pricing", sectionId: "pricing", isExternal: true },
    { name: "Results", href: "/results", sectionId: "case-studies", isExternal: true },
  ];

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSectionNav = (sectionId: string, href: string) => {
    setIsMobileMenuOpen(false);
    navigate(href);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-sm border-b border-border/50" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          onClick={(e) => {
            handleNavLinkClick();
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden group-hover:rotate-12 transition-transform flex-shrink-0">
            <img src={faviconUrl} alt="HellOOpass" className="w-full h-full object-contain" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-foreground">HellOOpass</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || location.pathname === `/${link.sectionId}`;

            const baseClass = `relative px-4 py-2 text-sm font-bold transition-colors duration-200 rounded-lg group ${
              isActive ? "text-primary bg-primary/10" : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
            }`;
            const underlineClass = `absolute bottom-1 left-4 right-4 h-[2px] bg-primary rounded-full transition-transform duration-200 origin-left ${
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`;

            if (link.isExternal && link.sectionId) {
              return (
                <button key={link.name} onClick={() => handleSectionNav(link.sectionId!, link.href!)} className={baseClass}>
                  {link.name}
                  <span className={underlineClass} />
                </button>
              );
            }

            return (
              <Link key={link.name} to={link.href!} className={baseClass}>
                {link.name}
                <span className={underlineClass} />
              </Link>
            );
          })}

          <button
            onClick={() => handleSectionNav("registration", "/registration")}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold cursor-pointer border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/80 active:bg-primary/60 active:scale-95 transition-all duration-200"
          >
            <span>Register Community</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border/50 shadow-2xl"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.href || location.pathname === `/${link.sectionId}`;

              if (link.isExternal && link.sectionId) {
                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleSectionNav(link.sectionId!, link.href!)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 group ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground/70 hover:text-foreground hover:bg-foreground/5 active:bg-foreground/10"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    ) : (
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    )}
                  </motion.button>
                );
              }

              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.href!}
                    onClick={handleNavLinkClick}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 group ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground/70 hover:text-foreground hover:bg-foreground/5 active:bg-foreground/10"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    ) : (
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            <div className="h-px bg-border/50 my-2" />

            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              onClick={() => handleSectionNav("registration", "/registration")}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-bold border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/80 active:bg-primary/60 active:scale-95 transition-all duration-200"
            >
              <span>Register Community</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
