import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed w-full bg-white bg-opacity-95 z-50 transition-shadow ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-primary flex items-center">
            <span>John Doe</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`md:hidden pb-4 ${mobileMenuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
