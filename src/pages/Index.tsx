import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import Associations from '@/components/Associations';  // ✅ Import new component
import { Sheet, SheetContent } from '@/components/ui/sheet';
import Projects from '@/components/Projects';
import WhyChoose from '@/components/WhyChoose';


const Index = () => {
  const [open, setOpen] = useState(false);

  // Open after delay on mobile; open on slight scroll on desktop
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth < 768) setOpen(true);
    }, 5000);

    const onScroll = () => {
      if (window.scrollY > 800 && window.innerWidth >= 768) {
        setOpen(true);
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
            <Projects />   {/* ✅ New Projects Section */}
      <Services />
      <Associations />
            <WhyChoose />   {/* ✅ Yeh ab alag component aa gaya */}

      <LeadForm />
      {/* Transparent side sheet lead form */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full sm:max-w-md bg-background/20 backdrop-blur-md border-white/20">
          <LeadForm variant="compact" transparent onSubmitted={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
      <Footer />
    </div>
  );
};

export default Index;
