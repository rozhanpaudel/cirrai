'use client';
import Image from 'next/image';

const teamMembers = [
  {
    name: "KC Santosh,Ph.D.",
    role: "Technical Lead",
    title: "Ph.D. in Computer Science - Artificial Intelligence",
    image: "/team/prof_kc_santosh.jpg",
    description: "AI Expert, Professor and Chair at Department of Computer Science, USD"
  },
  {
    name: "Debesh Jha, Ph.D.",
    role: "Technical Lead",
    title: "Ph.D. in Computer Science",
    image: "/team/prof_debesh_jha.jpg",
    description: "Specializes in deep learning architectures for medical image analysis"
  },
  {
    name: "Roshan Paudel",
    role: "Entrepreneurial Lead",
    title: "Graduate Student at University Of South Dakota",
    image: "/team/roshan_paudel.jpg",
    description: "Expert in Software Engineering and Machine Learning"
  },
  {
    name: "Aashish Ghimire ",
    role: "Entrepreneurial Lead",
    title: "Graduate Student at University Of South Dakota",
    image: "/team/aashish_ghimire.jpeg",
    description: "Focuses on model development"
  },
  {
    name: "Manish Jha",
    role: "Entrepreneurial Lead",
    title: "Pursuing Ph.D. in Physics",
    image: "/team/manish_jha.jpeg",
    description: "Specializes in Physics"
  },
  {
    name: "Nitesh Sapkota",
    role: "Entrepreneurial Lead",
    title: "Graduate Student at University Of South Dakota",
    image: "/team/nitesh_sapkota.png",
    description: "Specializes in AI"
  }
];

export default function TeamsSection() {
  return (
    <section id="teams" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600">Meet the experts behind our innovative AI solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm p-6 transform hover:-translate-y-1 transition duration-300"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-1">{member.role}</p>
              <p className="text-sm text-gray-600 mb-2">{member.title}</p>
              <p className="text-sm text-gray-500">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 