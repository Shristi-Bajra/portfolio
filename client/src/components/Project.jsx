import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'A fully functional e-commerce platform with payment integration, cart management, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/400x300',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'frontend',
      description: 'A beautiful task management application with drag-and-drop functionality and real-time updates.',
      technologies: ['React', 'Redux', 'Tailwind CSS', 'Firebase'],
      image: 'https://via.placeholder.com/400x300',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'frontend',
      description: 'Real-time weather dashboard with forecasts, interactive maps, and location-based services.',
      technologies: ['React', 'API Integration', 'Charts.js'],
      image: 'https://via.placeholder.com/400x300',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 4,
      title: 'Social Media API',
      category: 'backend',
      description: 'RESTful API for a social media platform with authentication, posts, comments, and likes.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      image: 'https://via.placeholder.com/400x300',
      github: 'https://github.com',
      live: null,
    },
    {
      id: 5,
      title: 'Blog Platform',
      category: 'fullstack',
      description: 'A modern blogging platform with markdown support, categories, and user authentication.',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
      image: 'https://via.placeholder.com/400x300',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'frontend',
      description: 'A responsive portfolio website with smooth animations and modern design.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://via.placeholder.com/400x300',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="min-h-screen py-20 px-8 md:px-20 bg-linear-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-3 rounded-full hover:scale-110 transform"
                  >
                    <FaGithub className="text-blue-500 text-xl" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white p-3 rounded-full hover:scale-110 transform"
                    >
                      <FaExternalLinkAlt className="text-blue-500 text-xl" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
