import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Project1 from '@/assets/1.jpeg';
import Project2 from '@/assets/2.jpeg';
import Project3 from '@/assets/3.jpeg';
import Project4 from '@/assets/4.jpeg';

interface Project {
  id: number;
  title: string;
  image: string;
  description?: string;
  price?: string;
  location?: string;
  size?: string;
  status?: string;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Residences', 
    image: Project1, 
    description: 'Modern residences with pool and landscaped garden.',
    price: '₹2.75 Cr onwards',
    location: 'Gurgaon, Sector 62',
    size: '4BHK RESIDENCES',
    status: 'Ready to Move'
  },
  { 
    id: 2, 
    title: 'Apartment', 
    image: Project2, 
    description: 'High-rise apartments in the city center with world-class amenities.',
    price: '₹2.51 Cr onwards',
    location: 'Noida, Sector 150',
    size: '3BHK+ & 4BHK',
    status: 'Under Construction'
  },
  { 
    id: 3, 
    title: 'Rental Space', 
    image: Project3, 
    description: 'Premium commercial rental space designed for modern businesses.',
    price: '₹60 LAKHS onwards',
    location: 'Cyber City, Gurugram',
    size: '2500 sq.ft',
    status: 'Ready to Move'
  },
  { 
    id: 4, 
    title: 'Fully Furnished Apartments', 
    image: Project4, 
    description: 'Fully furnished apartments available in prime locations.',
    price: '₹67.5 LAKHS onwards',
    location: 'Sector-93, Gurgaon',
    size: '1 BHK',
    status: 'Available'
  },
];

const Projects = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="projects">
      
{/* Stylish title with full-width underline */}
<div className="w-full py-3 mb-12 text-center">
  <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-widest font-serif inline-block relative">
    Our Projects
    <span className="block h-1 w-full bg-gray-800 mt-2 rounded-full"></span>
  </h2>
</div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group shadow-xl rounded-xl hover:scale-105 hover:shadow-3xl transition-transform duration-300 flex flex-col bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-92 object-cover rounded-t-xl transition-all duration-300 border-2 border-transparent"
              />
              <CardContent className="flex flex-col flex-grow justify-between p-5">
                <div>
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-xl font-bold text-black">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <p className="text-gray-700 text-sm mb-3">
                    {project.description}
                  </p>
                  {/* Property Details */}
                  <div className="text-xs text-gray-800 space-y-1">
                    <p><span className="font-semibold text-black">Price:</span> {project.price}</p>
                    <p><span className="font-semibold text-black">Location:</span> {project.location}</p>
                    <p><span className="font-semibold text-black">Size:</span> {project.size}</p>
                    <p><span className="font-semibold text-black">Status:</span> {project.status}</p>
                  </div>
                </div>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="mt-5 w-full bg-black text-white font-semibold tracking-wide py-4 text-lg rounded-md shadow-md hover:bg-[#FCBD01] hover:text-black transition-all duration-300"
                >
                  Book a Site Visit  
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
