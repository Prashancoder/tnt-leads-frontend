import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Building, Award, Shield } from 'lucide-react';
import { motion } from "framer-motion";

// ✅ Import your image
import gurgaoImg from '@/assets/gurgao.webp';

const About = () => {
  const whyChoose = [
    {
      icon: Award,
      title: "Seasoned Professionals",
      description: "T and T Realty brings a wealth of expertise to every client interaction with 20+ years of professional experience."
    },
    {
      icon: TrendingUp,
      title: "Market Knowledge",
      description: "Our team possesses an intimate understanding of the Gurgaon real estate scene, staying ahead of trends and fluctuations."
    },
    {
      icon: Building,
      title: "Strategic Developer Collaborations",
      description: "Our collaborations ensure clients gain access to the most coveted projects, amplifying investment potential."
    },
    {
      icon: Shield,
      title: "High Customer Satisfaction",
      description: "Our consistently high customer satisfaction rate reflects our client-centric approach and exceptional service delivery."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
            About <span className="bg-gradient-to-r from-yellow-500 to-secondary bg-clip-text text-transparent">T and T Realty</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Reality Of Real Estate - T and T Realty Services Private Limited is a leading 
            consultancy company incorporated in 2014 to drive Social and Economic Growth 
            through REAL ESTATE.
          </p>
        </motion.div>

        {/* Who We Are with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 tracking-wide">Who We Are</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              T and T Realty Services Pvt. Ltd. stands as a leading name in Real Estate 
              Consulting across the Delhi NCR region. Incepted in Year 2014, with our 
              proven track record, client-focused approach, and deep market expertise, 
              we are the trusted partner for navigating the real estate landscape.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              At T and T Realty, we specialize in a comprehensive range of services for 
              buying, selling, and investing in real estate. We are committed to building 
              partnerships, adding values to our assets & providing strong returns to our 
              investors and associates.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              T and T derives its name from the <strong>Trust</strong> of its stakeholders 
              and <strong>Transparency</strong> in all transactions. The commitment to these 
              principles ensures that we deliver reliable and effective results for our clients.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-yellow-700">20+</div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-yellow-700">100%</div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Transparent Deals</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl relative group">
              <img 
                src={gurgaoImg}
                alt="About T and T Realty" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="bg-gradient-to-r from-yellow-500 to-secondary bg-clip-text text-transparent">T&T Realty?</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-xl bg-white/90 backdrop-blur">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-gradient-to-r from-yellow-500 to-secondary rounded-full text-white shadow-lg">
                        <item.icon size={28} />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
