import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Layout, Database, GitBranch, Globe, Server } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  icon,
  skills,
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      skills: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
      ],
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      skills: ["JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "SQLite",
      ],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      skills: ["Git", "GitHub"],
    },
    {
      title: "Other",
      icon: <Globe className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
      skills: [
        "Responsive Design",
        "UI/UX Design",
        "Performance Optimization",
        "Testing",
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
              My Skills
            </h2>
            <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I&apos;ve worked with a variety of technologies and tools throughout my
              career. Here are some of the key skills I&apos;ve developed over the
              years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                icon={category.icon}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
