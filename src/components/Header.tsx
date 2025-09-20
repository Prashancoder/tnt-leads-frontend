import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import tntLogo from '@/assets/logo.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 8088113333</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>info@tandtrealty.in</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <MapPin size={14} />
            <span>Sector 42, Gurgaon, Haryana 122022</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-professional sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img src={tntLogo} alt="T&T Realty" className="h-14 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-smooth"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-smooth"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-smooth"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-smooth"
              >
                Contact
              </button>
              {/* ✅ Call Now Button */}
              <Button
                asChild
                className="bg-gradient-primary hover:opacity-90 transition-smooth"
              >
                <a href="tel:917217806549">Call Now</a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <nav className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-foreground hover:text-primary transition-smooth text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-foreground hover:text-primary transition-smooth text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-foreground hover:text-primary transition-smooth text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-foreground hover:text-primary transition-smooth text-left"
                >
                  Contact
                </button>
                {/* ✅ Call Now in Mobile Menu */}
                <Button
                  asChild
                  className="bg-gradient-primary hover:opacity-90 transition-smooth w-full"
                >
                  <a href="tel:917217806549">Call Now</a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
