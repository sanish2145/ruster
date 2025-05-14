import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A responsive e-commerce website built with React and Node.js.',
      link: '#',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Project Two',
      description: 'A task management app with real-time collaboration features.',
      link: '#',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Project Three',
      description: 'A portfolio website showcasing my design and coding skills.',
      link: '#',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;