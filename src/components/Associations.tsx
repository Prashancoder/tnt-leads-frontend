import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// ✅ Import all your logo images
import logo1 from "@/assets/logos/1.webp";
import logo2 from "@/assets/logos/2.webp";
import logo3 from "@/assets/logos/3.webp";
import logo4 from "@/assets/logos/4.webp";
import logo5 from "@/assets/logos/5.webp";
import logo6 from "@/assets/logos/6.webp";
import logo7 from "@/assets/logos/7.webp";
import logo8 from "@/assets/logos/8.webp";
import logo9 from "@/assets/logos/9.webp";
import logo10 from "@/assets/logos/10.webp";
import logo11 from "@/assets/logos/11.webp";
import logo12 from "@/assets/logos/12.webp";
import logo13 from "@/assets/logos/13.webp";
import logo14 from "@/assets/logos/14.webp";
import logo15 from "@/assets/logos/15.webp";
import logo16 from "@/assets/logos/16.webp";

// ✅ Developer logos array
const developers = [
  { name: "Developer 1", logo: logo1 },
  { name: "Developer 2", logo: logo2 },
  { name: "Developer 3", logo: logo3 },
  { name: "Developer 4", logo: logo4 },
  { name: "Developer 5", logo: logo5 },
  { name: "Developer 6", logo: logo6 },
  { name: "Developer 7", logo: logo7 },
  { name: "Developer 8", logo: logo8 },
  { name: "Developer 9", logo: logo9 },
  { name: "Developer 10", logo: logo10 },
  { name: "Developer 11", logo: logo11 },
  { name: "Developer 12", logo: logo12 },
  { name: "Developer 13", logo: logo13 },
  { name: "Developer 14", logo: logo14 },
  { name: "Developer 15", logo: logo15 },
  { name: "Developer 16", logo: logo16 },
];

const Associations = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl -z-10" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="uppercase tracking-widest text-sm text-primary font-semibold">
          Trusted Partnerships
        </p>
<h3 className="text-3xl md:text-5xl font-extrabold text-black mt-3">
  Our Developer Associations
</h3>

        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        <p className="text-lg md:text-xl text-gray-600 mt-5 max-w-2xl mx-auto">
          We collaborate with India’s top real estate developers to deliver{" "}
          <span className="font-semibold text-primary">luxury projects</span>,{" "}
          <span className="font-semibold text-primary">prime locations</span>, and{" "}
          <span className="font-semibold text-primary">exclusive investment opportunities</span>.
        </p>
      </motion.div>

      {/* Logos Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={28}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 1600, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {developers.map((developer, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="rounded-2xl border border-gray-200 shadow-lg bg-white/60 backdrop-blur-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 flex justify-center items-center">
                  <img
                    src={developer.logo}
                    alt={developer.name}
                    className="max-h-28 md:max-h-24 object-contain  hover:grayscale-0 transition-all"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-14 text-lg text-gray-700"
      >
        Building the future together with{" "}
        <span className="font-bold text-primary">visionary developers</span> who
        redefine luxury living.
      </motion.div>
    </section>
  );
};

export default Associations;
