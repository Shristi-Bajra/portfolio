import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Python', level: 70 },
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Bio */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Crafting Digital Experiences
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              I'm a passionate software engineer with a love for creating elegant solutions
              to complex problems. My journey in tech started with curiosity and has evolved
              into a career focused on building impactful web applications.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              I specialize in full-stack development with a strong focus on modern JavaScript
              frameworks and clean, maintainable code. I believe in continuous learning and
              staying updated with the latest technologies.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open source, or sharing my knowledge through blog posts and mentoring.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">3+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">20+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
                <div className="text-slate-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">5+</div>
                <div className="text-slate-600">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Technical Skills
            </h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-3">
                    <span className="text-slate-700 font-semibold text-lg">{skill.name}</span>
                    <span className="text-indigo-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-linear-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100 + 600}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
