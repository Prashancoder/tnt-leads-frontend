import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tntLogo from '@/assets/logo1.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] text-white font-sans">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={tntLogo} alt="T&T Realty" className="h-20 w-auto" />
            <p className="text-sm leading-relaxed text-gray-300">
              Leading real estate consultancy in Delhi NCR since 2014. 
              Your trusted partner for premium properties and investments.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 8088113333</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@tandtrealty.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'contact'].map((section) => (
                <li key={section}>
                  <button 
                    onClick={() => scrollToSection(section)}
                    className="hover:text-[#A8D5BA] transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2">Property Types</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Residential Properties</li>
              <li>Commercial Properties</li>
              <li>Retail Shops</li>
              <li>SCO Plots</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 border-b border-white/20 pb-2">Visit Our Office</h4>
            <div className="flex items-start gap-2 text-sm text-gray-300 mb-3">
              <MapPin size={16} className="mt-1" />
              <div>
                2nd Floor, Ameya One,<br />
                Golf Course Road, Sector 42,<br />
                Gurgaon, Haryana 122022
              </div>
            </div>
            <div className="text-sm text-gray-300 mb-4">HARERA No: /Ext1/2023/222</div>

            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/company/tntrealtyin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="ghost" className="hover:bg-white/10 p-2 rounded-full">
                  <Linkedin size={16} />
                </Button>
              </a>
              <a
                href="https://www.youtube.com/c/TandTRealty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="ghost" className="hover:bg-white/10 p-2 rounded-full">
                  <Youtube size={16} />
                </Button>
              </a>
              <a
                href="https://x.com/tntrealtyin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="ghost" className="hover:bg-white/10 p-2 rounded-full">
                  <Twitter size={16} />
                </Button>
              </a>
              <a
                href="https://www.facebook.com/tntrealtyin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="ghost" className="hover:bg-white/10 p-2 rounded-full">
                  <Facebook size={16} />
                </Button>
              </a>
              <a
                href="https://www.instagram.com/tntrealtyin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="ghost" className="hover:bg-white/10 p-2 rounded-full">
                  <Instagram size={16} />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            © {currentYear} | T&T REALTY | All Rights Reserved.
          </div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="/privacy-policy" className="hover:text-[#A8D5BA] transition-colors">
              Privacy Policy
            </a>
            <span className="opacity-50">|</span>
            <a href="/terms-conditions" className="hover:text-[#A8D5BA] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
