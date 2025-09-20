import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Building2, 
  ShoppingBag, 
  MapPin, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Properties",
      description: "Premium apartments, villas, and plots in prime locations across Gurgaon and Delhi NCR.",
      features: ["Ready to Move", "Under Construction", "Luxury Villas", "Affordable Housing"]
    },
    {
      icon: Building2,
      title: "Commercial Properties",
      description: "Strategic commercial spaces including offices, retail, and mixed-use developments.",
      features: ["Office Spaces", "Retail Shops", "IT Parks", "Co-working Spaces"]
    },
    {
      icon: ShoppingBag,
      title: "Retail Shops",
      description: "High-footfall retail spaces in premium malls and commercial complexes.",
      features: ["Mall Shops", "Street Retail", "Food Courts", "Brand Outlets"]
    },
    {
      icon: MapPin,
      title: "SCO Plots",
      description: "Shop-cum-Office plots in developing sectors with excellent growth potential.",
      features: ["Prime Locations", "High ROI", "Flexible Usage", "Investment Grade"]
    }
  ];

  const developers = [
    { name: "DLF", logo: "🏢" },
    { name: "M3M", logo: "🏗️" },
    { name: "Emaar", logo: "🌟" },
    { name: "Vatika", logo: "🌿" },
    { name: "Orris", logo: "⭐" },
    { name: "Trump", logo: "🏛️" }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">

        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            T and T Realty <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your investment goals and lifestyle needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl border border-gray-100">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-5 bg-gradient-to-tr from-primary to-secondary rounded-full shadow-lg">
                      <service.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary to-secondary p-10 md:p-16 rounded-3xl text-center text-white mb-20 shadow-xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Invest in Your Future?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Let our expert team guide you to the perfect property investment. 
            Get personalized recommendations based on your budget and goals.
          </p>
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="bg-white text-primary hover:bg-gray-100 font-semibold transition-smooth"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </motion.div>

        {/* Our Associations */}




      </div>
    </section>
  );
};

export default Services;
