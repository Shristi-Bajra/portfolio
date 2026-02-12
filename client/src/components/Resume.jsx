import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaBriefcase, FaDownload } from 'react-icons/fa';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      year: '2018 - 2022',
      description: 'Focused on software engineering, algorithms, and web development.',
    },
    {
      degree: 'High School Diploma',
      institution: 'High School Name',
      year: '2016 - 2018',
      description: 'Science stream with focus on mathematics and computer science.',
    },
  ];

  const experience = [
    {
      position: 'Senior Software Engineer',
      company: 'Tech Company',
      year: '2023 - Present',
      description: 'Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines',
      ],
    },
    {
      position: 'Software Engineer',
      company: 'Startup Inc.',
      year: '2022 - 2023',
      description: 'Developed full-stack web applications and RESTful APIs using modern technologies.',
      achievements: [
        'Built 10+ client projects',
        'Reduced load time by 30%',
        'Integrated third-party APIs',
      ],
    },
    {
      position: 'Junior Developer',
      company: 'Web Solutions',
      year: '2021 - 2022',
      description: 'Assisted in developing responsive websites and maintaining existing codebases.',
      achievements: [
        'Fixed 100+ bugs',
        'Created reusable components',
        'Collaborated with designers',
      ],
    },
  ];

  return (
    <section id="resume" className="min-h-screen py-20 px-8 md:px-20 bg-linear-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-500">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl">
            <FaDownload />
            Download CV
          </button>
        </div>

        {/* Education Section */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-500 p-3 rounded-lg">
              <FaGraduationCap className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-blue-500"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                  <span className="text-blue-500 font-medium">{edu.year}</span>
                </div>
                <p className="text-gray-600 font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-500">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-purple-500 p-3 rounded-lg">
              <FaBriefcase className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-purple-500"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">{exp.position}</h4>
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-purple-500 font-medium">{exp.year}</span>
                </div>
                <p className="text-gray-500 mb-4">{exp.description}</p>
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <p className="text-gray-600 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
