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
    title: 'Luxury Villa', 
    image: Project1, 
    description: 'Modern villa with pool and landscaped garden.',
    price: '₹2.5 Cr onwards',
    location: 'Gurgaon, Sector 62',
    size: '3500 sq.ft',
    status: 'Ready to Move'
  },
  { 
    id: 2, 
    title: 'Apartment Complex', 
    image: Project2, 
    description: 'High-rise apartments in the city center with world-class amenities.',
    price: '₹75 L onwards',
    location: 'Noida, Sector 150',
    size: '1200 sq.ft',
    status: 'Under Construction'
  },
  { 
    id: 3, 
    title: 'Office Space', 
    image: Project3, 
    description: 'Premium commercial office space designed for modern businesses.',
    price: '₹1.2 Cr onwards',
    location: 'Cyber City, Gurugram',
    size: '2500 sq.ft',
    status: 'Ready to Move'
  },
  { 
    id: 4, 
    title: 'Retail Store', 
    image: Project4, 
    description: 'Prime location retail property with high footfall.',
    price: '₹90 L onwards',
    location: 'Connaught Place, Delhi',
    size: '1500 sq.ft',
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
    <section className="py-16 bg-green-50" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-green-900 text-center mb-12 tracking-wide">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="shadow-xl rounded-lg hover:scale-105 transition-transform duration-300 flex flex-col bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-92 object-cover rounded-t-md"
              />
              <CardContent className="flex flex-col flex-grow justify-between p-5">
                <div>
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-xl font-bold text-green-900">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <p className="text-green-700 text-sm mb-3">
                    {project.description}
                  </p>
                  {/* Property Details */}
                  <div className="text-xs text-gray-600 space-y-1">
                    <p><span className="font-semibold text-green-800">Price:</span> {project.price}</p>
                    <p><span className="font-semibold text-green-800">Location:</span> {project.location}</p>
                    <p><span className="font-semibold text-green-800">Size:</span> {project.size}</p>
                    <p><span className="font-semibold text-green-800">Status:</span> {project.status}</p>
                  </div>
                </div>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="mt-5 w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold tracking-wide py-2 rounded-md shadow-md hover:shadow-lg hover:from-green-700 hover:to-emerald-600 transition-all duration-300"
                >
                  ✨ Book a Site Visit
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
