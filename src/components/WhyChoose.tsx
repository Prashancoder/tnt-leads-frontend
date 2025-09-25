// src/components/WhyChoose.tsx
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Building, Award, Shield } from 'lucide-react';
import { motion } from "framer-motion";

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

const WhyChoose = () => {
  return (
    <motion.section 
      id="why-choose"
      className="py-24 bg-background"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-center mb-12">
        Why Choose <span className="bg-gradient-to-r from-yellow-500 to-secondary bg-clip-text text-transparent">T&T Realty?</span>
      </h3>
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </motion.section>
  );
};

export default WhyChoose;
