import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Building, TrendingUp } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import LeadForm from '@/components/LeadForm';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array()].map((_, i) => (
                  <Star key={i} size={20} className="text-secondary fill-secondary" />
                ))}
              </div>

            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Best Real Estate Company in{' '}
              <span className="text-secondary">Gurgaon</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
              T and T Realty Services Private Limited - Your trusted partner for premium 
              residential and commercial properties in Delhi NCR since 2014.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-secondary text-secondary-foreground hover:bg-secondary-light transition-smooth text-lg px-8 py-6"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
  <Button 
    size="lg"
    onClick={scrollToContact}
    className="bg-secondary text-secondary-foreground hover:bg-secondary-light transition-smooth text-lg px-8 py-6"
  >
    View Properties
  </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users size={32} className="text-secondary" />
                </div>
                <div className="text-3xl font-bold text-primary-foreground">2000+</div>
                <div className="text-primary-foreground/80 text-sm">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Building size={32} className="text-secondary" />
                </div>
                <div className="text-3xl font-bold text-primary-foreground">500+</div>
                <div className="text-primary-foreground/80 text-sm">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp size={32} className="text-secondary" />
                </div>
                <div className="text-3xl font-bold text-primary-foreground">10+</div>
                <div className="text-primary-foreground/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star size={32} className="text-secondary" />
                </div>
                <div className="text-3xl font-bold text-primary-foreground">4.9</div>
                <div className="text-primary-foreground/80 text-sm">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right side - Lead Form */}
          <div className="flex justify-center md:justify-end">
            <LeadForm variant="compact" transparent />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
