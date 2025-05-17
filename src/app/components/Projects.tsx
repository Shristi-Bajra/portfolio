import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col h-full">
      <div className="h-44 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center">
            <Code className="h-12 w-12 text-teal-500/50" />
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Financial Platform",
      description:
        "A modern platform for tracking finances, managing budgets, and analyzing investments in one place.",
      tags: ["NextJs", "React", "Tailwind CSS", "Supabase", "Vercel"],
      image: "/images/financial.png",
      liveUrl: "https://budget-tracker-5vu6cvlq7-shreestybajracharya-gmailcoms-projects.vercel.app/",
      githubUrl: "https://github.com/Shristi-Bajra/Budget-Tracker",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing my projects and skills (this website).",
      tags: ["React", "Tailwind CSS", "Shadcn UI"],
      image: "",
      liveUrl: "#",
      githubUrl: "https://github.com/Shristi-Bajra/portfolio",
    },
    {
      title: "Real Time Coding Editor",
      description:
        "Collaborative code editor with real-time synchronization for pair programming and teaching.",
      tags: ["JavaScript", "React", "Express.js", "Web Socket"],
      image: "/images/real-time.png",
      liveUrl: "https://real-time-code-editor-navy.vercel.app/",
      githubUrl: "https://github.com/Shristi-Bajra/real-time-code-editor",
    },
  ];

  return (
    <section id="projects">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
              My Projects
            </h2>
            <div className="h-1 w-20 bg-teal-500 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on. Each project
              represents different challenges and learning opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;