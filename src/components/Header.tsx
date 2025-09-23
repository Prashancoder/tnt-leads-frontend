import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import tntLogo from '@/assets/logo1.png';

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


      {/* Main Header */}
      <header className="bg-black shadow-professional sticky top-0 z-50">
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
                className="text-white hover:text-[#FCBD01] transition-smooth"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#FCBD01] transition-smooth"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#FCBD01] transition-smooth"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#FCBD01] transition-smooth"
              >
                Contact
              </button>
              {/* ✅ Call Now Button */}
<Button
  asChild
  className="bg-[#FCBD01] text-black transition-smooth hover:bg-[#FCBD01]"
>
  <a
    href="tel:918750057070"
    className="text-black no-underline hover:text-black visited:text-black"
  >
    Call Now
  </a>
</Button>


            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
              <nav className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white hover:text-[#FCBD01] transition-smooth text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-[#FCBD01] transition-smooth text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-white hover:text-[#FCBD01] transition-smooth text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-[#FCBD01] transition-smooth text-left"
                >
                  Contact
                </button>
                {/* ✅ Call Now in Mobile Menu */}
<Button
  asChild
  className="bg-[#FCBD01] text-black transition-smooth hover:bg-[#FCBD01] w-full"
>
  <a
    href="tel:918750057070"
    className="text-black no-underline hover:text-black visited:text-black"
  >
    Call Now
  </a>
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
